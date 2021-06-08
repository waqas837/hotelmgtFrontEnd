import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { grey, pink } from "@material-ui/core/colors";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { ClipLoader } from "react-spinners";
import logo from "../../images/logo.png";
import DrawerData from "../DrawerDataMain/DrawerData"
import axios from "axios";
import {url} from "../../Api/Api"
import { AccountCircleOutlined, Close, Menu, Visibility } from "@material-ui/icons";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  IconButton,
  Box,
  Dialog,
  DialogTitle,
  DialogContentText,
  Input,
  Divider,
  Container,
  CssBaseline,
  Hidden,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
// const realWidth = 205;
const useStyles = makeStyles((theme) => ({
  root: {},
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
  title: {
    marginRight: "auto",
    fontWeight: "bold",
  },
  titleTwo: {
    color: "white",
    fontStyle: "bold",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "90%",
    },
  },
  alignLeft: {
    textAlign: "left",
  },
  appBar: {
    marginBottom: "5px",
  },

  resposive: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  hover: {
    "&:hover": {
      background: grey[200],
    },
  },
  hideLoginLogout:{
    [theme.breakpoints.down('sm')]:{
      display:"none"
    }
  }
}));
//main component starts here
const Navbar = () => {
  const history = useHistory();
  const user = localStorage.getItem("user");
  const [state, setstate] = useState();
  const [loading, setloading] = useState(false);
  const [open, setOpen] = useState(false);
  const [opentwo, setOpentwo] = useState(false);
  const [showpass, setshowpass] = useState(true);
  const [showpasstwo, setshowpasstwo] = useState(true);
  const [showpassthree, setshowpassthree] = useState(true);
  const [emailpattern, setemailpattern] = useState(true);
  // here is the sign in functionality
  const userSignsin = async () => {
    setloading(true);
    const { data } = await axios.post(
      `${url}/user/signin`,
      state
    );
    setloading(false);
    if (data.success) {
      localStorage.setItem("user", data.user);
      toast.success("Thanks for login");
      history.push("/userDashboard");
    }
    if (data.err) {
      toast.error("Invalid email or passoword");
    }
  };
  function handleClose() {
    setOpen(false);
  }
  function handleCloseTwo() {
    setOpentwo(false);
  }

  //sign in
  function signIn() {
    if (user) {
      history.push("/userDashboard");
    }
  }

  //logout
  function logout() {
    localStorage.removeItem("user");
    window.location.reload();
  }
  const classes = useStyles();
  //FOR dialgoue signup functionality starts here
  // const user = localStorage.getItem("user");
  // useEffect(() => {
  //   if (user) {
  //     history.push("/userDashboard");
  //   }
  // }, []);
  const [stateS, setstateS] = useState();
  const [loadingS, setloadingS] = useState(false);
  const [opendrawer,setopendrawer] =useState(null)

  //userSigns up here
  async function userSignsUp(e) {
    e.preventDefault();
    setloadingS(true);

    try {
      setloadingS(true);
      if (stateS.email === undefined) {
        toast.error("Don't left any field empty");
      }

      const { data } = await axios.post(
        `${url}/user/signup`,
        stateS
      );
      console.log(data);
      setloadingS(false);
      //here is the error to check whether response data is coming
      //handle this one
      //  setdupUser(data.driver)
      if (data.passerr) {
        toast.error("Password and confirm password must be same");
      }
      if (data.code) {
        toast.error("User already exists try different one");
      }
      if (data.name === "ValidationError") {
        setemailpattern(false);
        toast.error("Put a valid email");
      }
      if (!data.errors && !data.passerr && !data.code) {
        localStorage.setItem("user", data);
        setloadingS(false);
        history.push("/userDashboard");
      }
    } catch (error) {
      console.log(error);
      // setloadingS(true);
      toast.error("All fields are mandatory to fill");
      setloadingS(false);
    }
  }
  //End here signup dialogue functiolity
  return localStorage.getItem("user") ? (
    <div>
      {/* this  navbar shows when user is login */}
      <CssBaseline />
      <AppBar position="static" color="inherit" className={classes.appBar}>
        <Toolbar>
          <Button
            style={{ width: "20%" }}
            size="small"
            onClick={() => history.push("/")}
            className={classes.title}
          >
            <Typography
              variant="h6"
              color="secondary"
              style={{ color: "hotpink" }}
              className={classes.titleTwo}
            >
              <img width="80px" src={logo} alt="" />
            </Typography>
          </Button>
          {/* 1 Box */}
         
          {user ? (
            <Button
              className={classes.resposive}
              onClick={logout}
              size="small"
              color="secondary"
              variant="contained"
            >
              Logout
            </Button>
          ) : (
            <Button
              size="small"
              style={{ backgroundColor: "whitesmoke", color: blue[900] }}
              onClick={() => setOpentwo(true)}
              color="secondary"
              variant="contained"
            >
              Register
            </Button>
          )}
          &nbsp;
          {user ? null : (
            <Button
              size="small"
              style={{ backgroundColor: "whitesmoke", color: blue[900] }}
              onClick={signIn}
            >
              Sign in
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  ) : (
    // here is our component that which is used without condition
    <div>
       <DrawerData opendrawer={opendrawer} setopendrawer={setopendrawer}/>

      {/*Start dialogue for sign in functionality */}
    <Container>
    <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <Toaster />
        <DialogTitle>
        <Typography
          variant="h4"
          color="primary"
        >
          Want to Login
        </Typography>
          <IconButton style={{ marginLeft:"260px",marginTop:"-70px" }} onClick={() => setOpen(false)}>
            <Close />
          </IconButton>
        </DialogTitle>
        
        <Divider />
        <DialogContentText>
          <div>
            <Container maxWidth="md">
              <Box mt={1} textAlign="center">
                <Box>
                  <AccountCircleIcon
                    style={{ color: pink[500], width: "50px", height: "50px" }}
                  />
                </Box>
                <Divider />
                <br />
                <Input
                  onChange={(e) =>
                    setstate({ ...state, email: e.target.value })
                  }
                  type="email"
                  endAdornment={
                    <IconButton><MailOutlineIcon color="primary" fontSize="small" /></IconButton>
                  }
                  placeholder="Enter Email"
                  
                  
                />
                <br />
                {showpass?<>
                  <Input
                  onChange={(e) =>
                    setstate({ ...state, password: e.target.value })
                  }
                  endAdornment={
                   <IconButton
                    onClick={()=>setshowpass(!showpass)}>
                   <VisibilityOffIcon color="primary" fontSize="small" /></IconButton>
                  }
                  type="password"
                  placeholder="Enter Password"
                />
                <br />
                <br />
                </>
                :
                <>
                <Input
                  onChange={(e) =>
                    setstate({ ...state, password: e.target.value })
                  }
                  endAdornment={
                   <IconButton
                    onClick={()=>setshowpass(!showpass)}>
                    
                   <Visibility color="primary" fontSize="small" /></IconButton>
                  }
                  type="text"
                  placeholder="Enter Password"
                />
                <br />
                <br />
                </>}
                {loading ? (
                  <Button
                    style={{ marginBottom: "10px" }}
                    color="primary"
                    variant="contained"
                    startIcon={<ClipLoader color="white" size="10" />}
                  >
                    Signing in...
                  </Button>
                ) : (
                  <Button
                    style={{ marginBottom: "10px" }}
                    color="primary"
                    variant="contained"
                    onClick={userSignsin}
                  >
                    Sign in
                  </Button>
                )}
                <br />
                <Typography variant="body1h1" color="initial">
                  Not Already have an account?
                </Typography>{" "}
                &nbsp;
                <Button
                  color="primary"
                  size="small"
                  variant="outlined"
                  style={{ marginBottom: "10px" }}
                  onClick={() => setOpentwo(true)}
                >
                  Sign up
                </Button>
              </Box>
            </Container>
          </div>
        </DialogContentText>
      </Dialog>
    </Container>
      {/* End functionality for sign in dialouge */}
      {/* Start signup dialogue functioality */}
      <Dialog
        onClose={handleCloseTwo}
        aria-labelledby="simple-dialog-title"
        open={opentwo}
      >
        <Toaster />
        <DialogTitle>
            <Typography
              variant="h4"
              color="primary"
            >
              Register
            </Typography>
         
          <IconButton
            style={{ marginLeft:"250px",marginTop:"-67px" }}
            onClick={() => setOpentwo(false)}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContentText>
          
          <Divider />

          <Container
            maxWidth="md"
            style={{ paddingLeft: "70px", paddingRight: "70px" }}
          >
            <Box mt={1} textAlign="center">
              <Box>
                <PersonAddIcon
                  style={{ color: pink[500], width: "50px", height: "50px" }}
                />
              </Box>
              <Divider />
              <br />

              <Input
                onChange={(e) =>
                  setstateS({ ...stateS, email: e.target.value })
                }
                endAdornment={
                  <IconButton><MailOutlineIcon color="primary" fontSize="small" /></IconButton>
                }
                type="email"
                placeholder="Enter Email"
              />
              <br />
              {showpassthree?<>
                <Input
                onChange={(e) =>
                  setstateS({ ...stateS, password: e.target.value })
                }
                endAdornment={
                 <IconButton onClick={()=>setshowpassthree(!showpassthree)}> <VisibilityOffIcon color="primary" 
                  

                 fontSize="small" /></IconButton>
                }
                type="password"
                placeholder="Confirm Password"
              />

             
              <br />
              </>:<><Input
              
                onChange={(e) =>
                  setstateS({ ...stateS, password: e.target.value })
                }
                endAdornment={
                 <IconButton  onClick={()=>setshowpassthree(!showpassthree)}> <Visibility color="primary" fontSize="small" /></IconButton>
                }
                type="text"
                placeholder="Confirm Password"
              />

             
              <br /></>}
              {showpasstwo?<>
                <Input
               
                onChange={(e) =>
                  setstateS({ ...stateS, cpassword: e.target.value })
                }
                endAdornment={
                 <IconButton  onClick={()=>setshowpasstwo(!showpasstwo)}> <VisibilityOffIcon color="primary" fontSize="small" /></IconButton>
                }
                type="password"
                placeholder="Confirm Password"
              />

              <br />
              <br />
              </>:<><Input
                onChange={(e) =>
                  setstateS({ ...stateS, cpassword: e.target.value })
                }
                endAdornment={
                 <IconButton onClick={()=>setshowpasstwo(!showpasstwo)}>
                 <Visibility color="primary" fontSize="small" /></IconButton>
                }
                type="text"
                placeholder="Confirm Password"
              />

              <br />
              <br /></>}
              {loadingS ? (
                <Button
                  style={{ marginBottom: "10px" }}
                  color="primary"
                  variant="contained"
                  startIcon={<ClipLoader color="white" size="10" />}
                >
                  Signing up...
                </Button>
              ) : (
                <Button
                  style={{ marginBottom: "10px" }}
                  color="primary"
                  variant="contained"
                  onClick={userSignsUp}
                >
                  Sign up
                </Button>
              )}
            </Box>
          </Container>
        </DialogContentText>
      </Dialog>
      {/* End signup dialogue functionity*/}
      <AppBar position="static" color="inherit" className={classes.appBar}>
        <Toolbar>
          <Button
            style={{ width: "20%" }}
            size="small"
            onClick={() => history.push("/")}
            className={classes.title}
          >
            <Typography
              variant="h6"
              color="secondary"
              style={{ color: "hotpink" }}
              className={classes.titleTwo}
            >
              <img width="80px" src={logo} alt="" />
            </Typography>
          </Button>
          {/* 1 Box */}
          <Hidden only={['xl','lg','md']}>
         <Box m={1}>
            <IconButton
             onClick={()=>setOpen(true)}
             style={{ marginRight: "-25px"}}
             className={classes.hover}>
              <AccountCircleOutlined  />
            </IconButton>
          </Box>
         </Hidden>

         <Hidden only={['xl','lg','md']}>
         <Box m={1}>
            <IconButton
             style={{ marginRight: "-25px"}}
             onClick={()=>setopendrawer(true)}
             className={classes.hover}>
              <Menu />
            </IconButton>
          </Box>
         </Hidden>

          {user ? (
            <Button
              onClick={logout}
              size="small"
              color="secondary"
              variant="contained"
              className={classes.hideLoginLogout}

            >
              Logout 
            </Button>
          ) : (
            <Button
              size="small"
              onClick={() => setOpentwo(true)}
              // color="secondary"
              variant="outlined"
              className={classes.hideLoginLogout}
            >
              Register
            </Button>
          )}
          &nbsp;
          {user ? null : (
            <Button
              // color="secondary"
              variant="outlined"
              size="small"
              className={classes.hideLoginLogout}
              onClick={() => setOpen(true)}
            >
              Sign in
            </Button>
        
          )}

        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
