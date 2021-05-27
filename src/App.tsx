import React, {useState} from 'react';
import './App.css';
import {getEmptyProfiles, getProfiles} from './model/skillProfile'
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

    const [profiles, changeProfiles] = useState(getProfiles());

    function myHandleSave(storage: any, treeId: any, skills: any) {
        changeProfiles(updateProfiles(profiles, skills))
        storage.setItem("profiles", JSON.stringify(profiles))
        return storage.setItem("skills-" + treeId, JSON.stringify(skills));
    }

    //
    // Debugging use - deletes the saved profiles
    //
    function resetProfiles(){
        changeProfiles(updateProfiles(getEmptyProfiles(), []))
    }

    return (
        <div>
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
                            <h1>DACT Skill Tree</h1>
                            <p>Interactive skill tree and job profiler!</p>
                            <p>This is a demo only! The images it uses are all development placeholders and
                            are not owned or licensed for use.
                                If you own an image and want it removed,
                            just let me know and I'll remove it. </p>
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
                    </TabPanel>
                </Tabs>
            </article>
        </div>
    );
}

export default App;
