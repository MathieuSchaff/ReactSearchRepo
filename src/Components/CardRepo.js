import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CardRepo = ({ name, Owner, AvatarUrl, url, langage }) => {
  const changeSite = (url) => {
    window.open(url);
  };
  return (
    <div>
      <Card sx={{ width: 325, minHeight: 416 }}>
        <CardContent>
          <img
            src={AvatarUrl}
            alt="avatar"
            style={{ maxWidth: "100%", height: "auto", padding: "5px" }}
          />

          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {Owner}
          </Typography>
          <Typography variant="h5" component="div">
            {name}
          </Typography>

          <Typography variant="body2">{langage}</Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => window.open(url)}
            url={url}
            size="small"
            style={{ textAlign: "right" }}
          >
            See Repo
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardRepo;
