import React, {useState} from 'react';
import './App.css';
import {statistics, programming} from './tree'
import {getEmptyProfiles, getProfiles} from './skillProfile'
import {updateProfiles} from "./skillProfile";
import {ProfileGroup} from "./profileGroup";

import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {TreeWrapper} from "./treeWrapper";

function App() {
    const [profiles, changeProfiles] = useState(getProfiles());

    // TODO handle loading event as well
    function myHandleSave(storage: any, treeId: any, skills: any) {
        changeProfiles(updateProfiles(profiles, skills))
        storage.setItem("profiles", JSON.stringify(profiles))
        return storage.setItem("skills-" + treeId, JSON.stringify(skills));
    }

    function resetProfiles(){
        changeProfiles(updateProfiles(getEmptyProfiles(), []))
    }

    return (
        <article>
            <div className={'App-header'}>
                <h3>DACT Skill Tree</h3>
            </div>
            <section>
                <Tabs>
                    <TabList>
                        <Tab>Introduction</Tab>
                        <Tab>Profiles</Tab>
                        <Tab>Programming</Tab>
                        <Tab>Statistics</Tab>

                        <Tab>Data Management</Tab>
                        <Tab>Data Visualisation</Tab>
                        <Tab>Databases and SQL</Tab>
                        <Tab>Web development</Tab>

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
                    <TabPanel>
                        <TreeWrapper
                            treeId="programming"
                            title="Programming for data analytics"
                            tree={programming}
                            collapsible
                            description="Developing data analytics solutions with Python and R"
                            handleSave={myHandleSave}
                        />
                    </TabPanel>
                    <TabPanel>
                        <TreeWrapper

                            treeId="programming"
                            title="Using statistics"
                            tree={statistics}
                            collapsible
                            description="Developing data analytics solutions with Python and R"
                            handleSave={myHandleSave}
                        />
                    </TabPanel>
                    <TabPanel/>
                    <TabPanel/>
                    <TabPanel/>
                    <TabPanel/>
                    <TabPanel>
                        <button onClick={resetProfiles}>Reset profiles</button>
                    </TabPanel>
                </Tabs>
            </section>
        </article>
    );
}

export default App;
