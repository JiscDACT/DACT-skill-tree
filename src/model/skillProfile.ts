import {Skill} from "beautiful-skill-tree/dist/models";
import {requireAll} from "../util";

let data = requireAll(require.context("../data/profiles/", false, /.json$/))
const profiles = data.map(function (obj: any) {
    let profile = obj.profile;
    profile.neededSkills = [];
    return profile;
});

export class SkillProfile {
    name: String = '';
    description?: String;
    skills: String[] = [];
    completion?: Number = 0;
    portrait?: String;
    color?: String = 'white';
    neededSkills?: String[] = [];
}

export function getEmptyProfiles() {
    return profiles
}

export function getProfiles(skillList: any): SkillProfile[] {
    let profiles = getEmptyProfiles();
    let skills = getSkills();
    profiles = updateProfiles(profiles, skills, skillList)
    return profiles;
}

export function getSkills(): any {
    let skills = localStorage.getItem("skills-DACT")
    if (skills && typeof skills != 'undefined') {
        return JSON.parse(skills)
    }
    return null;
}

export function getFormattedSkills(): any {
    return formatSkills(getSkills())
}

export function formatSkills(skills: any): any {
    let output = ''
    if (skills && typeof skills != 'undefined') {
        let i: keyof typeof skills
        for (i in skills) {
            if(skills[i].nodeState === 'selected') {
                output += i + '\n'
            }
        }
    }
    return output
}

function getSkillNameFromId(skillId:string, skillList: any): any{
    let skill = skillList.find(function(item:any){
        return item["id"] === skillId
    })
    if(!skill){
        console.log(skillId)
        return null
    }
    return skill
}

export function flattenSkills(trees: any): any[]{
    let skills: any[] = []
    for(let i in trees){
        let treeName = trees[i].name
        let tree = trees[i].tree
        for(let j in tree){
            getFlatChildList(tree[j], skills, treeName)
        }
    }
    return skills
}

function getFlatChildList(skill: any, skills: any[], treeName: string){
    skills.push({"id":skill.id, "title": skill.title + " in " + treeName})
    for(let i in skill.children){
        getFlatChildList(skill.children[i], skills, treeName)
    }
}

export function updateProfiles(profiles: any, skills: any, skillList: any) {
    let newProfileList = []

    if (!skills) {skills = []}

    for (let i in profiles) {
        let profile = profiles[i]
        profile.neededSkills = []
        let skillsTotal = profile.skills.length
        let skillsCompleted = 0
        for (let j in profile.skills) {
            let skillName = profile.skills[j];
            let node = skills[skillName as keyof Skill];
            if (node) {
                if (node.nodeState === 'selected') {
                    skillsCompleted += 1;
                } else {
                    profile.neededSkills.push(getSkillNameFromId(skillName, skillList))
                }
            } else {
                profile.neededSkills.push(getSkillNameFromId(skillName, skillList))
            }
        }
        let completion = Math.round((skillsCompleted / skillsTotal) * 100);
        if (!completion) {
            completion = 0;
        }
        profile.completion = completion
        newProfileList.push(profile)
    }
    return newProfileList
}