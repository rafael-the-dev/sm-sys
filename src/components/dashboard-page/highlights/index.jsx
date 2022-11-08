import classNames from "classnames";

import classes from "./styles.module.css"

import Highlight from "./components/highlight";

const HighlightsContainer = () => {

    return (
        <div className={classNames(classes.container, `bg-stone-100 flex flex-wrap items-stretch justify-between 
            mt-12 py-6 px-4 rounded-xl`)}>
            <Highlight />
            <Highlight />
            <Highlight />
            <Highlight />
        </div>
    );
};

export default HighlightsContainer;