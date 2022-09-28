import React from "react";
// css
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
// oraganism
import Category from "../components/organism/Category";
import NewProduct from "../components/organism/NewProduct";
// MUI
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container, CardMedia, Typography } from "@mui/material";

function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ minHeight: "100vh" }} mb={5}>
          <Box sx={{ height: 250 }} p={2}>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
              freeMode
              slidesPerView={2}
              spaceBetween={30}
            >
              <SwiperSlide>
                <p>Trends in 2020</p>
                <CardMedia
                  component="img"
                  image="/img/trends.png"
                  alt="green iguana"
                />
              </SwiperSlide>
              <SwiperSlide>
                <p>Black Edition</p>
                <CardMedia
                  component="img"
                  image="/img/black.png"
                  alt="green iguana"
                />
              </SwiperSlide>
              <SwiperSlide>
                <p>Trends in 2020</p>
                <CardMedia
                  component="img"
                  image="/img/trends.png"
                  alt="green iguana"
                />
              </SwiperSlide>
              <SwiperSlide>
                <p>Black Edition</p>
                <CardMedia
                  component="img"
                  image="/img/black.png"
                  alt="green iguana"
                />
              </SwiperSlide>
            </Swiper>
          </Box>
          <Typography variant="h4" fontWeight="bold" ml={3} mt={2}>
            Category
          </Typography>
          <Typography
            variant="subtitle1"
            ml={3}
            mb={3}
            sx={{ color: "GrayText" }}
          >
            What are you currently looking for
          </Typography>
          <Category />

          <Typography variant="h4" fontWeight="bold" ml={3} mt={2}>
            New
          </Typography>
          <Typography
            variant="subtitle1"
            ml={3}
            mb={3}
            sx={{ color: "GrayText" }}
          >
            You’ve never seen it before!
          </Typography>
          <NewProduct />
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Home;
