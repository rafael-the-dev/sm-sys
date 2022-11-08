import { TextField } from "@mui/material";
import classNames from "classnames";

const TextFieldContainer = (props) => {
    const { classes, ...others } = props;

    return (
        <div className={classNames(classes?.root)}>
            <TextField 
                { ...others }
                fullWidth
                variant="outlined" 
            />
        </div>
    );
};

export default TextFieldContainer;