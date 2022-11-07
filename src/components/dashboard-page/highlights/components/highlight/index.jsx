import { Button, Typography } from "@mui/material";
import classNames from "classnames";

import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

import classes from "./styles.module.css"

import Link from "src/components/link"

const Highlight = () => (
    <div className={classNames(classes.container, 'flex justify-between px-4 py-6 rounded-xl')}>
        <div>
            <Typography>Lorem ipsum</Typography>
            <Button
                className={classNames("capitalize mt-3 text-amber-600")}
                startIcon={<TrendingFlatIcon />}>
                View
            </Button>
        </div>
        <ImportContactsIcon />
    </div>
);

export default Highlight;