import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CategoriesCard(props) {
  return (
    <Card sx={{ height: 300, maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140, width: 260 }}
        image={props.image}
        title={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          href={props.linkTo}
          size="small"
        >{`${props.count} Tasks`}</Button>
      </CardActions>
    </Card>
  );
}
