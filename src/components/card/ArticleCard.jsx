import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { Link } from "@mui/material";
import moment from "moment";

const useStyles = makeStyles({
  card: {
    width: 325,
    height: 345,
    borderRadius: 6,
    backgroundColor: "#f4f4f4",
    boxShadow: "none",
  },
  box: {
    maxWidth: 345,
    borderRadius: 5,
    backgroundColor: "#f4f4f4",
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

export default function ArticleCard({ article }) {
  const styles = useStyles();

  return (
    <Card className={styles.card}>
      <Link href="http://google.com" className={styles.link}>
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <img
              className={styles.img}
              src="https://images.unsplash.com/photo-1470608756445-2c9906b0680f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmlnJTIwc2l6ZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt="Event Banner"
            />
          </div>
        </div>
        <CardContent sx={{ marginTop: "8px", marginLeft: "10px" }}>
          <Typography variant="h6" color="#0e185f" fontWeight={600}>
            Cara membaca cepat
            {/* {event.title} */}
          </Typography>
          <Typography
            variant="body2"
            color="#0e185f"
            fontSize={16}
            fontWeight={500}
          >
            Kompas
            {/* {event.organizer_name} */}
          </Typography>
          <Typography
            variant="caption"
            color="#0e185f"
            fontSize={12}
            fontWeight={400}
          >
            20 September 2022
            {/* {moment(event.event_date).format("DD MMMM YYYY")} */}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}
