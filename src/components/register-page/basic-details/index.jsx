import * as React from "react";
import classNames from "classnames";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {Button,  MenuItem } from "@mui/material";
import Input from "@mui/material/TextField";

import BirthPlace from "./components/locations";
import Identification from "./components/identification";
import TextField from "../text-field";

const BasicDetails = () => {
    const [ birthDate, setBirthDate ] = React.useState("");
    const [ category, setCategory ] = React.useState("student");

    const categories = React.useRef([
        { label: "Student", value: "student" },
        { label: "Teacher", value: "teacher" }
    ]);

    const categoryChangeHandler = React.useCallback(e => setCategory(e.target.value), []);
    const birthDateChangeHandler = React.useCallback(newValue => setBirthDate(newValue), [])

    return (
        <div className='pt-8 xl:pt-0'>
            <div className="flex flex-wrap justify-between">
                <TextField 
                    classes={{ root: "input mdW12" }} 
                    id="first-name" 
                    label="First name" 
                    variant="standard" 
                />
                <TextField 
                    classes={{ root: "input mdW12" }} 
                    id="last-name" 
                    label="Last name" 
                    variant="standard" 
                />
            </div>
            <div className="flex flex-wrap justify-between">
                <TextField 
                    classes={{ root: "input mdW12" }} 
                    id="category" 
                    label="Category" 
                    onChange={categoryChangeHandler}
                    select
                    value={category}
                    variant="standard" 
                >
                    {
                        categories.current.map((item) => (
                            <MenuItem
                                key={item.value}
                                value={item.value}>
                                { item.label }
                            </MenuItem>
                        ))
                    }
                </TextField>
                <DatePicker
                    className={classNames("input mdW12")}
                    label="Birth date"
                    onChange={birthDateChangeHandler}
                    value={birthDate}
                    renderInput={(params) => <Input {...params} />}
                />
            </div>
            <BirthPlace />
            <div className="flex flex-wrap justify-between">
                <TextField 
                    classes={{ root: "input mdW12" }} 
                    id="first-name" 
                    label="First name" 
                    variant="standard" 
                />
                <TextField 
                    classes={{ root: "input mdW12" }} 
                    id="last-name" 
                    label="Last name" 
                    variant="standard" 
                />
            </div>
            <Identification />
            <div className='flex justify-end mt-8'>
                <Button
                    className={classNames("border-red-600 mr-8 text-red-600 px-8 py-2 hover:text-white hover:bg-red-600 hover:border-red-600")}
                    variant="outlined">
                    Cancel
                </Button>
                <Button
                    className={classNames("bg-amber-600 px-8 py-2 text-white hover:bg-amber-800")}
                    variant="contained">
                    Next
                </Button>
            </div>
        </div>
    );
};

export default BasicDetails;