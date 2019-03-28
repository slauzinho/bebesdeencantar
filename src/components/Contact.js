import React from 'react';
import styled from 'styled-components';
/* import Button from "@material-ui/core/Button"; */
import contactImg from '../assets/contact.jpg';
import Button from './Button';

const Book = styled('div')`
  background-image: linear-gradient(
      105deg,
      rgba(255, 223, 232, 0.9) 0%,
      rgba(255, 223, 232, 0.9) 50%,
      transparent 50%
    ),
    url(${contactImg});
  background-size: 100%;
  border-radius: 3px;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);

  @media (max-width: 600px) {
    background-image: linear-gradient(
      rgba(255, 223, 232, 0.9) 0%,
      rgba(255, 223, 232, 0.9) 100%
    );
  }
`;

const BookForm = styled('div')`
  width: 50%;
  padding: 2rem;

  @media (max-width: 600px) {
    width: 100%;
  }

  h2 {
    font-family: 'Pacifico', cursive;
    font-style: normal;
    font-weight: normal;
    color: #ff6f96;
    font-size: 2rem;
  }

  input,
  textarea {
    font-family: inherit;
    color: inherit;
    padding: 1rem 1.5rem;
    border-radius: 2px;
    background-color: rbga(white, 0.5);
    border: none;
    border-bottom: 3px solid transparent;
    width: 80%;
    display: block;
    transition: all 0.3s;

    @media (max-width: 600px) {
      width: 100%;
    }

    :focus {
      outline: none;
      box-shadow: 0 1rem 2rem rgba(black, 0.1);
      border-bottom: 3px solid #ff6f96;
    }
  }

  textarea {
    resize: none;
  }

  textarea::-webkit-input-placeholder {
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    display: block;
    color: inherit;
  }

  label {
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    display: block;
    transition: all 0.3s;
  }

  input:placeholder-shown + label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }
`;

const MensagemStyle = styled.div`
  margin-bottom: 1rem;
`;

const Contact = () => (
  <Book>
    <BookForm>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-recaptcha="true"
      >
        <input type="hidden" name="form-name" value="contact" /> 
        <div id="contactos">
          <h2>Contacte-nos</h2>
        </div>

        <div>
          <label>
            <input type="text" placeholder="Full name" id="name" required name="name"/>
            Nome
          </label>
        </div>

        <div>
          <label>
            <input
              type="email"
              placeholder="Email address"
              id="email"
              required
              name="email"
            />
            Endereço Email
          </label>
        </div>

        <MensagemStyle>
          <textarea name="message" placeholder="Mensagem..." />
        </MensagemStyle>

          <div data-netlify-recaptcha="true" />
          <Button color="blue">Enviar</Button>

      </form>
    </BookForm>
  </Book>
);

export default Contact;
