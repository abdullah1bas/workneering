import { ChatBubbleOutline } from "@mui/icons-material";
import {
  Badge,
  Divider,
  IconButton,
  Menu,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuClick from "./MenuClick";
import { useState } from "react";

const data = [
  {
    imageSrc: "",
    name: "Daisy Anderson",
    timeAgo: "5 sec ago",
    discretion: "The standard Chunk of lorem",
  },
  {
    imageSrc: "",
    name: "Althea Cabardo",
    timeAgo: "14 sec ago",
    discretion: "Many desktop Publishing Packages",
  },
  {
    imageSrc: "",
    name: "Oscar Garner",
    timeAgo: "8 min ago",
    discretion: "Various versions have evolved over",
  },
  {
    imageSrc: "",
    name: "Katherine Pechon",
    timeAgo: "15 min ago",
    discretion: "Marking this the first true generator",
  },
  {
    imageSrc: "",
    name: "Amelia Doe",
    timeAgo: "22 min ago",
    discretion: "Duls aute irure dolar in reprehenderit",
  },
  {
    imageSrc: "",
    name: "Cristina Jhons",
    timeAgo: "2 hrs ago",
    discretion: "The Passage is attributed to an unknown",
  },
];

const ChatBubble = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Tooltip title="Message">
        <IconButton color="inherit">
          <Badge
            color="error"
            onClick={handleClick}
            badgeContent={8}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <ChatBubbleOutline />
          </Badge>
        </IconButton>
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
            minWidth: "400px",
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
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          width={"100%"}
          alignItems={"center"}
          px={2}
          mb={1}
        >
          <Typography>Messages</Typography>
          <Typography>Marks all as read</Typography>
        </Stack>

        <Divider />
        <MenuClick {...{ handleClose, data }} message={true} />
        
      </Menu>
    </>
  );
};

export default ChatBubble;
