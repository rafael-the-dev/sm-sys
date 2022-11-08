import * as React from "react";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"

const LocationContainer = () => {
    const [ country, setCountry ] = React.useState("MOZAMBIQUE");

    const optinsList = React.useRef([
        { label: "Mozambique", value: "MOZAMBIQUE" },
        { label: "Other", value: "OTHER" }
    ]);

    const changeHandler = React.useCallback((e) => setCountry(e.target.value), []);

    return (
        <div>
            <FormControl>
                <FormLabel id="location">Local of birth</FormLabel>
                <RadioGroup
                    aria-labelledby="location"
                    className="my-2"
                    name="radio-buttons-group"
                    row
                >
                    {
                        optinsList.current.map((item, index) => (
                            <FormControlLabel 
                                { ...item }
                                control={<Radio checked={item.value === country} onChange={changeHandler} />} 
                                key={item.value}
                            />
                        ))
                    }
                </RadioGroup>
            </FormControl>
        </div>
    );
};

export default LocationContainer;