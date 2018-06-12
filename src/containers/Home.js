import React from "react";
import { withSiteData } from "react-static";
import styled, { css } from "react-emotion";
import Grid from "@material-ui/core/Grid";

import headerLogo from "../assets/header_img.png";
import avatar1 from "../assets/54.jpg";
import avatar2 from "../assets/81.jpg";
import avatar3 from "../assets/32.jpg";
import diamond from "../assets/diamond.svg";
import handmade from "../assets/handmade.svg";
import contact from "../assets/contact.svg";
import galleryData from "../assets/gallery";

import ReviewCard from "../components/Card";
import Gallery from "../components/Gallery";
import Contact from '../components/Contact';
import Products from '../components/Products';

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;

  @media (max-width: 600px){
    padding-right: 24px;
  }

  p {
    color: #525f7f;
    font-weight: 400;
    font-size: 17px;
    line-height: 28px;
  }

  h1 {
    font-family: "Pacifico", cursive;
    font-style: normal;
    font-weight: normal;
    color: #ff6f96;
  }
`;

const Reviews = styled("div")`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  background-color: #ffdfe8;
  padding: 5rem 2rem;
  @media (max-width: 630px) {
    flex-direction: column;

    & > div {
      flex-direction: column;
      div:not(:last-child){
        margin-bottom: 1rem;
      }
    }
  }

`;

const ProductTypes = styled("div")`
  margin-top: 5rem;
  margin-bottom: 6rem;

  p {
    color: #525f7f;
    text-align: center;
    font-weight: 400;
    font-size: 17px;
    line-height: 28px;
  }

  h2 {
    font-family: "Pacifico", cursive;
    font-style: normal;
    font-weight: normal;
    color: #ff6f96;
    text-align: center;
    font-size: 2rem;
  }

  @media (max-width: 600px) {
    padding: 0 32px;
  }
`;

const GalleryStyle = styled("div")`
  /* background-color: #ffdfe8; */
  padding: 20px 32px;
  margin-top: 5rem;
`;

const ContactStyle = styled('div')`
  margin: 2rem 0;
`

const ProductImgs = styled("div")`
  width: 80px;
  height: 80px;
  position: relative;
  overflow: hidden;
  user-select: none;
  border-radius: 50%;
  background-color: #edecfb;
  padding: 0.5rem;
  margin: 0 auto;
  outline-width: 0;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    user-select: none;
    outline-width: 0 !important;
  }
`;

export default withSiteData(() => (
  <div>
    <Grid container alignItems="center">
      <Grid item xs={12} sm={6}>
        <Container>
          <h1>Os melhores produtos para o seu bébé.</h1>
          <p>
            Porque esses momentos são únicos e perduram para sempre na memória
            de quem neles participa, os nossos trabalhos são feitos com muito
            carinho e paixão tentando sempre ir ao encontro dos desejos de quem
            nos procura.
          </p>
        </Container>
      </Grid>
      <Grid item xs={12} sm={6}>
        <img src={headerLogo} alt="Header logo" width="100%" height="auto" />
      </Grid>
    </Grid>

    <Products />

    <ProductTypes>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={4}>
          <ProductImgs>
            <img src={diamond} alt="Produtos exclusivos" />
          </ProductImgs>
          <h2>Exclusivo</h2>
          <p>
            Todos os artigos apresentados aqui, são exclusivos, elaborados
            manualmente por nós e não se encontram à venda em espaços
            comerciais.
          </p>
        </Grid>
        <Grid item xs={12} sm={4}>
          <ProductImgs>
            <img src={handmade} alt="Produtos personalizaveis" />
          </ProductImgs>
          <h2>Personalize</h2>
          <p>
            Para os modelos apresentados poderá escolher tamanhos, cores,
            decorações e personalizar qualquer trabalho desde que os materiais
            se encontrem disponíveis.
          </p>
        </Grid>
        <Grid item xs={12} sm={4}>
          <ProductImgs>
            <img src={contact} alt="Contactos" />
          </ProductImgs>
          <h2>Contactos</h2>
          <p>
            Para pedir orçamentos, informações, prazos ou tirar dúvidas envie
            email para: bebesdeencantar@gmail.com
          </p>
        </Grid>
      </Grid>
    </ProductTypes>
    <Reviews>
      <div
        className={css`
          display: flex;
          align-items: center;
        `}
      >
        <ReviewCard avatarSrc={avatar1}>
          Fiquei apaixonada. Profissionalismo incrível e uma dedicação
          extraordinária. Tudo perfeito e apesar de complemente diferente do que
          faziam, conseguiram ir ao encontro do que procurava e pedia.
          Recomendo!
        </ReviewCard>
        <ReviewCard avatarSrc={avatar2}>
          Muitas coisas bonitas não podem ser vistas ou tocadas, elas são
          sentidas dentro do coração, num dia tão especial à minha maneira,
          todos estes miminhos farão parte de lindas e doces memórias :) Todos
          os artigos vieram conforme solicitado e estão todos muito lindos e com
          muito gosto.
        </ReviewCard>
        <ReviewCard avatarSrc={avatar3}>
          Profissionalismo, bom gosto, simpatia e atenção caracterizaram a nossa
          encomenda. Top para quem está fora! Foi com grande admiração que
          encontrámos a nossa encomenda de {"encantar"} já à nossa espera.
          Obrigada a toda a equipa!
        </ReviewCard>
      </div>
    </Reviews>
    <GalleryStyle>
      <Gallery tileData={galleryData} />
    </GalleryStyle>
    <ContactStyle>
      <Contact />
    </ContactStyle>
  </div>
));
