import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "next/link";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles({
  root: {
    minWidth: 345,
    margin: 5,
    backgroundColor: "#f5f5f5",
  },
  media: {
    height: 180,
    borderRadius: "8px",
  },
  truncate: {
    overflow: "hidden",
    lineHeight: "1.2rem",
    maxHeight: "4.8rem",
  },
  header: {
    overflow: "hidden",
    lineHeight: "1.8rem",
    maxHeight: "5.4rem",
  },
});

export default function NewsCard({ post }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link href={post.url}>
          <a target="_blank">
            <CardMedia
              className={classes.media}
              image={post.urlToImage}
              title={post.title}
            />
          </a>
        </Link>
        <CardContent>
          <Tooltip title={post.title} arrow>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              className={classes.header}
            >
              {post.title}
            </Typography>
          </Tooltip>
          <Tooltip title={post.description}>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.truncate}
            >
              {post.description}
            </Typography>
          </Tooltip>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Link href={post.url}>
          <a target="_blank">
            <Button size="small" color="primary">
              Know More
            </Button>
          </a>
        </Link>
      </CardActions>
    </Card>
  );
}
