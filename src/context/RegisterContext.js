import * as React from "react";

const RegisterContext = React.createContext();
RegisterContext.displayName = "RegisterContext";

const RegisterContextProvider = ({ children }) => {
    const [ country, setCountry ] = React.useState({
        city: "majancaze",
        name: "mozambique",
        province: "Gaza"
    });

    const childrenMemo = React.useMemo(() => children, [ children ])

    return (
        <RegisterContext.Provider 
            value={{
                country, 
                setCountry
            }}>
            { children }
        </RegisterContext.Provider>
    );
};

export {
    RegisterContext,
    RegisterContextProvider
}

