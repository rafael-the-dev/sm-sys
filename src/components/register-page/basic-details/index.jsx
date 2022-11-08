
import TextField from "../text-field";

const BasicDetails = () => {

    return (
        <div className='pt-8'>
            <div className="flex flex-col flex-wrap justify-between">
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
            <div className="flex flex-col flex-wrap justify-between">
                <TextField 
                    classes={{ root: "input mdW13" }} 
                    id="first-name" 
                    label="First name" 
                    variant="standard" 
                />
                <TextField 
                    classes={{ root: "input mdW13" }} 
                    id="last-name" 
                    label="Last name" 
                    variant="standard" 
                />
            </div>
        </div>
    );
};

export default BasicDetails;