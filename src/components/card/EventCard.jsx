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
import moment from "moment";

const useStyles = makeStyles({
  box: {
    maxWidth: 345,
    borderRadius: 5,
    backgroundColor: "#f4f4f4",
  },
  categoryBox: {
    position: "absolute",
    width: "auto",
    height: "auto",
    top: 15,
    right: 16,
    backgroundColor: "#0e185f",
    color: "white",
    padding: "0.25em 15px", // top bottom - left right
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
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 25,
  },
  link: {
    textDecoration: "none !important",
  },
});

export default function EventCard({ event }) {
  const styles = useStyles();

  return (
    <Card
      sx={{
        width: 325,
        height: 325,
        borderRadius: 6,
        backgroundColor: "#f4f4f4",
        boxShadow: "none",
      }}
    >
      <Link href="http://google.com" className={styles.link}>
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <img
              className={styles.img}
              src="https://images.unsplash.com/photo-1470608756445-2c9906b0680f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmlnJTIwc2l6ZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt="Event Banner"
            />
          </div>
          <Box className={styles.categoryBox}>{event.name}</Box>
        </div>
        <CardContent sx={{ marginTop: "8px", marginLeft: "10px" }}>
          <Typography
            variant="h5"
            color="#0e185f"
            fontSize={20}
            fontWeight={600}
          >
            {event.title}
          </Typography>
          <Typography
            variant="body2"
            color="#0e185f"
            fontSize={16}
            fontWeight={500}
          >
            {event.organizer_name}
          </Typography>
          <Typography
            variant="caption"
            color="#0e185f"
            fontSize={12}
            fontWeight={400}
          >
            {moment(event.event_date).format("DD MMMM YYYY")}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}
