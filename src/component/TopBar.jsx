import {
  Divider,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  styled,
} from "@mui/material";
// import React from 'react';
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import AccountSettings from "./AccountSettings";
import ModeIcon from "./ModeIcon";
import Notifications from "./Notifications";
import ChatBubble from "./ChatBubble";

const drawerWidth = 240;

const AppBarr = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
  // @ts-ignore
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

// eslint-disable-next-line react/prop-types
const TopBar = ({ open, handleDrawerOpen }) => {
  return (
    <AppBarr
      position="fixed"
      // @ts-ignore
      open={open}
    >
      <Toolbar>
        <Tooltip title="menu">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
        </Tooltip>

        <Stack direction="row" flexGrow={1} justifyContent="end" spacing={1}>
          <ModeIcon />

          <Notifications />

          <ChatBubble />

          <Divider
            orientation="vertical"
            flexItem
            sx={{ backgroundColor: "#ffffff57", mx: 1 }}
          />
          <AccountSettings />
        </Stack>
      </Toolbar>
    </AppBarr>
  );
};

export default TopBar;
