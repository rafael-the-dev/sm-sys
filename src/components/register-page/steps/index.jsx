
import Step from "./components/step";

const Steps = () => {
    const stepsList = [
        { label: "Personal details", value: "personal-details" },
        { label: "Education", value: "education" },
        { label: "Personal details", value: "" }
    ];

    return (
        <div className="overflow-x-scroll">
            <div className='flex w-fit'>
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