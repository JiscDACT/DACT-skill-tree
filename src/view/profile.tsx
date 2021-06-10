import React from "react";
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


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

function SimpleDialog(props: any) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value:any) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">What skills do I need?</DialogTitle>
            <List>
                {props.skills.map((skill:any) => (
                    <ListItem button onClick={() => handleListItemClick(skill)} key={skill.id}>
                        <ListItemText primary={skill.title} />
                    </ListItem>
                ))}

            </List>
            <Button variant="outlined" color="primary" onClick={handleClose}>
                Close
            </Button>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    skills: PropTypes.any.isRequired
};

    export function Profile(props: any) {
        const [open, setOpen] = React.useState(false);

        const handleClickOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };

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
                <Button variant="text" color="inherit" size={"small"} onClick={handleClickOpen}>
                    What skills do I need?
                </Button>
                <SimpleDialog skills={props.data.neededSkills} open={open} onClose={handleClose}/>
                <Description>{props.data.description}</Description>
            </div>
        )
    }