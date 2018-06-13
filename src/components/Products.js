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
        <h2>Caixinhas</h2>
        <p>
          Caixa grande de Batismo com divisões para a roupinha, vela, concha,
          toalha, pintada e decorada manualmente com aplicação de meias perolas,
          moldura em madeira e personalizada com nome em marfinite.
        </p>
      </TextStyle>
    </ProductStyle>
    <ProductStyle reversed color="pink">
      <img src={candle} alt="Velas" width="50%" height="auto" />
      <TextContentStyle>
        <h2>Velas</h2>
        <p>
          Vela artesanal disponiveis em diferentes modelos, quadrado ou redondo.
          Personalizadas com fita, punho em cordão de seda, cetim, anjinhos ou
          argolas em prata de lei com gravação.
        </p>
      </TextContentStyle>
    </ProductStyle>
    <ProductStyle>
      <img src={card} alt="Convites" width="25%" height="auto" />
      <TextContentStyle>
        <h2>Convites</h2>
        <p>
          Adipisicing do veniam cillum culpa. Duis excepteur commodo enim aute
          ullamco incididunt elit eiusmod aliqua et culpa cillum commodo amet.
          Irure ut sit laboris qui sit sint in et. Anim nostrud velit et labore
          tempor do id laboris culpa id do tempor. Irure nulla cillum eiusmod id
          nulla ad qui consequat. Nulla fugiat tempor quis esse aliquip
          cupidatat laborum.
        </p>
      </TextContentStyle>
    </ProductStyle>
    <ProductStyle reversed color="blue">
      <img src={towel} alt="Velas" width="40%" height="auto" />
      <TextContentStyle>
        <h2>Toalhas</h2>
        <p>
          Exercitation culpa nostrud veniam tempor ex laboris quis aliquip
          tempor laborum aute. Aliqua est irure qui aliquip et sunt
          reprehenderit eiusmod consequat eu minim reprehenderit anim elit.
          Nulla in tempor ullamco id labore consequat velit pariatur in velit
          non esse tempor. Nulla cupidatat consectetur veniam anim ut magna
          culpa.
        </p>
      </TextContentStyle>
    </ProductStyle>
  </div>
);

export default Products;
