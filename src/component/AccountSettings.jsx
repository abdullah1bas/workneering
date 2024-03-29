import React, { useCallback, useMemo, useState } from "react";
import { Tooltip, Avatar, Menu, MenuItem, ListItemIcon, Divider, Button, Typography, Box, } from "@mui/material";
import {
  PersonAdd,
  Settings,
  Logout,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const AccountSettings = () => {
  console.log('AccountSettings Page')
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = useMemo(() => Boolean(anchorEl),[anchorEl]);
  const handleClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  },[anchorEl]);
  const handleClose = useCallback(() => {
    setAnchorEl(null);
  },[anchorEl]);
  const navigate = useNavigate();
  return (
    <>
      <Tooltip title="Account settings">
        <Button variant="text" startIcon={<Avatar sx={{width: 30, height: 30}} src="/broken-image.jpg" />}
        onClick={handleClick}
        aria-controls={openMenu ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openMenu ? "true" : undefined}
        color="inherit"
        sx={{width: '150px', gap: 1, p: 0}}
        >
          <Box sx={{display: 'flex', flexDirection: 'column' ,alignItems: 'start'}}>
            <Typography sx={{fontSize: '10px', textTransform: 'capitalize'}}>Admin Account</Typography>
            <Typography sx={{fontSize: '8px', textTransform: 'capitalize'}}>Admin</Typography>
          </Box>
        </Button>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={openMenu}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={()=> {
          handleClose();
          navigate('/user/Profile')
        }}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default React.memo(AccountSettings);
