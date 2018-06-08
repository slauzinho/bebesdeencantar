import React from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Icon from "@material-ui/core/Icon";
import { AccessAlarm, Star } from "@material-ui/icons";
import Theme from "./Theme";
import styled, { css } from "react-emotion";

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

const ReviewCard = props => {
  const { classes, avatarSrc } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardContent
          className={css`
            display: flex;
            flex-direction: column;
            align-items: center;
          `}
        >
          <Avatar
            src={avatarSrc}
            alt="Avatar"
            className={classNames(classes.avatar, classes.bigAvatar)}
          />
          <Typography gutterBottom variant="headline" component="h4">
            <Icon className={classes.icon}>star</Icon>
            <Icon className={classes.icon}>star</Icon>
            <Icon className={classes.icon}>star</Icon>
            <Icon className={classes.icon}>star</Icon>
            <Icon className={classes.icon}>star</Icon>
          </Typography>
          <Typography component="p">{props.children}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default withStyles(styles)(ReviewCard);
