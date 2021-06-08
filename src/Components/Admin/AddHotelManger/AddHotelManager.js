import React, { useEffect, useState } from "react";
import { pink, grey } from "@material-ui/core/colors";
import logo from "../../../images/logo.png";
import {url} from "../../../Api/Api"
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
  EmojiPeople,
  Hotel,
  Email,
  CheckCircleOutline,
  AddLocationOutlined,
} from "@material-ui/icons";
import { ClipLoader } from "react-spinners";
import axios from "axios";
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
  Tooltip,
} from "@material-ui/core";
import { Edit, Delete, Close } from "@material-ui/icons";
import toast, { Toaster } from "react-hot-toast";
import DrawerData from "../DrawerData";
import AutogeneratePass from "../AutogeneratePass";
const AddHotelManager = ({ openfour, setopenfour }) => {
  const [stateSS, setstateSS] = useState();
  const [loadingSS, setloadingSS] = useState();
  const [emailpatterntwo, setemailpatterntwo] = useState(true);


  //   let add the hotel manager into our database
  async function addHotelMgr() {
   
   try {
      setloadingSS(true)
      if (stateSS === undefined) {
        toast.error("Don't left any field empty");
      }
      const {data} = await axios.post(
    `${url}/user/addHotelManager`,
    stateSS
  );
window.location.reload()
  setloadingSS(false);
  if (data.code) {
    toast.error("User already exists try different one");
    setloadingSS(false);
  }
  if (data.name === "ValidationError") {
    setemailpatterntwo(false);
    toast.error("Put a valid email");
    setloadingSS(false);
  }


   } catch (error) {
     console.log(error)
   }
  
  }
  return (
    <div>
      <Dialog
        onClose={() => setopenfour(false)}
        aria-labelledby="simple-dialog-title"
        open={openfour}
      >
        <Toaster />
        <DialogTitle>
       <Grid container>
         <Grid xs={12} sm={12} md={12} lg={12} xl={12} style={{marginBottom:"-40px"}}>
         <Typography
              variant="h5"
              color="primary"
              style={{ textAlign: "left" }}
            >
              Add Hotel Manager
            </Typography>
          <IconButton
        style={{ marginLeft:"250px",marginTop:"-72px" }}  
           onClick={() => setopenfour(false)}
          >
            <Close fontSize="small"/>
          </IconButton>
         </Grid>
       </Grid>
        </DialogTitle>
        <DialogContentText>
      
            
    
          <Divider />

          <Container
            maxWidth="lg"
            style={{ paddingLeft: "70px", paddingRight: "70px" }}
          >
            <Box mt={1} textAlign="center">
              <Box>
                <EmojiPeople
                  style={{ color: pink[500], width: "50px", height: "50px" }}
                />
              </Box>
              <Divider />
              <br />
              {/* hotel name */}
              <Input
                onChange={(e) =>
                  setstateSS({ ...stateSS, hotelName: e.target.value })
                }
                endAdornment={<Hotel color="primary" fontSize="small" />}
                type="email"
                placeholder="Enter Hotel Name"
                style={{ marginBottom: "10px" }}
                required="true"
              />
              <br />
              {/* hotel Location */}
              <Input
                onChange={(e) =>
                  setstateSS({ ...stateSS, hotelLocation: e.target.value })
                }
                endAdornment={
                  <AddLocationOutlined color="primary" fontSize="small" />
                }
                type="email"
                placeholder="Enter Hotel Location"
                style={{ marginBottom: "10px" }}
                required="true"
              />
              <br />
              <Input
                onChange={(e) =>
                  setstateSS({ ...stateSS, email: e.target.value })
                }
                endAdornment={<Email color="primary" fontSize="small" />}
                type="email"
                placeholder="Enter Your Email"
                style={{ marginBottom: "10px" }}
                required="true"
              />
              <br />
              <Tooltip title="Please copy the auto generated password">
                <Input
                  onChange={(e) =>
                    setstateSS({ ...stateSS, password: e.target.value })
                  }
                  endAdornment={
                    <VisibilityOff color="primary" fontSize="small" />
                  }
                  type="password"
                  placeholder="Enter Below Password"
                />
              </Tooltip>

              <Tooltip title="Please copy this auto generated password">
                <Box maxWidth={3} textOverflow="Hidden">
                  <AutogeneratePass />
                </Box>
              </Tooltip>

              {loadingSS ? (
                
                <Button
                  style={{ marginBottom: "10px" }}
                  startIcon={ <ClipLoader color="white" size="10"/>}
                  color="secondary"
                  variant="contained"
                >Add Manager</Button>
                 
               
              ) : (
                <Button
                  style={{ marginBottom: "10px" }}
                  startIcon={<CheckCircleOutline />}
                  color="secondary"
                  variant="contained"
                  onClick={addHotelMgr}
                >
                  Add Manager
                </Button>
              )}
            </Box>
          </Container>
        </DialogContentText>
      </Dialog>
    </div>
  );
};

export default AddHotelManager;
