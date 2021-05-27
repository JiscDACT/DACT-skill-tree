import {Profile} from "./profile";
import React from "react";
import {SkillProfile} from "../model/skillProfile";

export function ProfileGroup(props:any){
    return (
            <div className={'profile-group'}>
            {
                props.profiles.map(function(profile:SkillProfile, key=profile.name){
                return <Profile key={key} data={profile}/>;
                })
            }
            </div>
    )
}