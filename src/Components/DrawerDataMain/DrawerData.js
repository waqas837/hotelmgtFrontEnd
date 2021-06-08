import React,{useEffect} from "react";
import {useHistory} from "react-router-dom"
import {
  Home,
  Info,
  CloseOutlined,
  RoomService,
  LocalMall,
  MarkunreadMailbox,
  PhoneInTalk,
  ExpandMore,
  AddOutlined,
  Person,
  Group,
  HotelOutlined,
  Hotel,
} from "@material-ui/icons";
import {
    Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Tooltip,
} from "@material-ui/core";
import logo from "../../images/logo.png";
// main
const DrawerData = ({ opendrawer, setopendrawer }) => {
  const history = useHistory();
  const admin = localStorage.getItem("admin");
 
  return (
    <div>
      <SwipeableDrawer
        open={opendrawer}
        onClose={() => setopendrawer(false)}
        anchor="left"
      >
        <List  style={{width:"300px"}} >
          {/* logo */}
          <ListItem button>
            <img src={logo} width="100px" height="60px" alt="" />
            <IconButton
              style={{ marginLeft: "auto" }}
              onClick={() => setopendrawer(false)}
            >
              <CloseOutlined />
            </IconButton>
          </ListItem>
          <Divider />
          {/* Home */}
          <ListItem button>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
         
          <ListItem button>
            <ListItemIcon>
              <Hotel />
            </ListItemIcon>
            <ListItemText primary="My Hotel" />
          </ListItem>
          {/* Contact */}
          <ListItem button>
            <ListItemIcon>
              <PhoneInTalk />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </SwipeableDrawer>
    </div>
  );
};

export default DrawerData;
