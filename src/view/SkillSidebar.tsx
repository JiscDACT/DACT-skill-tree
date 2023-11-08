import React from 'react';
import Button from '@material-ui/core/Button';


type SkillSidebarProps = {
    skill: any;
    onClose: () => void;
};

type LinkType = {
    url: string;
    text: string;
};

function SkillSidebar({ skill, onClose }: SkillSidebarProps) {
    if (!skill) return null;

    return (
        <div className="skill-sidebar">
            <h2>{skill.title}</h2>
            <p>{skill.tooltip.content}</p>
            {skill.links && skill.links.length > 0 && (
                <ul>
                    {skill.links.map((link: LinkType, index: number) => (
                        link.text && link.url ? (
                            <li key={index}>
                                <h4>{link.text}</h4>
                                <a href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a>
                            </li>
                        ) : null
                    ))}
                </ul>
            )}
            <Button variant="contained" color="primary" onClick={onClose}>Close Sidebar</Button>
        </div>
    );
}

export default SkillSidebar;
