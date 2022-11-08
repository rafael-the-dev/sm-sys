import * as React from "react";

import { BasicDetails, Steps } from "src/components/register-page"

const Container = () => {
    const [ step, setStep ] = React.useState(0);

    return (
        <main className="h-full px-5 w-full xl:px-6">
            <Steps />
            <form>
                <BasicDetails />
            </form>
        </main>
    );
};

export default Container;