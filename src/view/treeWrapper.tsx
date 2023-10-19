import React, { Component } from "react";
import { SkillGroupDataType, SkillProvider, SkillTree, SkillTreeGroup } from "beautiful-skill-tree";

export class TreeWrapper extends Component<any> {

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

    render() {
        const modifiedTree = this.modifyIconPaths(this.props.tree);

        return (
            <div>
                <SkillProvider>
                    <SkillTreeGroup
                        theme={
                            {
                                nodeBorderColor: 'grey',
                                nodeBorderRadius: '32px',
                                nodeHoverBorder: 'none',
                                edgeBorder: '1px solid grey'
                            }

                        }>
                        {(
                            {skillCount}: SkillGroupDataType) => (
                            <SkillTree
                                treeId={this.props.treeId}
                                title={this.props.title}
                                data={modifiedTree}
                                collapsible
                                description={this.props.description}
                                handleSave={this.props.handleSave}
                            />
                        )}
                    </SkillTreeGroup>
                </SkillProvider>
            </div>
        )
    }
}
