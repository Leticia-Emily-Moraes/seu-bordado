import React from "react";
import "./cards.css";
import IconDone from "../../assets/img/icons/IconDone.svg";
import IconNot from "../../assets/img/icons/IconNot.svg";

export default function CardPlans(InfoCards) {
    return (
        <aside className="cardPlans">
            <h2>{InfoCards.title}</h2>
            <p className="Price">{InfoCards.price},<span>00</span></p>
            <span className="descripitions">
                {InfoCards.descriptionPositive && InfoCards.descriptionPositive.map((description, index) => {
                    return (
                        <div className="description-word" key={index}>
                            <img src={IconDone} alt="" />
                            <p>{description}</p>
                        </div>
                    );
                })}
                {InfoCards.descriptionNegative && InfoCards.descriptionNegative.map((description, index) => {
                    return (
                        <div className="description-word" key={index}>
                            <img src={IconNot} alt="" />
                            <p>{description}</p>
                        </div>
                    );
                })}
            </span>

        </aside>
    );
}
