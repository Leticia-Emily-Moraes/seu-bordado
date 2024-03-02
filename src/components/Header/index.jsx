import React from "react";
import "./header.css";
import logoBordado from '../../assets/img/svg/LogoSeuBordado.svg';

export default function Header() {
  return (
    <header>
      <img src={logoBordado} alt="Logo do Seu Bordado" />
      <nav>
        <ul>
          <li>
            <a href="#apresentacao" target="self">Apresentação</a>
          </li>
          <li>
            <a href="#beneficios" target="self">Benefícios</a>
          </li>
          <li>
            <a href="#planos" target="self">Planos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
