import React from "react";
// organism
import AddAdress from "./AddAdress";
import PropTypes from "prop-types";
// MUI
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  styled,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
// icon
import { Close } from "@mui/icons-material";

// styled
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2, textAlign: "center" }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Close />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
// end styled

function CardAddress() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Card
        variant="outlined"
        sx={{
          width: "720px",
          height: "190px",
          padding: 1,
          marginTop: 2,
          boxShadow: "0px 0px 8px rgba(115, 115, 115, 0.25)",
        }}
      >
        <CardContent>
          <Typography fontWeight="bold" mb={3}>
            Andreas Jane
          </Typography>
          <Typography variant="caption" color="GrayText">
            Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten
            Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja,
            Kab. Banyumas, 53181
          </Typography>
          <br />
          <Button
            variant="contained"
            sx={{
              marginTop: 3,
              backgroundColor: "whitesmoke",
              color: "GrayText",
              "&:hover": {
                backgroundColor: "#DB3022",
                color: "whitesmoke",
              },
            }}
            onClick={handleClickOpen}
          >
            Choose another address
          </Button>
        </CardContent>
      </Card>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Choose another address
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <AddAdress />

          <Card
            sx={{
              width: 550,
              height: 170,
              border: "solid 1px",
              borderColor: "#DB3022",
              marginTop: 4,
              padding: 1,
            }}
          >
            <CardContent>
              <Typography fontWeight="bold" mb={2}>
                Andreas Jane
              </Typography>
              <Typography variant="caption" color="GrayText">
                Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja,
                Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c
                16] Sokaraja, Kab. Banyumas, 53181
              </Typography>
              <br />
              <Button variant="text" color="secondary" sx={{ marginTop: 2 }}>
                Change address
              </Button>
            </CardContent>
          </Card>
        </DialogContent>
      </BootstrapDialog>
    </Box>
  );
}

export default CardAddress;
