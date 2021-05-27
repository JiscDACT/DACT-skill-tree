import {SkillType} from "beautiful-skill-tree";


export const statistics: SkillType[] = [
    {
        id: 'stats-basic',
        title: 'Statistics basics',
        icon: 'icons/RoundIcons_FreeSet-35.svg',
        tooltip: {
            content:
                'Understand the basics of statistics.'
        },
        children: [
            {
                id: 'stats-desc-1',
                title: 'Centrality and variance',
                icon: 'icons/RoundIcons_FreeSet-43.svg',
                tooltip: {content: 'Apply appropriate measures of centrality and variance'},
                children: [
                    {
                        id: 'stats-desc-2',
                        title: 'Distributions',
                        icon: 'icons/RoundIcons_FreeSet-43.svg',
                        tooltip: {content: 'Analyse distribution using histograms, z-scores and quantiles'},
                        children: [
                            {
                                id: 'stats-desc-3',
                                title: 'Advanced distributions',
                                icon: 'icons/RoundIcons_FreeSet-43.svg',
                                tooltip: {content: 'Create distribution metrics e.g.skew, kurtosis, heuristics'},
                                children: [
                                ]
                            },
                            {
                                id: 'stats-desc-4',
                                title: 'Clustering',
                                icon: 'icons/RoundIcons_FreeSet-43.svg',
                                tooltip: {content: 'Clustering e.g. K-Means'},
                                children: [
                                ]
                            }
                        ]
                    },
                    {
                        id: 'stats-desc-5',
                        title: 'Outliers',
                        icon: 'icons/RoundIcons_FreeSet-43.svg',
                        tooltip: {content: 'Detect and exclude outliers'},
                        children: [
                        ]
                    }
                ]
            },
            {
                id: 'stats-metrics',
                title: 'Deriving metrics',
                icon: 'icons/RoundIcons_FreeSet-53.svg',
                tooltip: {content: 'Create derived metrics and indicators'},
                children: [
                    {
                        id: 'stats-scaling',
                        title: 'Normalisation',
                        icon: 'icons/RoundIcons_FreeSet-53.svg',
                        tooltip: {content: 'Use feature scaling and normalisation to enable comparison between measures'},
                        children: [
                            {
                                id: 'stats-pca',
                                title: 'PCA/MCA',
                                icon: 'icons/RoundIcons_FreeSet-53.svg',
                                tooltip: {content: 'Use PCA/MCA to create derived dimensions'},
                                children: [
                                ]
                            },
                            {
                                id: 'stats-dimension-reduction',
                                title: 'Dimension reduction',
                                icon: 'icons/RoundIcons_FreeSet-53.svg',
                                tooltip: {content: 'Dimension reduction and generalisation'},
                                children: [
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: 'stats-diagnostic-1',
                title: 'Diagnostic statistics',
                icon: 'icons/RoundIcons_FreeSet-30.svg',
                tooltip: {content: 'Using z-tests, t-tests, x^2, Pearson and other simple tests for significance'},
                children: [
                    {
                        id: 'stats-diagnostic-2',
                        title: 'Advanced diagnostic statistics',
                        icon: 'icons/RoundIcons_FreeSet-30.svg',
                        tooltip: {content: 'Using HLR, HLM, ANOVA and coefficients to identify important factors'},
                        children: [
                        ]
                    }
                ]
            },
            {
                id: 'stats-predictive-1',
                title: 'Regression',
                icon: 'icons/science.svg',
                tooltip: {content: 'Linear and Logistic Multivariate Regression'},
                children: [
                    {
                        id: 'stats-predictive-2',
                        title: 'Model evaluation',
                        icon: 'icons/science.svg',
                        tooltip: {content: 'Can appropriately test model fit, uses more complex statistical techniques and is not restricted to "out of the box" programs and scripts. Interpretation of complex outputs. Manages more complex data interpretation e.g. modelling missing data. '},
                        children: [
                        ]
                    },
                    {
                        id: 'stats-predictive-3',
                        title: 'SVMs and ANNs',
                        icon: 'icons/science.svg',
                        tooltip: {content: 'SVMs and ANNs'},
                        children: [
                        ]
                    },
                    {
                        id: 'stats-predictive-4',
                        title: 'ABMs and sims',
                        icon: 'icons/science.svg',
                        tooltip: {content: 'Agent-based modelling and simulations'},
                        children: [
                        ]
                    },
                    {
                        id: 'stats-optim',
                        title: 'Optimisation/maximisation',
                        icon: 'icons/science.svg',
                        tooltip: {content: 'Calculus for optimisation/maximisation'},
                        children: [
                        ]
                    }
                ]
            }
        ]
    }
]

export const programming: SkillType[] = [
    {
        id: 'programming-basic',
        title: 'Programming basics',
        icon: 'icons/RoundIcons_FreeSet-35.svg',
        tooltip: {
            content:
                'Understand the basics of programming.',
        },
        children: [
            {
                id: 'programming-open',
                title: 'Run projects',
                icon: 'icons/RoundIcons_FreeSet-58.svg',
                tooltip: {
                    content:
                        'Can open and run a notebook/project created by another.',
                },
                children: [
                    {
                        id: 'programming-create',
                        title:'Create projects',
                        icon: 'icons/RoundIcons_FreeSet-07.svg',
                        tooltip: {content:'Create a new Python or R project and set up dependencies'},
                        children:[
                            {
                                id: 'python-data',
                                title: 'Python data structures',
                                icon: 'icons/python.svg',
                                tooltip: {content: 'Work with lists, dicts and other basic data types'},
                                children: [
                                    {
                                        id: 'python-modules',
                                        title: 'Python modules',
                                        icon: 'icons/python.svg',
                                        tooltip: {content: 'Organise code with modules and imports'},
                                        children: []
                                    },
                                    {
                                        id: 'python-comp',
                                        title: 'Python programming',
                                        icon: 'icons/python.svg',
                                        tooltip: {content: 'Confidently implement algorithms in Python'},
                                        children: []
                                    }
                                ]
                            },
                            {
                                id: 'programming-import',
                                title:'Dataframes',
                                icon: 'icons/RoundIcons_FreeSet-53.svg',
                                tooltip: {content:'Import data into dataframes in R or Python (e.g. using Pandas) and describe them'},
                                children:[
                                    {
                                        id: 'programming-aggregate',
                                        title:'Aggregations',
                                        icon: 'icons/RoundIcons_FreeSet-33.svg',
                                        tooltip: {content:'Perform aggregate calculations on dataframes in R or Python (e.g. using Pandas)'},
                                        children:[
                                        ]
                                    },
                                    {
                                        id: 'programming-reshape',
                                        title:'Reshape',
                                        icon: 'icons/RoundIcons_FreeSet-33.svg',
                                        tooltip: {content:'Reshape dataframes in R or Python (e.g. using Pandas)'},
                                        children:[
                                        ]
                                    },
                                    {
                                        id: 'programming-analysis',
                                        title:'Analyse',
                                        icon: 'icons/RoundIcons_FreeSet-33.svg',
                                        tooltip: {content:'Perform statistical analysis steps in R or Python e.g. HLR'},
                                        children:[
                                            {
                                                id: 'programming-model',
                                                title:'Model',
                                                icon: 'icons/science.svg',
                                                tooltip: {content:'Perform machine learning tasks in R or Python (e.g. using SciKit-Learn) such as multivariate linear regression'},
                                                children:[
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                id: 'programming-import-csv',
                                title:'CSV',
                                icon: 'icons/csv.svg',
                                tooltip: {content:'Load and work with CSV data'},
                                children:[
                                    {
                                        id: 'programming-clean-csv',
                                        title:'Cleaning CSVs',
                                        icon: 'icons/csv.svg',
                                        tooltip: {content:'Clean up CSV data'},
                                        children:[
                                            {
                                                id: 'programming-csv-end-to-end',
                                                title:'Create a data app',
                                                icon: 'icons/csv.svg',
                                                tooltip: {content:'Create a program to load, clean and export data'},
                                                children:[
                                                ]
                                            },
                                        ]
                                    }
                                ]
                            },
                            {
                                id: 'programming-xml',
                                title:'XML and text',
                                icon: 'icons/xml.svg',
                                tooltip: {content:'Use Python or R to process XML and HTML documents and extract data and text e.g. using LXML'},
                                children:[
                                ]
                            },
                            {
                                id: 'programming-version',
                                title:'Git',
                                icon: 'icons/RoundIcons_FreeSet-19.svg',
                                tooltip: {content:'Develop software in collaboration with others using a version control system (e.g. git, github and gitlab)'},
                                children:[
                                    {
                                        id: 'programming-ci',
                                        title:'CI/CD',
                                        icon: 'icons/devops.svg',
                                        tooltip: {content:'Deploy code automatically using CI/CD'},
                                        children:[
                                            {
                                                id: 'programming-mg',
                                                title:'DevOps',
                                                icon: 'icons/devops.svg',
                                                tooltip: {content:'Manage DevOps for projects'},
                                                children:[
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        id: 'programming-arch',
                                        title:'Architecture',
                                        icon: 'icons/RoundIcons_FreeSet-19.svg',
                                        tooltip: {content:'Create the architecture for a new solution'},
                                        children:[
                                        ]
                                    },
                                    {
                                        id: 'programming-testing',
                                        title:'Testing',
                                        icon: 'icons/RoundIcons_FreeSet-19.svg',
                                        tooltip: {content:'Check code quality using unit tests and integration tests'},
                                        children:[

                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
    },
];