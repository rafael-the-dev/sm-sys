import * as React from "react";
import { FormControl, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup } from "@mui/material";

import TextField from "src/components/register-page/text-field"

const LocationContainer = () => {
    const [ country, setCountry ] = React.useState({
        city: "majancaze",
        name: "mozambique",
        province: "Gaza"
    });

    const optinsList = React.useRef([
        { label: "Mozambique", value: "mozambique" },
        { label: "Other", value: "OTHER" }
    ]);

    const provincesList = React.useRef([
        {
            city: "Pemba",
            "label": "Cabo Delgado",
            "value": "Cabo Delgado"
        },
        {
            city: "Xai-Xai",
            "label": "Gaza",
            "value": "Gaza"
        },
        {
            city: "Inhambane",
            "label": "Inhambane",
            "value": "Inhambane"
        },
        {
            city: "Chimoio",
            "label": "Manica",
            "value": "Manica"
        },
        {
            city: "Maputo",
            "label": "Maputo City",
            "value": "Maputo City"
        },
        {
            city: "Matola",
            "label": "Maputo",
            "value": "Maputo"
        },
        {
            city: "Nampula",
            "label": "Nampula",
            "value": "Nampula"
        },
        {
            city: "Lichinga",
            "label": "Niassa",
            "value": "Niassa"
        },
        {
            city: "Beira",
            "label": "Sofala",
            "value": "Sofala"
        },
        {
            city: "Tete",
            "label": "Tete",
            "value": "Tete"
        },
        {
            city: "Quelimane",
            "label": "Zambezia",
            "value": "Zambezia"
        }
    ]);

    const changeHandler = React.useCallback((key) => (e) => setCountry(currentCountry => {
        const { value } = e.target;
        let result = {};

        if(key === "province") {
            result.city = provincesList.current.find(item => item.value === value).city;
        }
        return { ...currentCountry, ...result, [key]: e.target.value };
    }), []);

    const pronvicesMemo = React.useMemo(() => (
        <TextField
            classes={{ root: "input mdW12" }} 
            id="pronvice"
            label='Pronvice'
            onChange={changeHandler("province")}
            value={country.province}
            select
            >
            {
                provincesList.current.map(item => (
                    <MenuItem
                        { ...item }
                        key={item.value}>
                        { item.label }
                    </MenuItem>
                ))
            }
        </TextField>
    ), [ country, changeHandler ]);

    const cityMemo = React.useMemo(() => (
        <TextField 
            classes={{ root: "input mdW12" }} 
            id="city" 
            inputProps={{ readOnly: Boolean(country.name === "mozambique") }}
            label="City" 
            onChange={changeHandler("city")}
            value={country.city}
            variant="standard" 
        />
    ), [ country, changeHandler ])

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
                                control={<Radio checked={item.value === country.name} onChange={changeHandler("name")} />} 
                                key={item.value}
                            />
                        ))
                    }
                </RadioGroup>
            </FormControl>
            <div className="flex flex-wrap justify-between">
                {
                    country.name === "mozambique" ? pronvicesMemo : <></>
                }
                { cityMemo }
            </div>
        </div>
    );
};

export default LocationContainer;