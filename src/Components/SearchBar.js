import React from "react";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  field: {
    margin: "50px",
    position: "relative",
  },
  textfiel: {
    width: "100%",
    height: "100%",
  },
  icon: {
    position: "absolute",
    top: "50%",
    right: "20px",
    transform: "translate(-50%, -50%)",
    outline: "none",
    border: "none",
    background: "none",
    cursor: "pointer",
  },
}));
const SearchBar = ({ error, handleSubmit }) => {
  const classes = useStyles();

  return (
    <form className={classes.field} onSubmit={(e) => handleSubmit(e)}>
      <TextField
        fullWidth
        label="Search Repo"
        name="query"
        id="inputform"
        error={error}
        className={classes.textfiel}
      />
      <button type="submit" className={classes.icon}>
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;
