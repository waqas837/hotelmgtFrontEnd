import React, { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../images/logo.png"
import {
  Box,
  Drawer,
  List,
  ListItem,
  Typography,
  makeStyles,
  Divider,
  Button,
  Collapse,
  Grid,
} from "@material-ui/core";
import { blueGrey, pink } from "@material-ui/core/colors";

import {
  SupervisorAccount,
  Dashboard,
  CollectionsBookmark,
  Person,
  SettingsApplications,
  Feedback,
  ExpandMore,
  ExpandLess,
  PowerSettingsNew,
  Delete,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  font: {
    fontStyle: "italic",
  },
 
  hover: {
    "&:hover": {
      background: blueGrey[100],
      borderLeft: "2px solid hotpink",
    },
  },
}));
//component starts here
const Panel = () => {
  const classes = useStyles();
  const history = useHistory();
  const [state, setstate] = useState(null);
  const user = localStorage.getItem("user");
  function collpseHandler() {
    setstate(!state);
  }
useEffect(()=>{
if(user){
  history.push("/userDashboard")

}
if(!user){
  history.push("/")
}
},[user])
  return  (
    <div>
     <Box textAlign="center">
        <Typography variant="h5" color="secondary">
          Dashboard
        </Typography>

      </Box>
      <Box>
        <Grid component={Box}>
          <List style={{width: "210px",border:"1px solid black",marginLeft:"20px"}}>
            <ListItem
              className={classes.hover}
              button
              onClick={() => history.push("/userDashboard")}
            >
            <Grid container>
            <Grid
             component={Box} item><img width="80px" src={logo} alt=""/>
             </Grid>
            </Grid>
            </ListItem>
            <ListItem   button   className={classes.hover}>
              <Typography variant="h6">
                <Dashboard color="secondary"/> Dashboard
              </Typography>
            </ListItem>
            <br />
            <Divider  />
            {/* user dashboard */}
            <ListItem className={classes.hover} button>
              <Typography variant="body1" style={{}}>
                {user}
              </Typography>
            </ListItem>
            <Divider  />

            <ListItem
              className={classes.hover}
              style={{ }}
              button
              // onClick={() => history.push("/")}
            >
              <CollectionsBookmark color="secondary"/> &nbsp; Bookings
            </ListItem>
            <ListItem
              className={classes.hover}
              style={{ }}
              button
              onClick={collpseHandler}
            >
              <SupervisorAccount color="secondary"/> &nbsp; Profiles{" "}
              {state ? <ExpandMore /> : <ExpandLess />}
            </ListItem>
            {/* collapse */}
            <Collapse in={state} timeout="auto" unmountOnExit>
              <ListItem
                className={classes.hover}
                style={{ }}
                button
              >
                &nbsp;&nbsp; <SupervisorAccount color="secondary"/> &nbsp; new Profiles
              </ListItem>
            </Collapse>
            {/* end collpase */}
            <ListItem
              className={classes.hover}
              style={{ }}
              button
              // onClick={() => history.push("/")}
            >
              <Person color="secondary"/> &nbsp; My Profiles
            </ListItem>
            <ListItem
              className={classes.hover}
              style={{ }}
              button
              // onClick={() => history.push("/")}
            >
              <SettingsApplications color="secondary"/> &nbsp;Administration
            </ListItem>
            <ListItem
              className={classes.hover}
              style={{ }}
              button
              // onClick={() => history.push("/")}
            >
              <Feedback color="secondary"/> &nbsp; Submit Feedback
            </ListItem>

            <Divider />
            <ListItem
              className={classes.hover}
              style={{ }}
              button
              // onClick={() => history.push("/")}
            >
              <PowerSettingsNew color="secondary"/> &nbsp;Logout &nbsp;{user}
            </ListItem>
            <Divider />
            <ListItem
              className={classes.hover}
              style={{ }}
              button
              // onClick={() => history.push("/")}
            >
              <Delete color="secondary"/> &nbsp;Delete Profile
            </ListItem>
            <Typography variant="caption" style={{ color: "whitesmoke" }}>
              {" "}
              Booking.com
            </Typography>
          </List>
        </Grid>
      </Box>
    </div>
  ) 
};

export default Panel;
