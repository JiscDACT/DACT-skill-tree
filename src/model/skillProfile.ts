import {Skill} from "beautiful-skill-tree/dist/models";
import {requireAll} from "../util";

let data = requireAll(require.context("../data/profiles/", false, /.json$/))
const profiles = data.map(function (obj: any) {
    return obj.profile;
});

export class SkillProfile {
    name: String = '';
    description?: String;
    skills: String[] = [];
    completion?: Number = 0;
    portrait?: String;
    color?: String = 'white'
}

export function getEmptyProfiles() {
    return profiles
}

export function getProfiles(): SkillProfile[] {
    let profiles = getEmptyProfiles();
    let skills = getSkills();
    profiles = updateProfiles(profiles, skills)
    return profiles;

    // let saved = localStorage.getItem("profiles");
    // if (saved && saved !== "null") {
    //     let savedProfiles:SkillProfile[] = JSON.parse(saved)
    //     for (let i in savedProfiles){
    //         let completion = savedProfiles[i].completion
    //         let name = savedProfiles[i].name
    //         for (let j in profiles){
    //             if(profiles[j].name === name){
    //                 profiles[j].completion = completion
    //             }
    //         }
    //     }
    //     return profiles;
    // }
    // return profiles
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

export function updateProfiles(profiles: any, skills: any) {
    let newProfileList = []
    if (!skills) {return profiles}
    for (let i in profiles) {
        let profile = profiles[i]
        let skillsTotal = profile.skills.length
        let skillsCompleted = 0
        for (let skill in profile.skills) {
            let skillName = profile.skills[skill];
            let node = skills[skillName as keyof Skill];
            if (node) {
                if (node.nodeState === 'selected') {
                    skillsCompleted += 1;
                }
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