"use client";

import PropTypes from "prop-types";

export default function GlobalError({ error, reset }: { error: Error, reset: Function }) {
    return (
        <div>
            <h2>Something went wrong!</h2>
            <p>{error.message}</p>
            <button onClick={() => reset()}>Try again</button>
        </div>
    );
}

GlobalError.propTypes = {
    error: PropTypes.instanceOf(Error),
    reset: PropTypes.func.isRequired,
};