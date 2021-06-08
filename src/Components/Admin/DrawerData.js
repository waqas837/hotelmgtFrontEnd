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
          <ListItem button onClick={()=>history.push("/")}>
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
          <ListItem button onClick={()=>history.push("/admin")}>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          {/* users*/}
          {
            admin?<ListItem button onClick={()=>history.push("/admin/users")}>
            <ListItemIcon>
            <Group fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>:
         <ListItem button disabled>
            <ListItemIcon>
            <Group fontSize="small"/>
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
         
         
          }
          {/*  Hotel Managers */}
          {admin?<ListItem button onClick={()=>history.push("/admin/hotelmanagers")}>
            <ListItemIcon>
            <HotelOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText primary=" Hotel Managers" />
          </ListItem>:<ListItem button disabled>
            <ListItemIcon>
            <HotelOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText primary=" Hotel Managers" />
          </ListItem>}
          {/* my hotel */}
          <ListItem button onClick={()=>history.push("/admin/myhotel")}>
            <ListItemIcon>
              <Hotel />
            </ListItemIcon>
            <ListItemText primary="My Hotel" />
          </ListItem>
        </List>
      </SwipeableDrawer>
    </div>
  );
};

export default DrawerData;
