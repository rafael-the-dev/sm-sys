import * as React from "react";
import { FormControl, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup } from "@mui/material";

import TextField from "src/components/register-page/text-field";

const initial = {
    city: "majancaze",
    name: "mozambique",
    province: "Gaza"
};

const LocationContainer = () => {
    const [ country, setCountry ] = React.useState(initial);

    const countryRef = React.useRef(initial);

    const optinsList = React.useRef([
        { label: "Mozambique", value: "mozambique" },
        { label: "Other", value: "" }
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

        if(key === "province" && currentCountry.name === "mozambique") {
            result.city = provincesList.current.find(item => item.value === value).city;
        }

        if(key === "name" && value === "mozambique") {
            result = countryRef.current;
        }

        return { ...currentCountry, ...result, [key]: e.target.value };
    }), []);

    const isMozambique = React.useMemo(() => country.name.toLowerCase() === "mozambique", [ country ])

    const otherCountryMemo = React.useMemo(() => (
        <TextField
            classes={{ root: "input mdW13" }} 
            id="country-name"
            label='Country name'
            onChange={changeHandler("name")}
            value={country.name}
        />
    ), [ country ])

    const pronvicesMemo = React.useMemo(() => (
        <TextField
            classes={{ root: `input mdW1${isMozambique ? 2 : 3}` }} 
            id="pronvice"
            label='Pronvice'
            onChange={changeHandler("province")}
            value={country.province}
            select={isMozambique}
            >
            {
                isMozambique && provincesList.current.map(item => (
                    <MenuItem
                        { ...item }
                        key={item.value}>
                        { item.label }
                    </MenuItem>
                ))
            }
        </TextField>
    ), [ country, changeHandler, isMozambique ]);

    const cityMemo = React.useMemo(() => (
        <TextField 
            classes={{ root: `input mdW1${isMozambique ? 2 : 3}` }} 
            id="city" 
            inputProps={{ readOnly: isMozambique }}
            label="City" 
            onChange={changeHandler("city")}
            value={country.city}
            variant="standard" 
        />
    ), [ country, changeHandler, isMozambique ]);

    React.useEffect(() => {
        if(country.name === "mozambique") {
            countryRef.current = country;
        }
    }, [ country ])

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
                { !isMozambique && otherCountryMemo }
                { pronvicesMemo }
                { cityMemo }
            </div>
        </div>
    );
};

export default LocationContainer;