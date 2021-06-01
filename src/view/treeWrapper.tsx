import React, {Component} from "react";
import {SkillGroupDataType, SkillProvider, SkillTree, SkillTreeGroup} from "beautiful-skill-tree";

export class TreeWrapper extends Component<any> {

    render(){
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
                            data={this.props.tree}
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