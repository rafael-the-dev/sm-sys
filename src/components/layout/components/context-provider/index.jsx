import { useRouter } from "next/router"

import { RegisterContextProvider } from "src/context"

const ContextProvider = ({ children }) => {
    const { pathname } = useRouter();

    const getProvider = () => {
        return {
            "/register": <RegisterContextProvider>{ children }</RegisterContextProvider>,
        }[pathname]
    };

    
    return (
        <>{ getProvider() ?? children }</>
    );
};

export default ContextProvider;