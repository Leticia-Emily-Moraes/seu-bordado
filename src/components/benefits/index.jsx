import React from "react";
import "./style.css";
import CardsBenefits from "./CardsBenefits.jsx";
import IconCerebro from "../../assets/img/icons/iconCerebro.svg"
import IconCriatividade from "../../assets/img/icons/iconCriatividade.svg"
import IconPincel from "../../assets/img/icons/iconPincel.svg"


export default function Benefits() {
    return (
        <section className="beneficios">
            <h1>Benefícios do bordado</h1>
            <div>
                <CardsBenefits icon={IconCerebro} description="Ajuda na Memoria, Concentração, Coordenação motora" />
                <CardsBenefits icon={IconCriatividade} description="Age na Criatividade, é terapêutico e acalma" />
                <CardsBenefits icon={IconPincel} description="Atividade que pode gerar renda, presentes aos familiares e é arte versátil" />
            </div>
        </section>
    );
}