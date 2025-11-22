import React from "react";

export default function PrimaryButton({ label, type = "primary", ...rest }) {
    const className = type === "primary" ? "btn-primary" : "btn-secondary";
    return (
        <button className={className} {...rest}>
            {label}
        </button>
    );
}
