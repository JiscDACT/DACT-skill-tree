import {Profile} from "./profile";
import React, {useState} from "react";
import {SkillProfile} from "../model/skillProfile";

export function ProfileGroup(props:any){

    const categories = ['Any', 'Other', 'Epic', 'Squad']
    const squads = ['Any', 'Cheetah', 'Squadge', 'Beta Blockers']
    const levels = ['Any', 'Beginner', 'Intermediate', 'Advanced']

    const [category, setCategory] = useState('Any')
    const [squad, setSquad] = useState('Any')
    const [level, setLevel] = useState('Any')

    const filteredProfiles = () => {
        return props.profiles.filter((profile: { category: string; squad:string; level:string }) =>
            (category === 'Any' || (profile.category && profile.category === category))
            &&
            (squad === 'Any' || (profile.squad && profile.squad === squad))
            &&
            (level === 'Any' || (profile.level && profile.level === level))
        );
    }

    return (
            <div>
                <div className={'filter-group'}>
                    <p className={'filter'}>Profile type <select onChange={(e) => setCategory(e.target.value)}>
                        {
                            categories.map((cat) => {
                                return <option key={cat}>{cat}</option>
                            })
                        }
                    </select>
                    </p>

                    <p className={'filter'}>Squad <select onChange={(e) => setSquad(e.target.value)}>
                            {
                                squads.map((cat) => {
                                    return <option key={cat}>{cat}</option>
                                })
                            }
                        </select>
                    </p>

                    <p className={'filter'}>Level <select onChange={(e) => setLevel(e.target.value)}>
                        {
                            levels.map((cat) => {
                                return <option key={cat}>{cat}</option>
                            })
                        }
                    </select>
                    </p>
                </div>


            <div className={'profile-group'}>
            {
                filteredProfiles().map(function(profile:SkillProfile, key=profile.name){
                return <Profile key={key} data={profile}/>;
                })
            }
            </div>
            </div>
    )
}