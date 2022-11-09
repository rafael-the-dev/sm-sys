
import BirthPlace from "./components/birth-place";
import TextField from "src/components/register-page/text-field";

const Address = () => {

    return (
        <div className="flex flex-col">
            <BirthPlace />
            <TextField 
                label="Address"
                multiline
                minRows={7}
            />
        </div>
    );
};

export default Address;