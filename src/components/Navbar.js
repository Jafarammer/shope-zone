import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// images
import imgLogo from "../images/Vector.svg";
// organism
import DialogFilter from "./organism/DialogFilter";
// MUI
import {
  styled,
  Box,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
} from "@mui/material";
// MUI Icon
import { ShoppingCartOutlined, FilterAltOutlined } from "@mui/icons-material";

// style
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  margin: "0 180px",
});
const GroupLeft = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  cursor: "pointer",
});
const GroupCenter = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  width: "50%",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "90%",
}));

const GroupRight = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
});
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
// end style

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "whitesmoke", marginBottom: "50px" }}
    >
      <StyledToolbar>
        <GroupLeft py={2} onClick={() => navigate("/")}>
          <img src={imgLogo} />
          <Typography
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
            mt={1}
            color="#DB3022"
          >
            <Box sx={{ fontWeight: "bold", m: 1 }}>Shope Zone</Box>
          </Typography>
        </GroupLeft>

        <GroupCenter>
          <Search>
            <InputBase fullWidth placeholder="search..." />
          </Search>
          <Button variant="contained" onClick={handleClickOpen} color="error">
            <FilterAltOutlined />
          </Button>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"Filter"}</DialogTitle>
            <hr />
            <DialogContent>
              <DialogFilter />
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleClose}
                sx={{
                  "&:hover": {
                    backgroundColor: "#DB3022",
                    color: "whitesmoke",
                  },
                }}
              >
                Discard
              </Button>
              <Button
                onClick={handleClose}
                sx={{
                  "&:hover": {
                    backgroundColor: "#DB3022",
                    color: "whitesmoke",
                  },
                }}
              >
                Apply
              </Button>
            </DialogActions>
          </Dialog>
        </GroupCenter>

        <GroupRight>
          <Typography variant="span" mr={10} color="#DB3022">
            <ShoppingCartOutlined />
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "whitesmoke",
              color: "GrayText",
              "&:hover": { backgroundColor: "#DB3022", color: "whitesmoke" },
            }}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "whitesmoke",
              color: "GrayText",
              "&:hover": { backgroundColor: "#DB3022", color: "whitesmoke" },
            }}
            onClick={() => navigate("/register")}
          >
            Sign Up
          </Button>
        </GroupRight>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;
