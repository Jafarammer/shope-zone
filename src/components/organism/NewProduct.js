import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  Grid,
} from "@mui/material";

function NewProduct() {
  const navigate = useNavigate();
  return (
    <Box p={3}>
      <Grid container spacing={3} columns={10}>
        {Array.from(Array(30)).map((_, index) => (
          <Grid item xs={2} sm={4} md={2} key={index}>
            <Card
              variant="outlined"
              sx={{ maxWidth: 218, maxHeight: 378, cursor: "pointer" }}
              ml={3}
              onClick={() => navigate("/detailproduct")}
            >
              <CardMedia
                component="img"
                height="140"
                image="/img/jas.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Men's formal suit - Black & White
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="secondary"
                >
                  $ 40.0
                </Typography>
                <Typography variant="caption" gutterBottom color="GrayText">
                  Zalora Cloth
                </Typography>
                <Rating name="customized-10" defaultValue={3} max={5} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default NewProduct;
