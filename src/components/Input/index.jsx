import classNames from "classnames";
import { forwardRef } from 'react'
import classes from './styles.module.css'

const Input = forwardRef(({ autoComplete, className, onChange, placeholder, required, type, value }, ref) => {
    return (
        <input 
            autoComplete={ Boolean(autoComplete) ? "on": "off" }
            className={classNames(`border-0 bg-transparent outline-none px-2 text-sm
            dark:bg-stone-400`, classes.input, className)}
            placeholder={placeholder}
            ref={ref}
            required={required}
            type={type ? type : "text"}
            value={value}
            onChange={onChange}
        />
    );
});

export default Input;