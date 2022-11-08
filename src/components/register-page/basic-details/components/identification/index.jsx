import * as React from "react";
import classNames from "classnames";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MenuItem, Typography } from "@mui/material";
import Input from "@mui/material/TextField";
import moment from "moment"

import TextField from "../../../text-field"

const Identification = () => {
    const [ expiryDate, setExpiryDate ] = React.useState(Date.now().toString());
    const [ issuanceDate, setIssuanceDate ] = React.useState(Date.now().toString());
    const [ value, setValue ] = React.useState("BI");

    const optionsList = React.useRef([
        { label: "B.I", value: "BI" },
        { label: "Passport", value: "PASSPORT" }
    ]);

    const changeHandler = React.useCallback(e => setValue(e.target.value), []);
    const dateChangeHandler = React.useCallback(func => newValue => func(newValue), []);

    return (
        <fieldset className="mt-2">
            <Typography>Identification</Typography>
            <div className="flex flex-wrap justify-between mt-4">
                <TextField 
                    classes={{ root: "input mdW12" }} 
                    id="first-name" 
                    label="First name" 
                    onChange={changeHandler}
                    select
                    value={value}
                    variant="standard" 
                >
                    {
                        optionsList.current.map(item => (
                            <MenuItem>
                                { item.label }
                            </MenuItem>
                        ))
                    }
                </TextField>
                <TextField 
                    classes={{ root: "input mdW12" }} 
                    id="first-name" 
                    label="First name" 
                    variant="standard" 
                />
                <DatePicker
                    className={classNames("input mdW12")}
                    label="Birth date"
                    onChange={dateChangeHandler(setIssuanceDate)}
                    value={issuanceDate}
                    renderInput={(params) => <Input {...params} />}
                />
                <DatePicker
                    className={classNames("input mdW12")}
                    label="Birth date"
                    maxDate={moment(Date.now().toString()).toDate()}
                    onChange={dateChangeHandler(setExpiryDate)}
                    value={expiryDate}
                    renderInput={(params) => <Input {...params} />}
                />
            </div>
        </fieldset>
    );
};

export default Identification;