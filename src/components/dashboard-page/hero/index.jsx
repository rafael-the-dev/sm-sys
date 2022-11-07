import { Typography } from "@mui/material"
import classNames from "classnames";

import SchoolIcon from '@mui/icons-material/School';

import classes from "./styles.module.css";

const HeroContainer = () => {

    return (
        <section
            className={classNames(classes.container, "relative w-full")}>
            <div>
                <Typography
                    >
                    Rafael Tivane
                </Typography>
            </div>
            <SchoolIcon className={classNames(classes.icon, "absolute opacity-60 text-white")} />
        </section>
    );
};

export default HeroContainer;