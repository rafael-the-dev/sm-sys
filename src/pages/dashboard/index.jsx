
import { Hero, Highlights } from "src/components/dashboard-page";
import Main from "src/components/main"

const DashboardContainer = () => {

    return (
        <Main>
            <Hero />
            <Highlights />
        </Main>
    );
};

export default DashboardContainer;