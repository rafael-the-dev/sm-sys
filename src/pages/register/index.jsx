import * as React from "react";
import Button from "@mui/material/Button"
import classNames from "classnames";

import classes from  "./styles.module.css";

import { RegisterContext } from "src/context";

import { BasicDetails, Identification, Steps } from "src/components/register-page";
import Link from "src/components/link";

const Container = () => {
    const { step } = React.useContext(RegisterContext);

    const basicDetails = React.useMemo(() => <BasicDetails />, []);
    const identification = React.useMemo(() => <Identification />, []);

    const leaveLink = React.useMemo(() => (
        <Link href="/dashboard">
            <Button
                className={classNames("border-red-600 mr-8 text-red-600 px-8 py-2 hover:text-white hover:bg-red-600 hover:border-red-600")}
                variant="outlined">
                Cancel
            </Button>
        </Link>
    ), [])

    return (
        <main className={classNames(classes.main, "px-5 pb-12 w-full xl:pt-8 xl:px-8")}>
            <div className="h-full justify-between xl:bg-stone-50 xl:flex xl:p-6 xl:rounded-xl">
                <Steps />
                <form className={classNames(classes.form, "flex flex-col items-stretch justify-between pt-8 xl:pt-0")}>
                    {
                        {
                            "identification-document": identification,
                            "personal-details": basicDetails
                        }[step]
                    }
                    <div className='flex justify-end mt-8'>
                        { leaveLink }
                        <Button
                            className={classNames("bg-amber-600 px-8 py-2 text-white hover:bg-amber-800")}
                            variant="contained">
                            Next
                        </Button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default Container;