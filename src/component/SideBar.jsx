// @ts-nocheck
import { Accordion, AccordionSummary, Button, Divider ,IconButton ,ListItemButton ,ListItemIcon ,ListItemText , Tooltip, Typography, useTheme} from "@mui/material";
import { AirplaneTicket, ArrowForward, AutoFixHigh, Category, ChevronLeft, ChevronRight, EmojiFlags, ExpandMore, Home, LocalActivity, } from "@mui/icons-material";
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
    text: "Services",
    icon: <AirplaneTicket />,
    panel: "panel3",
    linkTeam: [
      { text: "All Services", path: "/blogsService/AllServices" },
      { text: "Add Services", path: "/blogsService/AddServices" },
    ],
  },
  {
    text: "Categories",
    icon: <Category />,
    panel: "panel4",
    linkTeam: [
      { text: "All Category", path: "/blogsService/AllServices" },
      { text: "Add Categories", path: "/blogsService/AddServices" },
    ],
  },
  {
    text: "Ticket Support",
    icon: <EmojiFlags />,
    panel: "panel5",
    linkTeam: [{ text: "All Complaints", path: "/support/AllComplaints" }],
  },
  {
    text: "FQA",
    icon: <AutoFixHigh />,
    panel: "panel6",
    linkTeam: [
      { text: "FQA", path: "/fqa/FQA" },
      { text: "Add FQA", path: "/fqa/AddFQA" },
    ],
  },
];

import { useCallback, useState } from "react";
import Drawer from "./Drawer";

// eslint-disable-next-line react/prop-types
const SideBar = ({ open, handleDrawerClose, handleDrawerOpen }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [expanded, setExpanded] = useState(false);

  const handleChange = useCallback((panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  },[open]);

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader sx={{ backgroundColor: "#333" }}>
        <Button
          sx={{
            "&:hover": {
              backgroundColor: "inherit",
            },
            padding: 0,
            height: "64px",
            width: "180px",
          }}
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="" style={{ width: "100%" }} />
        </Button>
        <IconButton onClick={handleDrawerClose} sx={{ color: "white" }}>
          {theme.direction === "rtl" ? (
            <ChevronRight />
          ) : (
            <ChevronLeft />
          )}
        </IconButton>
      </DrawerHeader>

      <Divider />
      {links.map((link, index) => {
        return (
          <Tooltip title={link.text} key={index} placement="right-start">
            <Button onClick={handleDrawerOpen} sx={{ m: 0, p: 0 }}>
              <Accordion
                expanded={expanded === link.panel && open}
                onChange={handleChange(link.panel)}
                sx={{ width: "100%" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    "& .MuiAccordion-region": {
                      display: "flex !important",
                      flexDirection: "column !important",
                      alignItems: "start !important",
                    },
                    "& .css-yw020d-MuiAccordionSummary-expandIconWrapper, .css-1n3veo1 , .css-1fx8m19, .css-19hn6xk-MuiAccordionSummary-expandIconWrapper":
                      {
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
                      textTransform: "capitalize",
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
                          fontSize: "18px",
                        }}
                      >
                        <ArrowForward />
                      </ListItemIcon>

                      <ListItemText
                        primary={subLink.text}
                        sx={{
                          opacity: open ? 1 : 0,
                          "& .css-10hburv-MuiTypography-root": {
                            fontSize: "10px",
                          },
                          fontSize: "10px",
                          textTransform: "capitalize",
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
