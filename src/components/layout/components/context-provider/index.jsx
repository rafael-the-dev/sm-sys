import { useRouter } from "next/router"

import { RegisterStepsContextProvider } from "src/context"

const ContextProvider = ({ children }) => {
    const { pathname } = useRouter();

    const getProvider = () => {
        return {
            "/register": <RegisterStepsContextProvider>{ children }</RegisterStepsContextProvider>,
        }[pathname]
    };

    
    return (
        <>{ getProvider() ?? children }</>
    );
};

export default ContextProvider;