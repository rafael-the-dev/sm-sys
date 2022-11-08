
import Step from "./components/step";

const Steps = () => {
    const stepsList = [
        { label: "Personal details", value: "personal-details" },
        { label: "Education", value: "education" },
        { label: "Personal details", value: "" }
    ];

    return (
        <div className="overflow-x-scroll bg-stone-100 h-fit sm:mt-6 sm:overflow-x-hidden sm:rounded-r-xl 
            xl:bg-white xl:mt-0 xl:p-4 xl:rounded-l-xl">
            <div className='flex w-fit sm:w-full xl:flex-col'>
                {
                    stepsList.map((item, index) => (
                        <Step 
                            id={item.value}
                            index={index + 1}
                            label={item.label}
                            key={index} 
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Steps;