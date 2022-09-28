import React from "react";
// MUI
import { Box, Paper } from "@mui/material";

function ColorFilter() {
  return (
    <Box
      mb={2}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 2,
          width: 36,
          height: 36,
        },
      }}
    >
      <Paper
        elevation={0}
        sx={{
          backgroundColor: "black",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      />
      <Paper
        sx={{
          backgroundColor: "white",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      />
      <Paper
        elevation={0}
        sx={{
          backgroundColor: "#B82222",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      />
      <Paper
        elevation={0}
        sx={{
          backgroundColor: "#BEA9A9",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      />
      <Paper
        elevation={0}
        sx={{
          backgroundColor: "#E2BB8D",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      />
      <Paper
        elevation={0}
        sx={{
          backgroundColor: "#151867",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      />
    </Box>
  );
}

export default ColorFilter;
