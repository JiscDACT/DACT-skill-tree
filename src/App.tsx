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
        changeProfiles(updateProfiles(getEmptyProfiles(), programming))
    }

    return (
        <article>
            <div className={'App-header'}>
                <h3>DACT Skill Tree</h3>
                <button onClick={resetProfiles}>Reset profiles</button>
                <p></p>
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
                    </TabList>
                    <TabPanel>
                        <div>
                            <h1>DACT Skill Tree</h1>
                            <p>Interactive skill tree and job profiler!</p>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <ProfileGroup profiles={profiles}></ProfileGroup>
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
                    <TabPanel>
                        <TreeWrapper
                            treeId="Test"
                            title="Test"
                            description="Test"
                            handleSave={myHandleSave}
                            tree={statistics}
                        />
                    </TabPanel>
                </Tabs>
            </section>
        </article>
    );
}

export default App;
