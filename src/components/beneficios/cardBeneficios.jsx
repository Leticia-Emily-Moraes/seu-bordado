import React from "react";
import "./cardBeneficios.css";

export default function CardsBeneficios(InfoCads) {
    return (
        <aside className="cardB">
            <img
                src={InfoCads.icon} alt="" />
            <p>{InfoCads.description}</p>
        </aside>
    );
}
