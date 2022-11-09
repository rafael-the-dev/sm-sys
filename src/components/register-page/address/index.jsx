import * as React from "react";

import BirthPlace from "./components/birth-place";
import TextField from "src/components/register-page/text-field";

const Address = () => {

    const addressMemo = React.useMemo(() => (
        <TextField 
            label="Address"
            multiline
            minRows={7}
        />
    ), [])

    const birthPlaceMemo = React.useMemo(() => <BirthPlace />, []);
    
    return (
        <div className="flex flex-col">
            { birthPlaceMemo }
            { addressMemo }
        </div>
    );
};

export default Address;