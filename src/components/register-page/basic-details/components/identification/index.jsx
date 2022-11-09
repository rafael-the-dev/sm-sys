import * as React from "react";
import classNames from "classnames";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MenuItem, Typography } from "@mui/material";
import Input from "@mui/material/TextField";
import moment from "moment"

import TextField from "../../../text-field";

const format = date => moment(date).format("MM/DD/YYYY");

const Identification = () => {
    const [ expiryDate, setExpiryDate ] = React.useState(format(Date.now()));
    const [ issuanceDate, setIssuanceDate ] = React.useState(format(moment(Date.now()).subtract(5, "years")));
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
                    id="document" 
                    label="Document" 
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
                    id="number" 
                    label="Number" 
                    variant="standard" 
                />
                <DatePicker
                    className={classNames("input mdW12")}
                    label="Issuance date"
                    minDate={format(moment(Date.now()).subtract(10, "years"))}
                    maxDate={format(expiryDate)}
                    onChange={dateChangeHandler(setIssuanceDate)}
                    value={issuanceDate}
                    renderInput={(params) => <Input {...params} />}
                />
                <DatePicker
                    className={classNames("input mdW12")}
                    label="Expire date"
                    minDate={format(issuanceDate)}
                    maxDate={format(moment(Date.now()).add(10, "years"))}
                    onChange={dateChangeHandler(setExpiryDate)}
                    value={expiryDate}
                    renderInput={(params) => <Input {...params} />}
                />
            </div>
        </fieldset>
    );
};

export default Identification;