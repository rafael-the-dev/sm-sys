import * as React from "react";
import classNames from "classnames";

import classes from  "./styles.module.css";

import { BasicDetails, Steps } from "src/components/register-page"

const Container = () => {
    const [ step, setStep ] = React.useState(0);

    return (
        <main className="h-full px-5 pb-12 w-full xl:py-8 xl:px-8">
            <div className="justify-between xl:bg-stone-50 xl:flex xl:p-6 xl:rounded-xl">
                <Steps />
                <form className={classNames(classes.form)}>
                    <BasicDetails />
                </form>
            </div>
        </main>
    );
};

export default Container;