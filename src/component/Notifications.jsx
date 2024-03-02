import { Bungalow, Group, InsertDriveFile, NotificationsOutlined, Send, ShoppingCart, SpeakerNotes } from "@mui/icons-material";
import { Badge, Divider, IconButton, Menu, Stack, Tooltip, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import MenuClick from "./MenuClick";

const data = [
  { icon: <Group />, name: "New Customers", timeAgo: "14 sec ago", discretion: "5 new user registered",},
  { icon: <ShoppingCart />, name: "New Orders", timeAgo: "2 min ago", discretion: "You have recived new orders",},
  { icon: <InsertDriveFile />, name: "25 PDF File", timeAgo: "19 min ago", discretion: "The pdf files generated",},
  { icon: <Send />, name: "Time Response", timeAgo: "28 min ago", discretion: "5.1 min avarage time response",},
  { icon: <Bungalow />, name: "New Product Approved", timeAgo: "2 hrs ago", discretion: "Your new product has approved",},
  { icon: <SpeakerNotes />, name: "New Comments", timeAgo: "4 hrs ago", discretion: "New customer comments recived",},
];

const Notifications = () => {
  console.log('Notifications Page')
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  },[anchorEl]);
  const handleClose = useCallback(() => {
    setAnchorEl(null);
  },[anchorEl]);

  return (
    <>
      <Tooltip title="notifications">
        <IconButton color="inherit" onClick={handleClick}>
          <Badge
            color="error"
            badgeContent={7}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <NotificationsOutlined />
          </Badge>
        </IconButton>
      </Tooltip>
      <Menu sx={{left: '8px'}}
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
            minWidth: '400px',
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
          <Stack direction={'row'} justifyContent={'space-between'} width={'100%'} alignItems={'center'} px={2} mb={1}>
            <Typography>Notifications</Typography>
            <Typography>Marks all as read</Typography>
          </Stack>

        <Divider />
        <MenuClick {...{handleClose, data }} message={false} />

      </Menu>
    </>
  );
};

export default React.memo(Notifications);
