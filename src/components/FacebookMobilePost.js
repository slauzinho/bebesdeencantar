/* eslint-disable */
import React, { Component } from "react";
import styled from "styled-components";
import Preview from "./Preview";
import like from "../assets/like.svg";
import hotlike from "../assets/hotlike.svg";
import comment from "../assets/comment.svg";
import share from "../assets/share.svg";

const Container = styled.div`
  max-width: 375px;
  display: block;
  width: 100%;
  box-shadow: 0px 9px 12px rgba(0, 0, 0, 0.06);
  background: #fff;
`;
const Header = styled.div`
  display: flex;
  padding: 12px;
`;
const Avatar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;
const UserInfo = styled.div`
  flex-grow: 1;
  padding-left: 8px;
`;
const Username = styled.span`
  display: inline-block;
  width: 100%;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 14px;
  color: #141823;
`;
const Timestamp = styled.span`
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 12px;
  color: #616770;
`;

const Body = styled.div``;
const Post = styled.div`
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 13px;
  color: #141823;
  display: block;
  padding: 0 12px 12px 12px;
`;

const Likebar = styled.div`
  display: flex;
  margin: 0 20px;
  padding: 10px 0;
  border-bottom: 0.5px solid #dcdee3;
  img {
    width: 16px;
    height: 16px;
  }
  span {
    align-self: center;
    color: #616770;
    font-size: 13px;
    padding-left: 10px;
  }
`;

const FooterButton = styled.a`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  cursor: pointer;
`;

const Button = styled.span`
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translate(-50%, 5px) scale(0.95);
  opacity: 0;
  transition: 0.7s cubic-bezier(0.19, 1, 0.22, 1);
  white-space: nowrap;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding: 0 14px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  text-decoration: none;
  transition: all 0.3s ease;
  color: #fff;
  background: #ff6f96;
`;
const FooterLinks = styled.div`
  width: 100%;
  height: 100%;
  transition: 1s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform;
  filter: blur(0);
`;

const Footer = styled.div`
  position: relative;
  border: 0.5px solid #dcdee3;
  &:hover,
  &:focus {
    ${FooterLinks} {
      opacity: 0.7;
      transform: scale(0.95);
      filter: blur(10px);
    }

    ${Button} {
      opacity: 1;
      transform: translate(-50%, 22px);
    }
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
`;

const Action = styled.div`
  flex: 1;
  align-self: center;
  img {
    width: 16px;
    height: 15px;
    align-self: center;
  }
  div {
    color: #616770;
    font-weight: bold;
    font-size: 13px;
    padding-left: 10px;
    display: inline-block;
  }
`;

class FacebookMobilePost extends Component {
  render() {
    const { loading, style, text, meta } = this.props;

    if (loading) {
      return (
        <Container style={{ padding: 10 }} className="fade-out">
          Hey
        </Container>
      );
    }

    return (
      <Container style={style} className="fade-in">
        <Header>
          <Avatar
            alt="Bebés de Encantar"
            src="https://scontent.fopo2-1.fna.fbcdn.net/v/t1.0-9/34699780_1714803975265820_888348474041434112_n.jpg?_nc_cat=0&oh=bff4e3146abdd450e323a8e9f8f35a99&oe=5BDDD6FE"
          />
          <UserInfo>
            <Username>Bebés de Encantar</Username>
            <Timestamp>{this.props.date} - Braga, Portugal</Timestamp>
          </UserInfo>
        </Header>
        <Body>
          <Post>{text}</Post>
          {meta ? <Preview {...meta} /> : null}
        </Body>
        <Footer>
          <FooterLinks>
            <Likebar>
              <img src={like} alt="Like icon" />
              <span>{this.props.likes}</span>
            </Likebar>
            <Actions>
              <Action>
                <img src={hotlike} alt="Like icon" />
                <div>Like</div>
              </Action>
              <Action>
                <img src={comment} alt="Comment icon" />
                <div>Comment</div>
              </Action>
              <Action>
                <img style={{ marginLeft: 20 }} alt="Share icon" src={share} />
                <div>Share</div>
              </Action>
            </Actions>
          </FooterLinks>
          <FooterButton href={this.props.link}>
            <Button>Ver no Facebook</Button>
          </FooterButton>
        </Footer>
      </Container>
    );
  }
}

export default FacebookMobilePost;
