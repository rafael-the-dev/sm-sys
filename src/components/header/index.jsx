import * as React from "react";
import { Breadcrumbs, Hidden, IconButton, Typography } from "@mui/material";
import { useRouter } from "next/router";
import classNames from "classnames"

import classes from "./styles.module.css"

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { LoginContext } from "src/context";

import Avatar from "./components/avatar";
import Menu from "src/components/menu";
import SearchField from "./components/search-field";
import Title from "../title";

const Header = () => {
    const { loggedUser } = React.useContext(LoginContext);

    const router = useRouter();
    const { pathname } = router;

    const isDynamicTitlePaths = () => {
        return [ "/sale", "/sales" ].includes(pathname);
    };

    const dynamicTitle = () => {
        return {
            "/sales": "Sales Reports",
            "/sale": "New sale"
        }[pathname]
    };

    if([ "/sign-up", "/login" ].includes(pathname)) return <></>;

    return (
        <header className="flex items-center justify-between px-5 py-2 relative xl:px-8">
            <div className="flex items-center pl-2 xl:pl-0">
                <Hidden lgUp>
                    <Menu />
                </Hidden>
                { isDynamicTitlePaths() && <Title className={classNames('ml-3', classes.salesTitle)}>{ dynamicTitle() }</Title> }
                <Hidden xlDown>
                    <IconButton className="p-0 hover:bg-transparent">
                        <ArrowBackIcon />
                    </IconButton>
                    <Breadcrumbs></Breadcrumbs>
                </Hidden>
            </div>
            <div className="flex items-center pr-2 xl:pr-0">
                <SearchField />
                <Avatar />
            </div>
        </header>
    );
};

export default Header;