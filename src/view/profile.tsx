import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from "styled-components";

interface Props {
    data: any;
}

const Portrait = styled.img<Props> `
    opacity: ${props => Math.max(props.data.completion / 200 + 0.5, 0.3)};
    border-color: ${props => props.data.completion === 100 ? props.data.color: 'gray'};
`
const Title = styled.h2<Props> `
    color: ${props => props.data.completion === 100 ? props.data.color: 'white'};
`

const Description = styled.p`
    font-size: 1rem;
`

export function Profile(props:any) {
    return (
            <div className={'profile'}>
                <Title data={props.data} className={'profile-name'}>{props.data.name}</Title>
                <Portrait data={props.data} className={'profile-portrait'} src={props.data.portrait}/>
                <div className={'completion'}>
                    <CircularProgressbar
                        value={props.data.completion}
                        text={`${props.data.completion}%`}
                        styles={{
                            path: {stroke: `${props.data.color}`,},
                            text: {fill: `${props.data.color}`,}
                        }}
                    />
                </div>
                <Description>{props.data.description}</Description>
            </div>
        )
}