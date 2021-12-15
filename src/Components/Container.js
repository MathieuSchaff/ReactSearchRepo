import React from "react";
import CardRepo from "./CardRepo";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  grid: {
    margin: "50px",
    justifyContent: "center",
    columnGap: "20px",
    rowGap: "20px",
  },
  card: {
    width: 325,
  },
}));
const Container = ({ myRes }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      className={classes.grid}
    >
      {myRes.map((item) => (
        <CardRepo
          item
          key={item.id}
          name={item.name}
          Owner={item.owner.login}
          AvatarUrl={item.owner.avatar_url}
          url={item.html_url}
          langage={item.language}
          xs={4}
          className={classes.card}
        />
      ))}
    </Grid>
  );
};

export default Container;
