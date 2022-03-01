import React, {useState} from 'react';
import './App.css';
import {getEmptyProfiles, getProfiles, getFormattedSkills, formatSkills, flattenSkills} from './model/skillProfile'
import {updateProfiles} from "./model/skillProfile";
import {ProfileGroup} from "./view/profileGroup";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {TreeWrapper} from "./view/treeWrapper";
import {requireAll} from "./util";

function App() {

    const data = requireAll( require.context("./data/skilltrees/", false, /.json$/) )
    const trees = data.map(function(obj:any) {
        return obj.tree;
    });
    const skillList = flattenSkills(trees);

    const [userSkills, changeUserSkills] = useState(getFormattedSkills());
    const [profiles, changeProfiles] = useState(getProfiles(skillList));

    function myHandleSave(storage: any, treeId: any, skills: any) {
        changeProfiles(updateProfiles(profiles, skills, skillList))
        storage.setItem("profiles", JSON.stringify(profiles))
        changeUserSkills(formatSkills(skills))
        return storage.setItem("skills-" + treeId, JSON.stringify(skills));
    }

    //
    // Debugging use - deletes the saved profiles
    //
    function resetProfiles(){
        changeProfiles(updateProfiles(getEmptyProfiles(), [], skillList))
    }
    function clearAllData(){
        resetProfiles()
        localStorage.clear()
        changeUserSkills('')
    }

    return (
        <div className={'App'}>
            <header className={'App-header'}>
                <h1 className={'title'}>DACT Skill Tree</h1>
                <h3>Choose your own data analytics adventure!</h3>
            </header>
            <article>
                <Tabs>
                    <TabList>
                        <Tab>Introduction</Tab>
                        <Tab>Profiles</Tab>
                        {
                            trees.map(function(tree:any, key=tree.name){
                                return(
                                <Tab key={key}>{tree.name}</Tab>
                                )
                            })
                        }
                        <Tab>Admin/Dev use</Tab>
                    </TabList>
                    <TabPanel>
                        <div>
                            <div className={'hero'}>
                                <h1>Introduction</h1>
                                <p>This is an interactive skill tree: select skills in the areas
                                    in each tab, and then check out the Profiles tab to see which specialisms
                                    you are most closely matching</p>
                                <p>The data is only stored locally in your browser so feel free to play.</p>
                                <p>If you want to reset everything, there are buttons for this on the end tab.</p>
                                <p>Note that as this is currently just a demo/work-in-progress, it may change
                                    at any time, and your profile may be lost.</p>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <ProfileGroup profiles={profiles}/>
                    </TabPanel>
                    {
                        trees.map(function(tree:any, key=tree.name){
                            return(
                            <TabPanel key={key}>
                                <TreeWrapper
                                    treeId = "DACT"
                                    tree = {tree.tree}
                                    title = {tree.name}
                                    handleSave = {myHandleSave}
                                />
                            </TabPanel>
                            )})
                    }
                    <TabPanel>
                        <button onClick={resetProfiles}>Reset profiles</button>
                        <button onClick={clearAllData}>Clear all stored data</button>
                        <p>Current selected skills</p>
                        <p><textarea value={userSkills} readOnly={true}/></p>
                        <p>All skills</p>
                        <textarea value={
                            skillList.map(function (skill: any, key = skill.id) {
                                return (
                                    skill.id + ', ' + skill.title +'\n'
                                )
                            }).join('')
                        }/>
                    </TabPanel>
                </Tabs>
            </article>
            <footer>
                <p>This is a demo only! The images it uses are all development placeholders and
                    are not owned or licensed for use.
                    If you own an image and want it removed,
                    just let me know and I'll remove it. </p>
                <p>Icons made by <a href="https://www.flaticon.com/authors/dinosoftlabs"
                                    title="DinosoftLabs">DinosoftLabs</a> from <a href="https://www.flaticon.com/"
                                                                                  title="Flaticon">www.flaticon.com</a></p>
                <p>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a
                    href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
            </footer>
        </div>
    );
}

export default App;
