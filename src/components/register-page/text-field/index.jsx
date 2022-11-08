import { TextField } from "@mui/material";
import classNames from "classnames";

const TextFieldContainer = (props) => {
    const { children, classes, ...others } = props;

    return (
        <div className={classNames(classes?.root)}>
            <TextField 
                { ...others }
                fullWidth
                variant="outlined" 
            >
                { children } 
            </TextField>
        </div>
    );
};

export default TextFieldContainer;