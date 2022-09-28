import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";

function FormLoginCustomer() {
  const navigate = useNavigate();
  return (
    <Box>
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            m: 1,
            width: "35ch",
            display: "flex",
            flexDirection: "column",
            marginBottom: "28px",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          color="secondary"
        />
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          color="secondary"
        />
      </Box>
      <Typography
        variant="caption"
        color="secondary"
        sx={{
          float: "right",
          cursor: "pointer",
          "&:hover": { color: "#d50000" },
        }}
        mb={3}
      >
        Forgot password ?
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        sx={{ marginBottom: "40px" }}
        onClick={() => navigate("/")}
      >
        Login
      </Button>
      <Box textAlign={"center"}>
        <Typography variant="caption">
          Don't have a Shope Zone account ?{" "}
          <Typography
            variant="caption"
            color="secondary"
            sx={{
              cursor: "pointer",
              "&:hover": { color: "#d50000" },
            }}
            onClick={() => navigate("/register")}
          >
            Register
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}

export default FormLoginCustomer;
