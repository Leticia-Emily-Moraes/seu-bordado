import React from "react";
import "./style.css";

export default function Footer() {
    return (
        <footer>
            <aside>
                <h1>Nosso Bordado é seu bordado</h1>
            </aside>
            <aside>
                <h2>Contatos</h2>
                <p>Telefone: (11) 9 9999-9999</p>
                <p>Instagrem: @Seu_Bordado</p>
                <p>Facebook: Seu Bordado | Blog</p>
            </aside>
            <aside>
                <h2>Loja</h2>
                <p>Quadros Bordados</p>
                <p>Gráficos</p>
                <p>Materiais</p>
                <p>Personalizados</p>
            </aside>
            <aside>
                <h2>Sobre nós</h2>
                <p>Nossa Equipe</p>
                <p>Nosso começo</p>
                <p>Nossa Empresa</p>
                <p>Patrocinadores</p>
            </aside>
        </footer>
    );
}