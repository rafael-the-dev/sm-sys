
import { Hero, Highlights } from "src/components/dashboard-page"

const DashboardContainer = () => {

    return (
        <main className="flex flex-col h-full items-stretch px-5 w-full xl:px-6">
            <Hero />
            <Highlights />
        </main>
    );
};

export default DashboardContainer;