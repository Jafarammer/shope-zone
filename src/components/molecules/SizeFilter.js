import React from "react";
// MUI
import { Box, Button } from "@mui/material";

function SizeFilter() {
  return (
    <Box
      mb={2}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 40,
          height: 40,
        },
      }}
    >
      <Button
        variant="contained"
        p={0}
        sx={{
          backgroundColor: "#DB3022",
          color: "whitesmoke",
          "&:hover": { backgroundColor: "whitesmoke", color: "GrayText" },
        }}
      >
        XS
      </Button>
      <Button
        variant="contained"
        p={0}
        sx={{
          backgroundColor: "#DB3022",
          color: "whitesmoke",
          "&:hover": { backgroundColor: "whitesmoke", color: "GrayText" },
        }}
      >
        S
      </Button>
      <Button
        variant="contained"
        p={0}
        sx={{
          backgroundColor: "#DB3022",
          color: "whitesmoke",
          "&:hover": { backgroundColor: "whitesmoke", color: "GrayText" },
        }}
      >
        M
      </Button>
      <Button
        variant="contained"
        p={0}
        sx={{
          backgroundColor: "#DB3022",
          color: "whitesmoke",
          "&:hover": { backgroundColor: "whitesmoke", color: "GrayText" },
        }}
      >
        L
      </Button>
      <Button
        variant="contained"
        p={0}
        sx={{
          backgroundColor: "#DB3022",
          color: "whitesmoke",
          "&:hover": { backgroundColor: "whitesmoke", color: "GrayText" },
        }}
      >
        XL
      </Button>
    </Box>
  );
}

export default SizeFilter;
