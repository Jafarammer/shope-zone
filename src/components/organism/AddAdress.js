import React from "react";
// MUI
import { Box, Card, Typography } from "@mui/material";

function AddAdress() {
  return (
    <Box>
      <Card
        sx={{
          width: 565,
          height: 86,
          border: "dashed 2px",
          borderColor: "GrayText",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography color="GrayText">Add new address</Typography>
      </Card>
    </Box>
  );
}

export default AddAdress;
