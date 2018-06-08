import React from 'react'
import { withSiteData } from 'react-static'
import styled, { css } from "react-emotion";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import avatar from '../assets/avatar.svg';
import headerLogo from '../assets/header_img.png';
import avatar1 from '../assets/54.jpg';
import avatar2 from '../assets/81.jpg';
import avatar3 from '../assets/32.jpg';

import ReviewCard from '../components/Card';

const Container = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;

  h1 {
    font-family: 'Pacifico', cursive;
    color: #FF6F96;
    line-height: 3rem;
  }
`

const Reviews = styled("div")`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  background-color:  #ffdfe8;
  padding: 5rem 2rem;
`

export default withSiteData(() => (
  <div>
  <Container>
    <div className={css`padding-right: 10rem`}>
      <h1>
      Os melhores produtos para o seu bébé.
      </h1>
      <p>
      Porque esses momentos são únicos e perduram para sempre na memória de quem neles participa, os nossos trabalhos são feitos com muito carinho e paixão tentando sempre ir ao encontro dos desejos de quem nos procura.
      </p>
    </div>
    <img src={headerLogo} alt="Header logo" />
  </Container>
  <Reviews>
  <div className={css`display: flex; align-items: center`}>
    <ReviewCard avatarSrc={avatar1}> 
    Fiquei apaixonada. Profissionalismo incrível e uma dedicação extraordinária. Tudo perfeito e apesar de complemente diferente do que faziam, conseguiram ir ao encontro do que procurava e pedia. Recomendo!
    </ReviewCard>
    <ReviewCard avatarSrc={avatar2}> 
    Muitas coisas bonitas não podem ser vistas ou tocadas, elas são sentidas dentro do coração, num dia tão especial à minha maneira, todos estes miminhos farão parte de lindas e doces memórias :) 
Todos os artigos vieram conforme solicitado e estão todos muito lindos e com muito gosto. 

    </ReviewCard>
    <ReviewCard avatarSrc={avatar3}> 
    Profissionalismo, bom gosto, simpatia e atenção caracterizaram a nossa encomenda. Top para quem está fora! Foi com grande admiração que encontrámos a nossa encomenda de "encantar" já à nossa espera.
    Obrigada a toda a equipa!
    </ReviewCard>
  </div>
  </Reviews>
  </div>
))
