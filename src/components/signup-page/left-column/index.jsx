import Typography from "@mui/material/Typography";
import classNames from "classnames";
import { useRouter } from "next/router";

import classes from "./styles.module.css";

const Column = () => {
    const { pathname } = useRouter();
    
    return (
        <div className={classNames(classes.content, {[classes.contentSignup]: pathname === "/sign-up"},
            "flex-col hidden items-center justify-center rounded-l-2xl text-white")}>
            <Typography
                component="h1"
                className="font-bold text-4xl uppercase">
                Logo
            </Typography>
            <Typography
                className="mt-2">
                Welcome back!
            </Typography>
        </div>
    );
};

export default Column;