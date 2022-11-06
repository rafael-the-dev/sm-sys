import { Paper, Typography } from '@mui/material';
import { useCallback, useMemo, useRef, useState } from 'react'
import Link from 'next/link'

import classNames from 'classnames'
import classes from "./styles.module.css";

import Validation from "src/models/Validation"

import { Button, DefaultContainer, Input } from "src/components/signup-page"

const Container = () => {
    const [ errors, setErrors ] = useState({
        'confirm-password': [],
        name: [],
        password: [],
        username: []
    })
    
    const confirmPasswordRef = useRef(null);
    const nameRef = useRef(null);
    const passwordRef = useRef(null);
    const userNameRef = useRef(null);

    const hasErrors = useMemo(() => {
        return Boolean(Object.values(errors).reduce((previousValue, currentValue) => {
            return previousValue + currentValue.length;
        }, 0))
    }, [ errors ]);

    const nameChangeHandler = useCallback((value) => {
        const nameErrors = [];
        
        Validation.checkLength({ min: 5, value: value.trim(), onError: (error) => nameErrors.push(error) });
        Validation.hasNumbers({ min: 1, value, onError: () => {}, onSuccess: () => nameErrors.push({ name: "", message: "Must not contain numbers" })})
        Validation.hasSpecialChars({ value: value.trim(), onSuccess: (error) => nameErrors.push(error) });

        setErrors(currentErrors => ({
            ...currentErrors,
            'name': nameErrors
        }));
    }, [])

    const usernameChangeHandler = useCallback((value) => {
        const usernameErrors = [];

        Validation.hasWhitespace({ value, onSuccess: (error) => usernameErrors.push(error) });
        Validation.checkLength({ min: 8, value, onError: (error) => usernameErrors.push(error) });
        Validation.hasSpecialChars({ value, onSuccess: (error) => usernameErrors.push(error) });

        setErrors(currentErrors => ({
            ...currentErrors,
            'username': usernameErrors
        }))

    }, [])

    const passwordChangeHandler = useCallback(value => {
        const passwordErrors = [];

        Validation.startWithUppercaseLetter({ value, onError: error => passwordErrors.push(error) })
        Validation.hasNumbers({ value, onError: (error) => passwordErrors.push(error)})
        Validation.hasWhitespace({ value, onSuccess: (error) => passwordErrors.push(error) });
        Validation.checkLength({ min: 8, value, onError: (error) => passwordErrors.push(error) });

        setErrors(currentErrors => ({
            ...currentErrors,
            'password': passwordErrors
        }))
    }, []);

    const confirmPasswordChangeHandler = useCallback((value) => {

    }, [])

    return (
        <DefaultContainer>
            <div className={classNames(classes.content, "flex-col hidden items-center justify-center rounded-l-2xl text-white")}>
                <Typography
                    component="h1"
                    className="font-bold text-4xl uppercase">
                    Logo
                </Typography>
                <Typography
                    className="mt-2">
                    Welcome back!
                </Typography>
            </div>
            <form className={classNames(classes.form, "flex-col items-stretch justify-center px-5 py-8 md:px-6 ")}>
                <Typography className="font-bold mb-8 text-center text-2xl uppercase  dark:text-slate-300">
                    Sign up
                </Typography>
                <fieldset>
                    <Input 
                        errors={errors}
                        id="name"
                        onChange={nameChangeHandler}
                        placeholder="Full name"
                        ref={nameRef}
                    />
                    <Input 
                        errors={errors}
                        id="username"
                        onChange={usernameChangeHandler}
                        placeholder="Username"
                        ref={userNameRef}
                    />
                    <Input 
                        errors={errors}
                        id="password"
                        onChange={passwordChangeHandler}
                        placeholder="Password"
                        ref={passwordRef}
                    />
                    <Input 
                        errors={errors}
                        id="confirm-password"
                        placeholder="Comfirm password"
                        ref={confirmPasswordRef}
                    />
                </fieldset>
                <div 
                    className={classNames("flex flex-col sm:items-center mt-6")}>
                    <Typography component="p" className="ml-4 text-sm dark:text-slate-400">
                        have an account? 
                        <Link href="/login">
                            <a 
                                className={classNames(classes.signUpLink, 
                                "ml-2 text-amber-600 uppercase underline hover:opacity-90")}>
                                sign in.
                            </a>
                        </Link>
                    </Typography>
                    <Button disabled={hasErrors}>Submit</Button>
                </div>
            </form>
        </DefaultContainer>
    );
};

export default Container;