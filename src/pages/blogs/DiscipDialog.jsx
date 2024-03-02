/* eslint-disable react/prop-types */
import { useCallback, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// import Paper from "@mui/material/Paper";
// import Draggable from "react-draggable";
import { Button, useTheme } from "@mui/material";

const DiscipDialog = ({ description }) => {
  console.log('DiscipDialog Page')
  const [open, setOpen] = useState(false);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  },[open]);

  const handleClose = useCallback(() => {
    setOpen(false);
  },[open]);
  const theme = useTheme();
  return (
    <>
      <Button
        onClick={handleClickOpen}
        sx={{ textTransform: "capitalize", color: theme.palette.mode == 'dark' ? 'white' : 'black' }}
      >
        description
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        // PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Description
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DiscipDialog;

// function PaperComponent(props) {
//   return (
//     <Draggable
//       handle="#draggable-dialog-title"
//       cancel={'[class*="MuiDialogContent-root"]'}
//     >
//       <Paper {...props} />
//     </Draggable>
//   );
// }
