import * as React from "react";

const RegisterContext = React.createContext();
RegisterContext.displayName = "RegisterContext";

const RegisterContextProvider = ({ children }) => {
    const [ step, setStep ] = React.useState("personal-details");

    const childrenMemo = React.useMemo(() => children, [ children ])

    return (
        <RegisterContext.Provider 
            value={{
                step, setStep
            }}>
            { childrenMemo }
        </RegisterContext.Provider>
    );
};

export {
    RegisterContext,
    RegisterContextProvider
}

