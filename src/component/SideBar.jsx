// @ts-nocheck
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import {
  AirplaneTicket,
  ArrowForward,
  AutoFixHigh,
  EmojiFlags,
  Home,
  LocalActivity,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";
import { DrawerHeader } from "../App";
import logo from "../../public/images/White-logo.png";


const links = [
  {
    text: "User",
    icon: <Home />,
    panel: "panel1",
    linkTeam: [
      { text: "Search", path: "/user/Search" },
      { text: "Freelancers Request Money", path: "/user/FreelanceRequest" },
    ],
  },
  {
    text: "Blogs",
    icon: <LocalActivity />,
    panel: "panel2",
    linkTeam: [
      { text: "All Blogs", path: "/blogs/AllBlogs" },
      { text: "Add Blog", path: "/blogs/AddBlogs" },
    ],
  },
  {
    text: "Blogs",
    icon: <AirplaneTicket />,
    panel: "panel3",
    linkTeam: [
      { text: "All Services", path: "/blogsService/AllServices" },
      { text: "Add Services", path: "/blogsService/AddServices" },
    ],
  },
  {
    text: "Ticket Support",
    icon: <EmojiFlags />,
    panel: "panel4",
    linkTeam: [{ text: "All Complaints", path: "/support/AllComplaints" }],
  },
  {
    text: "FQA",
    icon: <AutoFixHigh />,
    panel: "panel5",
    linkTeam: [
      { text: "FQA", path: "/fqa/FQA" },
      { text: "Add FQA", path: "/fqa/AddFQA" },
    ],
  },
];

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { useState } from "react";
import Drawer from "./Drawer";

// eslint-disable-next-line react/prop-types
const SideBar = ({ open, handleDrawerClose, handleDrawerOpen }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader sx={{ backgroundColor: "#333" }}>
        <Button
          sx={{
            "&:hover": {
              backgroundColor: "inherit",
            },
            padding: 0,
            height: '64px',
            width: '180px',
          }}
          onClick={() => navigate('/')}
        >
          <img src={logo} alt="" style={{ width: "100%" }} />
        </Button>
        <IconButton onClick={handleDrawerClose} sx={{ color: "white" }}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>

      <Divider />
      {links.map((link, index) => {
        return (
          <Tooltip title={link.text} key={index} placement="right-start">
            <Button onClick={handleDrawerOpen} sx={{ m: 0, p: 0 }}>
              <Accordion
                expanded={(expanded === link.panel) & open}
                onChange={handleChange(link.panel)}
                sx={{ width: "100%" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    "& .MuiAccordion-region": {
                      display: "flex !important",
                      flexDirection: "column !important",
                      alignItems: "start !important",
                    },
                    "& .css-yw020d-MuiAccordionSummary-expandIconWrapper, .css-1n3veo1 , .css-1fx8m19": {
                      display: open ? "block" : "none",
                    },
                  }}
                >
                  {link.icon}
                  <Typography
                    sx={{
                      ml: 1,
                      fontSize: 16,
                      display: open ? "block" : "none",
                    }}
                  >
                    {link.text}
                  </Typography>
                </AccordionSummary>

                {link.linkTeam.map((subLink, index) => {
                  return (
                    <ListItemButton
                      key={index}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                        bgcolor:
                          location.pathname == subLink.path &&
                          (theme.palette.mode == "dark"
                            ? grey[800]
                            : grey[300]),
                      }}
                      onClick={() => navigate(subLink.path)}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 1 : "auto",
                          justifyContent: "center",
                          "& .css-i4bv87-MuiSvgIcon-root": {
                            fontSize: "18px",
                          },
                        }}
                      >
                        <ArrowForward />
                      </ListItemIcon>

                      <ListItemText
                        primary={subLink.text}
                        sx={{
                          opacity: open ? 1 : 0,
                          "& .css-10hburv-MuiTypography-root": {
                            fontSize: "10px !important",
                          },
                        }}
                      />
                    </ListItemButton>
                  );
                })}
              </Accordion>
            </Button>
          </Tooltip>
        );
      })}
    </Drawer>
  );
};

export default SideBar;
