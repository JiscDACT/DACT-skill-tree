import {Skill} from "beautiful-skill-tree/dist/models";
import {requireAll} from "../util";

let data = requireAll( require.context("../data/profiles/", false, /.json$/) )
const profiles = data.map(function(obj:any) {
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
    let profiles = localStorage.getItem("profiles");
    if (profiles && profiles !== "null") {
        return JSON.parse(profiles);
    }
    return getEmptyProfiles()
}

export function updateProfiles(profiles: any, skills:any){
    let newProfileList = []
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
        if(!completion){
            completion = 0;
        }
        profile.completion = completion
        newProfileList.push(profile)
    }
    return newProfileList
}