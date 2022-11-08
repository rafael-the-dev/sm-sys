import {Avatar, Button } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css";

const Step = ({ index, label }) => {

    return (
        <Button
            className={classNames(classes.button, `capitalize flex items-center justify-between`,
            index === 1 ? "bg-amber-600 text-white" : "text-amber-600" )}>
            { label } 
            <Avatar
                className={classNames(classes.avatar, { "bg-red-600 text-white": index === 1})}>
                { index }
            </Avatar>
        </Button>
    );
};

export default Step;