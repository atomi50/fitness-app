import React from "react";
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "@mui/material/Link";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";

const ExcerciseCard = ({exercise}) => {
  const [like, setLike] = useState();

  return (
    <Card sx={{ maxWidth: 345, mt: 5, ml: 2 }}>
      <CardMedia
        sx={{ cursor: "pointer" }}
        component="img"
        height="300"
        src={exercise.gifUrl}
        alt="generic description of an exercise"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {exercise.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {exercise.target}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link sx={{ cursor: "pointer" }}>Read more</Link>
        <IconButton onClick={() => setLike(!like)}>
          <Typography color="primary" sx={{ pr: 1 }}>
            Like
          </Typography>
          {like ? <FavoriteIcon sx={{ fill: "#dc143c" }} /> : <FavoriteBorderIcon />}
        </IconButton>
      </CardActions>
    </Card>
  );
};


export default ExcerciseCard;
