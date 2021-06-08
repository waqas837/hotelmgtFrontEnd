import React, { useEffect, useState } from "react";
import { pink, grey } from "@material-ui/core/colors";
import logo from "../../../images/logo.png";
import {
  Update,
  Check,
  HelpOutline,
  LockOutlined,
  AddOutlined,
  PersonAdd,
  MailOutline,
  VisibilityOff,
  Menu,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import {url} from "../../../Api/Api"
import {
  IconButton,
  Box,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
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
import { Edit, Delete, Close } from "@material-ui/icons";
import toast, { Toaster } from "react-hot-toast";
import DrawerData from "../DrawerData";
import AddHotelManager from "./AddHotelManager";
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
}));

const ShowHotelMgrs = () => {
  const classes = useStyles();
  const history = useHistory();
  useEffect(() => {
    getData();
  }, []);
  const [state, setstate] = useState([]);
  const [stateS, setstateS] = useState([]);
  const [loadingS, setloadingS] = useState(false);
  const [opentwo, setOpentwo] = useState(false);
  const [openthree, setOpenthree] = useState(false);
  // this is for add hotel manager
  const [openfour, setopenfour] = useState(false);
  const [id, setid] = useState();
  const [update, setupdate] = useState();
  const [emailpattern, setemailpattern] = useState(true);
  const [opendrawer, setopendrawer] = useState(false);
  const [opendrawertwo, setopendrawertwo] = useState(false);
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
  // getall data
  //notice that data which is coming from the backend is always inside an object
  //show full list data get
  const getData = async () => {
    const { data } = await axios.get(
      `${url}/user/getAllHotelManagers`
    );
    setstate(data.data);
  };
  //   array of an object
  function handleCloseTwo() {
    setOpentwo(false);
  }
  async function edit(id) {
    setOpentwo(true);
    setid(id);
    const { data } = await axios.get(
      `${url}/user/findSingleManager/${id}`
    );
    // console.log(data.data);
    const totalData = data.data;
    setupdate(totalData);
  }
  // UPDATE User
  async function updateUser() {
    setloadingS(true);
    const { data } = await axios.put(
      `${url}/user/udpateManagers/${id}`,
      stateS
    );
    const userConfirmed = data.data.email;
    if (userConfirmed) {
      toast.success("User updated succeed");
      setloadingS(false);
      window.location.reload();
    }
  }

  //DELETE USER
  async function delet(id) {
    const { data } = await axios.delete(
      `${url}/user/deleteManagers/${id}`
    );
    console.log(data.success);
    if (data.success) {
      toast.success("User deleted");
      localStorage.removeItem("user");
      window.location.reload();
    }
  }
  return (
    <div>
      <Toaster />
      <DrawerData opendrawer={opendrawer} setopendrawer={setopendrawer} />
      {/* add the hotel manager */}
      <AddHotelManager openfour={openfour} setopenfour={setopenfour} />
      {/* navbar */}
      <AppBar position="static" color="inherit">
        <Toolbar>
          {/* menu icon button */}
          <IconButton color="secondary" onClick={() => setopendrawer(true)}>
            <Menu color="secondary" />
          </IconButton>
          {/* logo */}
          <Button
            style={{ width: "10%" }}
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
        </Toolbar>
      </AppBar>
      {/* Add new user by admin dialgue */}
      <Dialog
        onClose={() => setOpenthree(false)}
        aria-labelledby="simple-dialog-title"
        open={openthree}
      >
        <Toaster />
        <DialogTitle>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{marginBottom:"-40px"}}>
          <Typography
              variant="h4"
              color="primary"
              style={{ textAlign: "left" }}
            >
              Register
            </Typography>
          <IconButton
          style={{ marginLeft:"250px",marginTop:"-72px" }}
            onClick={() => setOpenthree(false)}
          >
            <Close fontSize="small"/>
          </IconButton>
          </Grid>
        </Grid>
        </DialogTitle>
        <DialogContentText>
         
            
       
          <Divider />

          <Container
            maxWidth="md"
            style={{ paddingLeft: "70px", paddingRight: "70px" }}
          >
            <Box mt={1} textAlign="center">
              <Box>
                <PersonAdd
                  style={{ color: pink[500], width: "50px", height: "50px" }}
                />
              </Box>
              <Divider />
              <br />

              <Input
                onChange={(e) =>
                  setstateS({ ...stateS, email: e.target.value })
                }
                endAdornment={<MailOutline color="primary" fontSize="small" />}
                type="email"
                placeholder="Enter Email"
                style={{ marginBottom: "10px" }}
                required="true"
              />
              <br />
              <Input
                onChange={(e) =>
                  setstateS({ ...stateS, password: e.target.value })
                }
                endAdornment={
                  <VisibilityOff color="primary" fontSize="small" />
                }
                type="password"
                placeholder="Enter Password"
                style={{ marginBottom: "10px" }}
                required="true"
              />
              <br />
              <Input
                onChange={(e) =>
                  setstateS({ ...stateS, cpassword: e.target.value })
                }
                endAdornment={
                  <VisibilityOff color="primary" fontSize="small" />
                }
                type="password"
                placeholder="Confirm Password"
              />

              <br />
              <br />
              {loadingS ? (
                <Box>
                  <ClipLoader color="blue" />
                </Box>
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

      {/* update a user dialouge */}
      <Dialog
        onClose={handleCloseTwo}
        aria-labelledby="simple-dialog-title"
        open={opentwo}
      >
        <Toaster />
        <DialogTitle>
          <IconButton
            style={{ padding: "0px" }}
            onClick={() => setOpentwo(false)}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContentText>
          <Box mb={1} mt={1}>
            <Typography
              variant="h4"
              color="primary"
              style={{ textAlign: "center" }}
            >
              Update Managers Record
            </Typography>
          </Box>
          <Divider />

          <Container
            maxWidth="md"
            style={{ paddingLeft: "70px", paddingRight: "70px" }}
          >
            <Box mt={1} textAlign="center">
              <Box>
                <Update
                  style={{ color: pink[440], width: "50px", height: "50px" }}
                />
              </Box>
              <Divider />
              <br />

              {update === undefined ? (
                <ClipLoader />
              ) : (
                <>
                  <Input
                    onChange={(e) =>
                      setstateS({ ...stateS, hotelName: e.target.value })
                    }
                    type="text"
                    placeholder="Update Hotel Name"
                    style={{ marginBottom: "10px" }}
                    defaultValue={update.hotelName}
                    required="true"
                  />
                  <br />
                  <Input
                    onChange={(e) =>
                      setstateS({ ...stateS, hotelLocation: e.target.value })
                    }
                    type="email"
                    placeholder="Update Location"
                    style={{ marginBottom: "10px" }}
                    defaultValue={update.hotelLocation}
                    required="true"
                  />
                  <br />
                  <Input
                    onChange={(e) =>
                      setstateS({ ...stateS, email: e.target.value })
                    }
                    type="email"
                    placeholder="Update Email"
                    style={{ marginBottom: "10px" }}
                    defaultValue={update.email}
                    required="true"
                  />
                  <br />
                  <Input
                    onChange={(e) =>
                      setstateS({ ...stateS, password: e.target.value })
                    }
                    defaultValue={update.password}
                    type="password"
                    placeholder="Update Confirm Password"
                  />
                </>
              )}

              <br />
              <br />
              {loadingS ? (
                <Box>
                  <ClipLoader color="blue" />
                </Box>
              ) : (
                <Button
                  style={{ marginBottom: "10px" }}
                  color="primary"
                  variant="contained"
                  onClick={updateUser}
                >
                  <Check /> Update User
                </Button>
              )}
            </Box>
          </Container>
        </DialogContentText>
      </Dialog>
      <Container maxWidth="lg">
        <Grid container component={Box} ml={1} mt={3} textAlign="center">
          {/* colomn1 */}
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <Typography variant="h4" component={Box}>
              Hotel Managers Panel
            </Typography>
          </Grid>

          {/* colomn3 */}
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <Button
              style={{ height: "37px", fontSize: "10px", marginLeft: "60px" }}
              onClick={() => setopenfour(true)}
              size="small"
              color="secondary"
              variant="contained"
            >
              <AddOutlined fontSize="small" />
              Add Hotel Manager
            </Button>
          </Grid>

          <Divider />
        </Grid>
      </Container>
      <Container style={{ width: "100%" }}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead style={{ background: grey[900] }}>
              <TableRow>
                <TableCell
                  style={{ fontWeight: "bolder", color: "whitesmoke" }}
                >
                  ID
                </TableCell>
                <TableCell
                  style={{ fontWeight: "bolder", color: "whitesmoke" }}
                  align="center"
                >
                  Hotel Name
                </TableCell>
                <TableCell
                  style={{ fontWeight: "bolder", color: "whitesmoke" }}
                  align="center"
                >
                  Hotel Location
                </TableCell>
                <TableCell
                  style={{ fontWeight: "bolder", color: "whitesmoke" }}
                  align="center"
                >
                  Email
                </TableCell>
                <TableCell
                  style={{ fontWeight: "bolder", color: "whitesmoke" }}
                  align="center"
                >
                  Password
                </TableCell>
                <TableCell
                  style={{ fontWeight: "bolder", color: "whitesmoke" }}
                  align="center"
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.map((row) => (
                <TableRow>
                  <TableCell>{row._id}</TableCell>
                  <TableCell align="center">{row.hotelName}</TableCell>
                  <TableCell align="center">{row.hotelLocation}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.password}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => edit(row._id)}>
                      <Edit color="primary" />
                    </IconButton>
                    <IconButton onClick={() => delet(row._id)}>
                      <Delete color="secondary" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default ShowHotelMgrs;
