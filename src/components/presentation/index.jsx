import React from "react";
import "./style.css";
import Banner from "../../assets/img/banners/BannerApresentacao.svg";

export default function Presentation() {
    return (
        <section id="apresentacao">
            <aside className="sectionImg">
                <img src={Banner} alt="" />
            </aside>
            <aside className="sectionTexto">
                <span className="titulos">
                    <h2>Pense</h2>
                    <h2>Crie</h2>
                    <h2>Decore</h2>
                </span>
                <span className="descricoes">
                    <p>Pense em seu bordado e mande para nos para transformaremos em realidade</p>
                    <p>Começe seu processo criativo em nossa loja de materiais</p>
                    <p>Decore com sua obra de arte ou com as obras da nossa galeria </p>
                </span>
            </aside>
        </section>
    );
}
