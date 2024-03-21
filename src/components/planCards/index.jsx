import React from "react";
import "./style.css";
import CardPlans from "./card.jsx";
import {CardOne, CardTwo, CardThree, CardFour} from "./mock.js"

export default function SectionCardsPlans() {

    return (
        <section className="SectionCardsPlans">
            <h1>Assinaturas Premium</h1>
            <aside className="organizeCards">
            <CardPlans title="Plano Aprendiz" price="00" descriptionPositive={CardOne.positive} descriptionNegative={CardOne.negative} />
            <CardPlans title="Plano Bordadinho" price="00" descriptionPositive={CardTwo.positive} descriptionNegative={CardTwo.negative} />
            <CardPlans title="Plano Bordado Casual" price="00" descriptionPositive={CardThree.positive} descriptionNegative={CardThree.negative} />
            <CardPlans title="Plano Bordado de Respeito" price="00" descriptionPositive={CardFour.positive} descriptionNegative={CardFour.negative} />
        </aside>
        </section>
    );
}