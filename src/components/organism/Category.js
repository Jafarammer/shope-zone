import React from "react";
// MUI
import { Box, Card, CardMedia, Typography } from "@mui/material";

function Category() {
  return (
    <Box
      sx={{
        height: 260,
        display: "flex",
        justifyContent: "space-between",
      }}
      py={2}
      px={15}
    >
      <Card
        sx={{
          backgroundColor: "#CC0B04",
          borderRadius: "10px",
          height: "220px",
          width: "206px",
          padding: "10px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            color: "whitesmoke",
            marginTop: "80px",
            marginLeft: "47px",
          }}
        >
          T-Shirt
        </Typography>
        <CardMedia
          component="img"
          height="100%"
          image="/img/tshirt.png"
          alt="green iguana"
        />
      </Card>

      <Card
        sx={{
          backgroundColor: "#1C3391",
          borderRadius: "10px",
          height: "220px",
          width: "206px",
          padding: "10px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            color: "whitesmoke",
            marginTop: "80px",
            marginLeft: "47px",
          }}
        >
          Short
        </Typography>
        <CardMedia
          component="img"
          height="100%"
          image="/img/short.png"
          alt="green iguana"
        />
      </Card>

      <Card
        sx={{
          backgroundColor: "#F67B02",
          borderRadius: "10px",
          height: "220px",
          width: "206px",
          padding: "10px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            color: "whitesmoke",
            marginTop: "80px",
            marginLeft: "47px",
          }}
        >
          Jacket
        </Typography>
        <CardMedia
          component="img"
          height="100%"
          image="/img/jacket.png"
          alt="green iguana"
        />
      </Card>

      <Card
        sx={{
          backgroundColor: "#E31F51",
          borderRadius: "10px",
          height: "220px",
          width: "206px",
          padding: "10px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            color: "whitesmoke",
            marginTop: "80px",
            marginLeft: "47px",
          }}
        >
          Pants
        </Typography>
        <CardMedia
          component="img"
          height="100%"
          image="/img/pants.png"
          alt="green iguana"
        />
      </Card>
      <Card
        sx={{
          backgroundColor: "#57CD9E",
          borderRadius: "10px",
          height: "220px",
          width: "206px",
          padding: "10px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            color: "whitesmoke",
            marginTop: "80px",
            marginLeft: "47px",
          }}
        >
          Shoes
        </Typography>
        <CardMedia
          component="img"
          height="100%"
          image="/img/shoes.png"
          alt="green iguana"
        />
      </Card>
    </Box>
  );
}

export default Category;
