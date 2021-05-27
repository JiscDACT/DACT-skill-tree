import {Skill} from "beautiful-skill-tree/dist/models";

export class SkillProfile {
    name: String = '';
    description?: String;
    skills: String[] = [];
    completion?: Number = 0;
    portrait?: String;
    color?: String = 'white'
}

const  dataScientist: SkillProfile = {
    name: 'Data Scientist',
    color: 'MediumOrchid',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    skills: [
        'programming-analysis',
        'programming-reshape',
        'programming-model',
        'programming-aggregate',
        'stats-predictive-1',
        'stats-diagnostic-1',
        'stats-diagnostic-2',
        'stats-metrics',
        'stats-scaling',
        'stats-desc-1',
        'stats-desc-2',
        'stats-desc-3',
        'stats-desc-4',
        'stats-desc-5',
    ]
    ,portrait: 'portraits/portrait1.png'
    ,completion: 0
}
const  dataEngineer: SkillProfile = {
    name: 'Data Engineer',
    color: 'HotPink',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    skills: ['programming-csv-end-to-end', 'programming-xml']
    ,portrait: 'portraits/portrait2.png'
    ,completion: 0
}
const  softwareEngineer: SkillProfile = {
    name: 'Software Engineer',
    color: 'Turquoise',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    skills: [
        'python-data',
        'python-comp',
        'python-modules',
        'programming-version',
        'programming-ci',
        'programming-testing']
    ,portrait: 'portraits/portrait3.png'
    ,completion: 0
}
const  devOps: SkillProfile = {
    name: 'DevOps Engineer',
    color: 'DeepSkyBlue',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    skills: ['programming-version', 'programming-ci', 'programming-testing', 'programming-mg']
    ,portrait: 'portraits/portrait7.png'
    ,completion: 0
}

const  dataViz: SkillProfile = {
    name: 'Data Viz Wiz',
    color: 'DarkOrange',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    skills: ['programming-version','dataviz-1','dataviz-2']
    ,portrait: 'portraits/portrait6.png'
    ,completion: 0
}

export function getEmptyProfiles() {
    return [dataScientist, softwareEngineer, devOps, dataEngineer, dataViz]
}

export function getProfiles(): SkillProfile[] {
    let profiles = localStorage.getItem("profiles");
    if (profiles && profiles !== "null") {
        return JSON.parse(profiles);
    }
    return [dataScientist, softwareEngineer, devOps, dataEngineer, dataViz]
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