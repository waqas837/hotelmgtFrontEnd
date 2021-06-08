import React, { useEffect, useState } from "react";
import { pink, grey } from "@material-ui/core/colors";
import logo from "../../images/logo.png";
import {url} from "../../Api/Api"
import {
  Update,
  Check,
  PersonAdd,
  MailOutline,
  VisibilityOff,
  Menu,
  Lock,
  Drafts,
  LockOpenTwoTone,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import {
  IconButton,
  Box,
  Grid,
  Paper,
  Container,
  Typography,
  Divider,
  Dialog,
  Button,
  Input,
  DialogContentText,
  DialogTitle,
  makeStyles,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import toast, { Toaster } from "react-hot-toast";
import AdminSignUp from "./AdminSignUp";
// import AddHotelManager from "./AddHotelManger/AddHotelManager";
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
  respMain:{
    [theme.breakpoints.down('sm')]:{
      width: "270%",
      marginLeft:"-35px",
      height:"300px",
      
    },
    [theme.breakpoints.up('sm')]:{
      width: "210%",
      height:"300px", 
    }
  },
  makeHeadingResp:{
    [theme.breakpoints.down('sm')]:{
      paddingLeft:"10px",
      paddingRight:"10px"
    }
  }
}));


const AdminLogin = ({setOpenAdmin}) => {
    const classes = useStyles();
    const history = useHistory();
    useEffect(() => {}, []);
    const admin = localStorage.getItem("admin");
    const [state, setstate] = useState([]);
    const [stateS, setstateS] = useState([]);
    const [loadingS, setloadingS] = useState(false);
    const [loading, setloading] = useState(false);
    const [opentwo, setOpentwo] = useState(false);
    const [openthree, setOpenthree] = useState(false);
    // this is for add hotel manager
    const [openfour, setopenfour] = useState(false);
    const [id, setid] = useState();
    const [update, setupdate] = useState();
    const [emailpattern, setemailpattern] = useState(true);
    const [opendrawer, setopendrawer] = useState(false);
    const [opendrawertwo, setopendrawertwo] = useState(false);
    const [statenew, setstatenew] = useState();
    // admin logout
  const logoutAdmin = () => {
    localStorage.removeItem("admin");
    window.location.reload();
  };
  // add a new user
  async function userSignsUp(e) {
    e.preventDefault();
    try {
      setloadingS(true);
      // if (stateS.email === undefined) {
      //   toast.error("Don't left any field empty");
      // }

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
        toast.success("New user Added");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      setloadingS(false);
      toast.error("All fields are mandatory to fill");
    }
  }
  // admin login
  const adminSignsIn = async () => {
    setloading(true);
    const { data } = await axios.post(
      `${url}/user/signinadmin`,
      statenew
    );
    setloading(false);
    if (data.success) {
      localStorage.setItem("admin", data.user);
      toast.success("Thanks for login");
      window.location.reload();
    }
    if (data.err) {
      toast.error("Invalid email or passoword");
    }
  };
    return (
        <div>
      {admin ? (
        <Typography
        variant="h5"
        color="secondary"
        style={{textAlign:"center"}}
        >welcome admin</Typography>
      ) : (
        <Container maxWidth="sm">
          <Grid container component={Box} my={3}>
            <Divider />

            <Grid container>
              <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                <Paper className={classes.respMain} elevation={5}>
                  <Box
                   className={classes.makeHeadingResp}
                   style={{ backgroundColor: "rgb(245,0,87)", height: "20%" }}
                  >
                    <Box >
                      <Typography
                        variant="h6"
                        style={{
                          color: "white",
                          textAlign: "center",
                          paddingTop: "10px",
                        }}
                      >
                        <Lock fontSize="small" /> Admin Login
                      </Typography>
                    </Box>
                  </Box>
                  <Box textAlign="center">
                    <Box mb={1}>
                      <br />
                      <Input
                        placeholder="Email"
                        onChange={(e) =>
                          setstatenew({ ...statenew, email: e.target.value })
                        }
                        type="email"
                        endAdornment={
                          <Drafts fontSize="small" color="primary" />
                        }
                      />
                    </Box>
                    <Box>
                      <Input
                        placeholder="Password"
                        type="password"
                        onChange={(e) =>
                          setstatenew({ ...statenew, password: e.target.value })
                        }
                        endAdornment={
                          <LockOpenTwoTone fontSize="small" color="primary" />
                        }
                      />
                    </Box>
                    <br />
                    <Box>
                      {loading ? (
                        <Button
                          variant="contained"
                           color="secondary"
                          style={{
                            width: "30%",
                            color: "white",
                          }}
                        >
                          ...
                        </Button>
                      ) : (
                        <Button
                          onClick={adminSignsIn}
                          variant="contained"
                          color="secondary"
                          style={{
                            width: "30%",
                            color: "white",
                          }}
                        >
                          Login
                        </Button>
                      )}
                    </Box>
                    <br />
                    Not already have an account?{" "}
                    <Button
                      size="small"
                      onClick={() => setOpenAdmin(true)}
                      color="secondary"
                      component={Box}
                      mt={1}
                      variant="outlined"
                    >
                      Sign up
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      )} 
        </div>
    )
}

export default AdminLogin
