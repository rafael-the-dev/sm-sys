import classNames from "classnames";

import classes from "./styles.module.css"

import Highlight from "./components/highlight";

const HighlightsContainer = () => {

    return (
        <div className={classNames(classes.container, "flex flex-wrap items-stretch justify-between pt-12")}>
            <Highlight />
            <Highlight />
            <Highlight />
            <Highlight />
        </div>
    );
};

export default HighlightsContainer;