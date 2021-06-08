import React, { useState, useEffect } from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {url} from "../../Api/Api"
import {
  Box,
  Input,
  Typography,
  Button,
  Divider,
  Container,
  Paper,
} from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { pink } from "@material-ui/core/colors";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";
//component starts here
const Signup = () => {
  const user = localStorage.getItem("user");
  useEffect(() => {
    if (user) {
      history.push("/userDashboard");
    }
  }, []);
  const [stateS, setstateS] = useState();
  const [loadingS, setloadingS] = useState(false);
  const [emailpattern, setemailpattern] = useState(true);
  const history = useHistory();
  // console.log(user);
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
        window.location.reload();
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
  return (
    <div>
      <Toaster />
      <Container maxWidth="sm">
        <Paper elevation={5}>
          <Box mt={5} textAlign="center">
            <Box>
              <PersonAddIcon
                style={{ color: pink[500], width: "50px", height: "50px" }}
              />
            </Box>
            <Typography variant="h4" color="primary">
              Sign Up ..
            </Typography>
            <Divider />
            <br />

            <Input
              onChange={(e) => setstateS({ ...stateS, email: e.target.value })}
              endAdornment={<MailOutlineIcon color="primary" />}
              type="email"
              placeholder="Enter Email"
              style={{ marginBottom: "10px" }}
            />
            <br />
            <Input
              onChange={(e) => setstateS({ ...stateS, password: e.target.value })}
              endAdornment={<VisibilityOffIcon color="primary" />}
              type="password"
              placeholder="Enter Password"
              style={{ marginBottom: "10px" }}
            />
            <br />
            <Input
              onChange={(e) =>
                setstateS({ ...stateS, cpassword: e.target.value })
              }
              endAdornment={<VisibilityOffIcon color="primary" />}
              type="password"
              placeholder="Confirm Password"
            />

            <br />
            <br />
            {loadingS ? (
              <Button
                style={{ marginBottom: "10px" }}
                color="primary"
                variant="contained"
               startIcon={<ClipLoader color="white" size="10"/>}
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
        </Paper>
      </Container>
    </div>
  );
};

export default Signup;
