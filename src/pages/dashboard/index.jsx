
import { Hero, Highlights } from "src/components/dashboard-page"

const DashboardContainer = () => {

    return (
        <main className=" h-full px-5 w-full xl:px-6">
            <Hero />
            <Highlights />
        </main>
    );
};

export default DashboardContainer;