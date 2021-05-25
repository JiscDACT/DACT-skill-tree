import {
    SkillTreeGroup,
    SkillTree,
    SkillProvider,
    SkillType,
    SkillGroupDataType,
} from 'beautiful-skill-tree';

const data: SkillType[] = [];

<SkillProvider>
    <SkillTreeGroup>
        {({ skillCount }: SkillGroupDataType) => (
    <SkillTree
        treeId="first-tree"
title="Skill Tree"
data={data}
collapsible
description="My first skill tree"
    />
)}
</SkillTreeGroup>
</SkillProvider>;