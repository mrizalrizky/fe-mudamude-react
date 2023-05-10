import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import banner from "../../assets/images/banner.png";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { Link } from "@mui/material";

const useStyles = makeStyles({
  box: {
    maxWidth: 345,
    borderRadius: 5,
    backgroundColor: "#f4f4f4",
  },
  categoryBox: {
    position: "absolute",
    width: "85px",
    top: 15,
    right: 16,
    backgroundColor: "#0e185f",
    color: "white",
    padding: "5px",
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
  },
  container: {
    position: "relative",
  },
  imgContainer: {
    height: 200,
    overflow: "hidden",
    // maxWidth: "100%",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  link: {
    textDecoration: "none !important",
  },
});

export default function EventCard(props) {
  const styles = useStyles();

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: 325,
        borderRadius: 5,
        backgroundColor: "#f4f4f4",
      }}
    >
      <Link href="http://google.com" className={styles.link}>
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <img
              className={styles.img}
              src="https://images.unsplash.com/photo-1470608756445-2c9906b0680f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmlnJTIwc2l6ZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              //   src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
              //   src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg"
              alt="Event Banner"
            />
          </div>
          <Box className={styles.categoryBox}>{props.category}</Box>
        </div>
        <CardContent sx={{ marginTop: "8px", marginLeft: "10px" }}>
          <Typography
            variant="h5"
            color="#0e185f"
            fontSize={20}
            fontWeight={600}
          >
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            color="#0e185f"
            fontSize={16}
            fontWeight={500}
          >
            {props.organizer}
          </Typography>
          <Typography
            variant="caption"
            color="#0e185f"
            fontSize={12}
            fontWeight={400}
          >
            {props.date}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            {/* <FavoriteIcon /> */}
          </IconButton>
          <IconButton aria-label="share">{/* <ShareIcon /> */}</IconButton>
        </CardActions>
      </Link>
    </Card>
  );
}
