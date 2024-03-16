import React from "react";
import "./CardsBenefits.css";

export default function CardsBenefits(InfoCads) {
    return (
        <aside className="cardB">
            <img
                src={InfoCads.icon} alt="" />
            <p>{InfoCads.description}</p>
        </aside>
    );
}
