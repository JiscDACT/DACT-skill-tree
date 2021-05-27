import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from "styled-components";

export function Profile(props:any) {

        let borderColor='gray'
        let titleColor='white'
        if(props.data.completion===100){ borderColor=props.data.color; titleColor=props.data.color}

        const Portrait = styled.img ({
            opacity: Math.max(props.data.completion / 100, 0.1),
            borderColor: borderColor
        })

       const Title = styled.h2 ({
           color: titleColor
       })

        return (
            <div className={'profile'}>
                <Title className={'profile-name'}>{props.data.name}</Title>
                <Portrait className={'profile-portrait'} src={props.data.portrait}/>
                <div className={'completion'}>
                    <CircularProgressbar
                        value={props.data.completion}
                        text={`${props.data.completion}%`}
                        styles={{
                            // Customize the path, i.e. the "completed progress"
                            path: {
                                // Path color
                                stroke: `${props.data.color}`,
                            },
                            // Customize the text
                            text: {
                                // Text color
                                fill: `${props.data.color}`,
                            }
                        }}

                    />
                </div>
                <p>{props.data.description}</p>
            </div>
        )
}