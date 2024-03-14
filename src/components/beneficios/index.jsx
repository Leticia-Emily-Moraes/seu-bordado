import React from "react";
import "./style.css";
import CardsBeneficios from "./cardBeneficios.jsx";
import IconCerebro from "../../assets/img/icons/iconCerebro.svg"
import IconCriatividade from "../../assets/img/icons/iconCriatividade.svg"
import IconPincel from "../../assets/img/icons/iconPincel.svg"


export default function Beneficios() {
    return (
        <section className="beneficios">
            <h1>Benefícios do bordado</h1>
            <div>
                <CardsBeneficios icon={IconCerebro} description="Ajuda na Memoria, Concentração, Coordenação motora" />
                <CardsBeneficios icon={IconCriatividade} description="Age na Criatividade, é terapêutico e acalma" />
                <CardsBeneficios icon={IconPincel} description="Atividade que pode gerar renda, presentes aos familiares e é arte versátil" />
            </div>
        </section>
    );
}