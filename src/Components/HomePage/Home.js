import React, { useState } from "react";
import banner from "../../images/banner.jpg";
import { AccountBalance, ExpandMore} from "@material-ui/icons";
import {useHistory} from "react-router-dom"
import {
  Button,
  Grid,
  Typography,
  Container,
  Box,
  Divider,
  makeStyles,
  Dialog,
  DialogContentText,
  DialogTitle,
  IconButton,
  CssBaseline, ListItem, List, Paper, Input,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { AddLocation, Person, Remove, Add } from "@material-ui/icons";
import HomeTwo from "./HomeTwo";
import HomeThree from "./HomeThree";
import SaveTimeAndMoney from "./SaveTimeAndMoney";
import Footer from "./Footer";
const useStyles = makeStyles((theme) => ({
  resposive: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "right",
      marginLeft: "140px",
      width: "100%",
    },
  },
  resposiveShowCities: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "right",
      marginLeft: "180px",
    },
  },
  settingWidth: {
    width: "20%",
  },
}));

const Main = () => {
  const classes = useStyles();
  const [state, setState] = useState()
  const [cities, setcities] = useState([]);
  const [getCity, setgetCity] = useState([]);
  const [open, setOpen] = useState(false);
  const [adult, setadult] = useState(1);
  const [room, setroom] = useState(0);
  const [value, setValue] = useState(null);
  const [startdate, setstartdate] = useState('')
  const [enddate, setenddate] = useState('')
  const [ datelogic,setdatelogic ] = useState(null)
  const [ datelogictwo,setdatelogictwo ] = useState(null)
const history = useHistory()
  function search(e) {
    setcities(e.target.value);
    history.push("/searchresults")
    // fetchData();
  }
  function allCities(e) {
    setcities(e.target.value);
    fetchData();
  }
console.log(startdate);
console.log(enddate);

  const fetchData = async () => {
    try {
      const data = await fetch(`../../cities.json`);
      const jsonData = await data.json();
      const allCities = (jsonData.cities);
      const citiesData = allCities.map(val=>val.toLowerCase())
      setgetCity(citiesData)
      console.log(getCity); //we have all data we need
    } catch (error) {
      console.log(error);
    }
  };
 
// we have the   =>"cities"<= at onChange we can use it for the search purpose
// and we have all data inside the   =>"getCity"<=
// let filter out the data
var filterData = getCity.filter((val)=>val.match(cities));
console.log(filterData);
  function handleClose() {
    setOpen(false);
  }
  //showing up cities
  function selectOne(val) {
    setState(val)
  }
var today = new Date().toISOString().split('T')[0];

// document.getElementsByName("setTodaysDate")[0].setAttribute('min', today);
// display none
function displayNone() {
  return <Box display={{sm:"none",lg:"none",md:"none",xs:"none",xl:"none"}}></Box>
}
  //return is here
  return (
    <div>
    {/* <Toaster/> */}
      <CssBaseline />
      {/* notice out that we have to show dialogues,toasters in front of the components */}
      {/* search bar */}
      <Dialog open={open} onClose={handleClose}>
        <Container style={{ width: "400px" }}>
          <DialogTitle>Choose Your Requirements</DialogTitle>

          <DialogContentText>
            {/* adults */}
            <Grid>
              <Grid container style={{ display: "flex" }}>
                <Typography style={{ flexGrow: "1" }}> Adults</Typography>
                <Box style={{ marginBottom: "20px" }}>
                  {adult === 0 ? (
                    <IconButton
                      disabled
                      style={{ border: "1px solid grey", borderRadius: "0px" }}
                    >
                      <Remove style={{ fontSize: "15px" }} />
                    </IconButton>
                  ) : (
                    <IconButton
                      onClick={() => setadult(adult - 1)}
                      style={{ border: "1px solid grey", borderRadius: "0px" }}
                    >
                      <Remove style={{ fontSize: "15px" }} />
                    </IconButton>
                  )}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {adult}&nbsp;&nbsp;&nbsp;&nbsp;
                  <IconButton
                    onClick={() => setadult(adult + 1)}
                    style={{ border: "1px solid grey", borderRadius: "0px" }}
                  >
                    <Add style={{ fontSize: "15px" }} />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>

            {/* Rooms */}

            <Grid style={{ display: "flex" }}>
              <Grid container component={Box}>
                <Typography style={{ flexGrow: "1" }}> Rooms</Typography>

                <Box>
                  {room === 0 ? (
                    <IconButton
                      disabled
                      style={{ border: "1px solid grey", borderRadius: "0px" }}
                    >
                      <Remove style={{ fontSize: "15px" }} />
                    </IconButton>
                  ) : (
                    <IconButton
                      onClick={() => setroom(room - 1)}
                      style={{ border: "1px solid grey", borderRadius: "0px" }}
                    >
                      <Remove style={{ fontSize: "15px" }} />
                    </IconButton>
                  )}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {room}&nbsp;&nbsp;&nbsp;&nbsp;
                  <IconButton
                    onClick={() => setroom(room + 1)}
                    style={{ border: "1px solid grey", borderRadius: "0px" }}
                  >
                    <Add style={{ fontSize: "15px" }} />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </DialogContentText>
        </Container>
      </Dialog>
      <Box
        style={{ background: grey[200], padding: "30px", marginBottom: "10px" }}
      >
        <Typography variant="h5" color="primary">
          Find deals on hotels, homes, and much more...
        </Typography>
        <Typography
          variant="body2"
          style={{ color: "grey", fontWeight: "lighter" }}
        >
          From cozy country homes to funky city apartments
        </Typography>
        <br />
        {/* location choose*/}
        <Grid container>
          <Grid item>
          <input
           type="text"
           placeholder="Choose a Location"
           onChange={allCities}
           defaultValue={state}
           style={{
                backgroundColor: "white",
                border: "1px solid red",
                paddingTop:"12px",
                paddingBottom:"12px",
                borderRadius: "0px",
                width:"200px",
                fontWeight:"bold"
              }}
             
         />
          </Grid>
          <Grid item>
        
         {/*Date Range*/}
         {/* check in */}
         { !datelogic?
          <input
           type="text"
           placeholder="Check-in"
           onClick={()=>setdatelogic(true)}
           style={{
                textTransform: "capitalize",
                backgroundColor: "white",
                border: "1px solid red",
                paddingTop:"11px",
                paddingBottom:"11px",
                borderRadius: "0px",
                fontSize:"15px",
                fontWeight:"bold"
              }}
             
         />
         :
         <input
           type="date"
           onMouseOut={()=>setdatelogic(false)}
           defaultValue={startdate}
           min={today}
           style={{
                textTransform: "capitalize",
                backgroundColor: "white",
                border: "1px solid red",
                paddingTop:"9px",
                paddingBottom:"9px",
                borderRadius: "0px",
                width:"210px",
                fontSize:"15px",
                fontWeight:"bold"
              }}
              onChange={(e)=>{setstartdate(e.target.value)}}
         />
        
        }
        {/* Check out */}
        { !datelogictwo?
          <input
           type="text"
            placeholder="Check-Out"
            onClick={()=>setdatelogictwo(true)}
           style={{
                textTransform: "capitalize",
                backgroundColor: "white",
                border: "1px solid red",
                paddingTop:"11px",
                paddingBottom:"11px",
                borderRadius: "0px",
                fontSize:"15px",
                fontWeight:"bold"
              }}
             
         />
         :
         <input
           type="date"
           onMouseOut={()=>setdatelogictwo(false)}
           min={today}
           defaultValue={enddate}
           style={{
                textTransform: "capitalize",
                backgroundColor: "white",
                border: "1px solid red",
                paddingTop:"9px",
                width:"210px",
                paddingBottom:"9px",
                borderRadius: "0px",
                fontSize:"15px",
                fontWeight:"bold"
              }}
              onChange={(e)=>{setstartdate(e.target.value)}}
         />
        }
         
          </Grid>
          <Grid item>
            <Button
              size="large"
              variant="outlined"
              style={{
                textTransform: "capitalize",
                backgroundColor: "white",
                border: "1px solid red",
                borderRadius: "0px",
              }}
              onClick={() => setOpen(true)}
            >
              <Person fontSize="small" />
              {adult} Adult &nbsp;
              <AccountBalance fontSize="small" /> &nbsp;{room} Rooms &nbsp;
              <ExpandMore fontSize="small" />
            </Button>
          </Grid>

          <Grid item>
            <Button
              // className={classes.resposive}
              color="secondary"
              size="large"
              variant="contained"
              onClick={search}
            >
              Search
            </Button>
          </Grid>
        </Grid>
        {state ? (
          <Container
            maxWidth="xs"
            style={{ marginLeft: "-50px", width: "60%" }}
          ><Typography variant="body2"
          style={{textAlign:"center"}}
           ><AddLocation color="secondary" /> {state} {startdate} to {enddate} </Typography></Container>
        ) : (
          <Typography variant="subtitle2" color="primary">
            No Location selected
          </Typography>
        )}
       
        <Paper style={{maxHeight: 200, overflow: 'auto', width:"300px"}}
         onClick={()=>displayNone()}>
        {filterData.map((val, ind) => (
          <>
            
            
              <List
                // className={classes.resposiveShowCities}
                style={{ width: "80%"}}
                key={ind}
                button
                onClick={() => selectOne(val)}
              >
              {/* we are showing here location */}
               <ListItem button> <AddLocation color="secondary" /> {val===undefined?null:val}</ListItem>
              </List>
        
              <Divider />
           
          </>
        ))}
        </Paper>
      </Box>
      <Divider /> <Divider />
      {/* Banner */}
      <Box style={{ border: "1px solid grey" ,marginBottom:"20px"}}>
      <img src={banner} alt="" width="100%" height="450px"/> 
      </Box>
      {/* we are showing some components also here */}
   
      <Box>
        <HomeTwo/>
        <Divider/>
      </Box>
      <Divider/>
      <Box>
        <HomeThree/> 
      </Box>
    
      <Divider/>
      <Box>
        <SaveTimeAndMoney/> 
      </Box>
      <Box>
        <Footer/>
      </Box>
    </div>
  );
};

export default Main;
