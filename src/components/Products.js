import React from "react";
import styled from "styled-components";
import candle from "../assets/candle_animated.svg";
import giftbox from "../assets/giftbox_animated.svg";
import card from "../assets/card_animated.svg";
import towel from "../assets/towel_animated.svg";

const getSectionColor = color => {
  switch (color) {
    case "pink":
      return "#ffdfe8";
    case "blue":
      return "#edecfb";
    default:
      return "white";
  }
};

const ProductStyle = styled("div")`
  display: flex;
  flex-direction: ${props => (props.reversed ? "row-reverse" : "row")};
  padding-right: ${props => (props.reversed ? "5rem" : "0")};
  padding-left: ${props => (props.reversed ? "0" : "3rem")};

  @media (max-width: 500px) {
    flex-wrap: wrap;
    justify-content: center;
    padding: 6rem 1rem;
    background-color: ${props => getSectionColor(props.color)};

    & > div {
      padding: 0 2rem;
      h2 {
        margin: 0;
      }
    }
  }

  h2 {
    font-family: "Pacifico", cursive;
    font-style: normal;
    font-weight: normal;
    color: #ff6f96;
    font-size: 2rem;
  }
  p {
    color: #525f7f;
    font-weight: 400;
    font-size: 17px;
    line-height: 28px;
  }
`;

const TextStyle = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 5rem;
`;

const TextContentStyle = styled.div`
  display: flex;
          flex-direction: column;
          padding: 5rem;
`;

const Products = () => (
  <div>
    <ProductStyle>
      <img src={giftbox} alt="Caixas Baptizados" width="50%" height="auto" />
      <TextStyle>
        <h2>Caixas</h2>
        <p>
        Caixas em madeira de diferentes tamanhos e modelos, com ou sem divisórias para guardar as lembranças de Batizado dos bebés como vela, concha, toalha, roupinha, lembrançinhas, álbum, etc.
        </p>
      </TextStyle>
    </ProductStyle>
    <ProductStyle reversed color="pink">
      <img src={candle} alt="Velas" width="50%" height="auto" />
      <TextContentStyle>
        <h2>Velas</h2>
        <p>
        Velas artesanais com 30 centímetros de altura decoradas em três modelos: ovais, quadradas e redondas.
Com possibilidade de colocação de argola em prata de lei com gravação personalizada
        </p>
      </TextContentStyle>
    </ProductStyle>
    <ProductStyle>
      <img src={card} alt="Convites" width="25%" height="auto" />
      <TextContentStyle>
        <h2>Lembranças</h2>
        <p>
        Sugestões de lembranças para oferecer aos familiares e amigos no dia do Batizado ou Comunhão.
        </p>
      </TextContentStyle>
    </ProductStyle>
    <ProductStyle reversed color="blue">
      <img src={towel} alt="Velas" width="40%" height="auto" />
      <TextContentStyle>
        <h2>Toalhas</h2>
        <p>
        Toalhas 100% em tecido nobre o linho puro com bainhas abertas e aplicação de renda ou crochê, totalmente feitas e bordadas á mão, ou meio-linho bordadas á mão com aplicação de crochet/renda.
Possibilidade de elaborar em Meio-Linho
        </p>
      </TextContentStyle>
    </ProductStyle>
  </div>
);

export default Products;
