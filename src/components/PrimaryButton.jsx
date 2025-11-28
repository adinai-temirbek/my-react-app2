// components/PrimaryButton.jsx

import React from "react";

function PrimaryButton({ label, type, onClick }) {
    const className =
        type === "primary"
            ? "btn btn-primary"
            : "btn btn-secondary";

    return (
        <button className={className} onClick={onClick}>
            {label}
        </button>
    );
}

export default PrimaryButton;

