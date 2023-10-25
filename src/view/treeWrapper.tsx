import React, { Component, MouseEvent } from "react";
import { SkillGroupDataType, SkillProvider, SkillTree, SkillTreeGroup } from "beautiful-skill-tree";

type TreeWrapperProps = {
    treeId: string;
    tree: any;
    title: string;
    handleSave: any;
    onSkillClick?: (skill: any) => void;
}

export class TreeWrapper extends Component<TreeWrapperProps> {

    modifyIconPaths(tree: any[]): any[] {
        return tree.map(skill => {
            let updatedSkill = { ...skill };

            // Modify icon path
            if (updatedSkill.icon) {
                updatedSkill.icon = `${process.env.PUBLIC_URL}/${updatedSkill.icon}`;
            }

            // Recursively process children
            if (updatedSkill.children && updatedSkill.children.length > 0) {
                updatedSkill.children = this.modifyIconPaths(updatedSkill.children);
            }

            return updatedSkill;
        });
    }

    handleSkillClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        const skillId = target.getAttribute('data-testid');

        if (skillId) {
            const skillData = this.findSkillById(skillId);
            if (this.props.onSkillClick && skillData) {
                this.props.onSkillClick(skillData);
            }
        }
    };

    findSkillById(id: string, tree = this.props.tree): any {
        for (const skill of tree) {
            if (skill.id === id) return skill;
            if (skill.children) {
                const foundSkill = this.findSkillById(id, skill.children);
                if (foundSkill) return foundSkill;
            }
        }
        return null;
    };

    render() {
        const modifiedTree = this.modifyIconPaths(this.props.tree);

        return (
            <div onClick={this.handleSkillClick}>
                <SkillProvider>
                    <SkillTreeGroup theme={{
                        nodeBorderColor: 'grey',
                        nodeBorderRadius: '32px',
                        nodeHoverBorder: 'none',
                        edgeBorder: '1px solid grey'
                    }}>
                        {({ skillCount }: SkillGroupDataType) => (
                            <SkillTree
                                treeId={this.props.treeId}
                                title={this.props.title}
                                data={modifiedTree}
                                collapsible
                                handleSave={this.props.handleSave}
                            />
                        )}
                    </SkillTreeGroup>
                </SkillProvider>
            </div>
        );
    }
}
