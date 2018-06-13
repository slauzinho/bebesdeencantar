import React from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import styled from "styled-components";

import avatar from "../assets/avatar.svg";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  avatar: {
    margin: 10,
    backgroundColor: "pink"
  },
  bigAvatar: {
    width: 60,
    height: 60
  },
  icon: {
    margin: 2,
    color: "#ff6f96"
  }
};

const ParagraphStyle = styled.p`
text-align: center;
              color: #525f7f;
              font-weight: 400;
              line-height: 22px;
`

const CardContentStyled = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ReviewCard = props => {
  const { classes, avatarSrc } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardContentStyled>
          <Avatar
            src={avatarSrc}
            alt="Avatar"
            className={classNames(classes.avatar, classes.bigAvatar)}
          />
          <Typography gutterBottom variant="headline" component="h4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                fill="#ff6f96"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                fill="#ff6f96"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                fill="#ff6f96"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                fill="#ff6f96"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                fill="#ff6f96"
              />
            </svg>
          </Typography>
          <ParagraphStyle>
            {props.children}
          </ParagraphStyle>
        </CardContentStyled>
      </Card>
    </div>
  );
};

export default withStyles(styles)(ReviewCard);
