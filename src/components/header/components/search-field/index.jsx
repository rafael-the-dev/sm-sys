import * as React from "react";
import classNames from "classnames"
import { Hidden, IconButton } from "@mui/material";

import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

import classes from "./styles.module.css"

const SearchField = () => {
    const [ open, setOpen ] = React.useState(false);

    const toggle = React.useCallback(() => setOpen(b => !b), []);

    return (
        <>
            <Hidden smUp>
                <IconButton
                    onClick={toggle}>
                    { open ? <CloseIcon /> : <SearchIcon /> }
                </IconButton>
                <form
                    className={classNames(classes.form, { [classes.formOpen]: open },
                    `absolute bg-red-600 flex py-2 px-3 rounded-xl`)}>
                    <input 
                        className={classNames("border-0 grow outline-none px-2 rounded-l-xl")}
                    />
                    <IconButton
                        className={classNames(classes.formIcon, "bg-amber-600 rounded-l-none rounded-r-xl text-white hover:bg-amber-800")}>
                        <SearchIcon />
                    </IconButton>
                </form>
            </Hidden>
        </>
    );
};

export default SearchField;