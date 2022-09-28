import React from "react";
import { useNavigate } from "react-router-dom";
// molecules
import ColorFilter from "../components/molecules/ColorFilter";
// organism
import InformationProduct from "../components/organism/InformationProduct";
// MUI
import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Container,
  Rating,
  TextField,
  Button,
} from "@mui/material";

function DetailProduct() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="xl">
      <Box sx={{ minHeight: "100vh", marginBottom: 15 }}>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Box
              sx={{
                paddingLeft: "10px",
              }}
            >
              <Grid
                container
                rowSpacing={4}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <Card sx={{ width: "263px", height: "329px" }}>
                    <CardMedia
                      component="img"
                      height="100%"
                      image="/img/naiki1.png"
                      alt="green iguana"
                    />
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card sx={{ width: "263px", height: "329px" }}>
                    <CardMedia
                      component="img"
                      height="100%"
                      image="/img/naiki.png"
                      alt="green iguana"
                    />
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card sx={{ width: "263px", height: "329px" }}>
                    <CardMedia
                      component="img"
                      height="100%"
                      image="/img/naiki2.png"
                      alt="green iguana"
                    />
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card sx={{ width: "263px", height: "329px" }}>
                    <CardMedia
                      component="img"
                      height="100%"
                      image="/img/naiki3.png"
                      alt="green iguana"
                    />
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="h4" fontWeight="bold">
              Nike CruzrOne (Bright Crimson)
            </Typography>
            <Typography variant="h6" color="GrayText">
              Nike
            </Typography>
            <Typography my={3}>
              <Rating name="customized-10" defaultValue={5} max={5} />
            </Typography>
            <Typography variant="h6" color="GrayText">
              Price
            </Typography>
            <Typography variant="h4" fontWeight="bold" mb={3}>
              $ 20.0
            </Typography>
            <Typography variant="h6" color="GrayText">
              Color
            </Typography>
            <ColorFilter />
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1 },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                label="Size"
                type={"number"}
                variant="standard"
                InputProps={{ inputProps: { min: 10, max: 50 } }}
              />
              <TextField
                label="Total"
                type={"number"}
                variant="standard"
                InputProps={{ inputProps: { min: 1, max: 50 } }}
                color="secondary"
              />
            </Box>
            <Button
              variant="contained"
              sx={{
                width: 130,
                marginTop: 5,
                backgroundColor: "whitesmoke",
                color: "GrayText",
                "&:hover": {
                  backgroundColor: "white",
                },
                padding: 1.5,
              }}
            >
              Chat
            </Button>
            <Button
              variant="contained"
              sx={{
                width: 130,
                marginTop: 5,
                marginLeft: 3,
                backgroundColor: "whitesmoke",
                color: "GrayText",
                "&:hover": {
                  backgroundColor: "white",
                },
                padding: 1.5,
              }}
            >
              Add Bag
            </Button>
            <br />
            <Button
              variant="contained"
              color="secondary"
              sx={{ marginTop: 5, width: 280, padding: 1.5 }}
              onClick={() => navigate("/checkout")}
            >
              Buy Now
            </Button>
          </Grid>
        </Grid>
        <Typography variant="h4" fontWeight="bold" my={5}>
          Information Product
        </Typography>
        <InformationProduct />
        <Typography variant="h4" fontWeight="bold" my={5}>
          Product review
        </Typography>
        <Typography variant="h2" fontWeight="bold">
          5.0
        </Typography>
        <Rating
          name="customized-10"
          defaultValue={5}
          max={5}
          sx={{ marginBottom: 5 }}
        />
        <hr />
        <Typography variant="h3" fontWeight="bold" mt={5}>
          You can also like this
        </Typography>
        <Typography color="GrayText">You’ve never seen it before!</Typography>
        <Grid container spacing={3} columns={10} mt={1}>
          {Array.from(Array(10)).map((_, index) => (
            <Grid item xs={2} sm={4} md={2} key={index}>
              <Card
                variant="outlined"
                sx={{ maxWidth: 218, maxHeight: 378, cursor: "pointer" }}
                ml={3}
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
    </Container>
  );
}

export default DetailProduct;
