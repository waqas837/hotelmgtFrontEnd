import React,{useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Filebase from "react-file-base64"
import Box from '@material-ui/core/Box';
import Navbar from "../Navbar/Navbar"
import { Container, Grid, Paper,  OutlinedInput, Select, MenuItem, FormControl, InputLabel, makeStyles, CssBaseline, Button, Hidden, ButtonGroup, Radio, Checkbox, Divider, Input } from "@material-ui/core";
import {  AddComment, AddRounded, Done, InputOutlined, ListAlt, Person, RadioButtonCheckedRounded} from '@material-ui/icons';
import MuiPhoneInput from "material-ui-phone-number"
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  hover:{
    "&:hover":{
      border:"2px solid blue",
    }
  },
  makeFieldsResponsive:{
    [theme.breakpoints.down('xs')]:{
      width:"100%"
    },
    [theme.breakpoints.up('sm')]:{
      width:"400px"
    }
  },
  makeSecondFeiledResponsive:{
    [theme.breakpoints.down('xs')]:{
      width:"100%"
    },
    [theme.breakpoints.up('sm')]:{
      width:"300px",
      height:"42px"
    },
  },
  makeMargin:{
    [theme.breakpoints.down('xs')]:{
      marginBottom:"10px"
    }
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  border:{
    borderRadius:"0px"
  },
  borderForImg:{
    border:"2px dashed grey"
  }
 
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // functions for first radio buttons yes or no
  function yes(e) {
    setselection(e.target.value)
    if(e.target.value==="yes"){
      setbasicInfo({...basicInfo,doyouwantmultiplehotels:e.target.value})
    }
  }
    // functions for first radio buttons yes or no
  function no(e) {
    setselection(e.target.value)
    if(e.target.value==="no"){
      setbasicInfo({...basicInfo,doyouwantmultiplehotels:e.target.value})
    }
  }
 // functions for first radio buttons yes or no
 function use(e) {
  setusemanager(e.target.value)
  if(e.target.value==="i use channel"){
    setbasicInfo({...basicInfo,doyouusechannel:e.target.value})
  }
}
  // functions for first radio buttons yes or no
function nouse(e) {
  setusemanager(e.target.value)
  if(e.target.value==="i not use channel"){
    setbasicInfo({...basicInfo,doyouusechannel:e.target.value})
  }
}
  const [ basicInfo, setbasicInfo ] = useState()
  const [ selection, setselection  ] = useState("yes")
  const [ usemanager, setusemanager] = useState("i use channel")
  console.log(basicInfo);
  return (
    <div className={classes.root}>
    <Navbar/>
      <AppBar position="static" style={{marginTop:"-10px"}}>
        <Tabs value={value} onChange={handleChange} 
         scrollButtons="on"
         variant="scrollable">
          <Tab label="Basic info"  {...a11yProps(0)} />
          <Tab label="Layout and Pricing" {...a11yProps(1)} />
          <Tab label="Fascilities and services " {...a11yProps(2)} />
          <Tab label="Photos" {...a11yProps(3)} />
          <Tab label="Policies" {...a11yProps(4)} />
          <Tab label="Payments" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <CssBaseline/>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} component={Box}>
          <Container maxWidth="md">
            {/* heading */}
            <Box my={2} ml={1}>
            <Typography variant="h4" color="initial">
              Welcome User!
            </Typography>
            <Typography variant="subtitle2" color="initial" >
              Start telling us about your property's name,contact,details
              address
            </Typography>
            </Box>
            {/* functionality one */}
            <Paper component={Box} p={4}
             className={classes.hover}
             style={{borderRadius:"5px",width:"100%"}}>
              <Typography variant="h5" style={{fontWeight:"lighter",marginTop:"-30px",marginBottom:"10px"}}>
               What's the name of your property?
              </Typography>
  <OutlinedInput
  onChange={(e)=>setbasicInfo({...basicInfo,propertyname:e.target.value})}
  className={classes.makeFieldsResponsive}
  style={{height:"40px"}}
  endAdornment={<ListAlt size="small"/>}
  />
  <Typography variant="subtitle2" color="initial">
    Guests will see this name when they search for a place to stay.
  </Typography>
  <Typography variant="subtitle2" color="initial">
   Star ratings
  </Typography>
  <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">N/A</InputLabel>
        <Select
          onChange={(e)=>setbasicInfo({...basicInfo,startrating:e.target.value})}
          className={classes.makeSecondFeiledResponsive}
          style={{height:"50px",marginLeft:"-10px"}}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
            </Paper>
          </Container>
        </Grid>
      </Grid>
      {/* second line */}
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
      <Container maxWidth="md" >
<Paper  className={classes.hover} component={Box} mt={1} p={4} style={{borderRadius:"5px",width:"100%"}}>
<Typography variant="h5">What are the contact details for property?</Typography>
<Box mt={1}>
<Typography variant="body2">Contact name</Typography>
<OutlinedInput
  onChange={(e)=>setbasicInfo({...basicInfo,contactname:e.target.value})}
placeholder="Enter name"
className={classes.makeSecondFeiledResponsive}
/>
</Box>
{/* logic point+visibility=> will be hidden+not included the given point
so for avoid the complexity we must use the only prop for the hidden component makes easy 
 */}
<Hidden only={['xs','sm']}>
<Box mt={1}>
<Typography variant="body2">Contact number(so we can assist you with registeration when needed )</Typography>
</Box>
<Box display="flex" mt={1}>
<Box mr={20}><Typography variant="body2">Phone number</Typography>

  <MuiPhoneInput
  onChange={(e)=>setbasicInfo({...basicInfo,phone:e})}
  defaultCountry='pk'
  style={{border:"1px solid black"}}
/>
</Box>
<Box>
<Typography variant="body2">Alternative Phone number</Typography>
<MuiPhoneInput
  onChange={(e)=>setbasicInfo({...basicInfo,activephone:e})}
  defaultCountry='pk'
  style={{border:"1px solid black"}}
/>
</Box>
</Box>
</Hidden>
{/* 2nd */}
{/* hide all upto small screens not included the given point so our one point always miss:so in our case is only small*/}
<Hidden only={['md','lg','xl']}>
<Box mt={1}>
<Typography variant="body2">Contact number(so we can assist you with registeration when needed )</Typography>
</Box>
<Box mt={1}>
<Box ><Typography variant="body2">Phone number</Typography>

  <MuiPhoneInput
  defaultCountry='pk'
  style={{border:"1px solid black"}}
  onChange={(e)=>setbasicInfo({...basicInfo,phone:e})}

/>
</Box>
<Box>
<Typography variant="body2">Alternative Phone number</Typography>
<MuiPhoneInput
  onChange={(e)=>setbasicInfo({...basicInfo,activephone:e})}
  defaultCountry='pk'
  style={{border:"1px solid black"}}
/>
</Box>
</Box>
</Hidden>
<Box>
  <Typography variant="body2">
Do you own multiple hotels, are you part of multiple properties
  </Typography>
</Box>
<Button
 size="small"
 style={{fontSize:"15px"}}
 startIcon={<Radio value="yes" onChange={yes} checked={selection==="yes"} color="primary" size="small"/>}
 variant="outlined">Yes</Button> &nbsp;&nbsp; 
<Button
size="small"
style={{fontSize:"15px"}}
startIcon={<Radio value="no" onChange={no} checked={selection==="no"} size="small" color="primary"/>}
variant="outlined">No</Button>
</Paper>
     </Container>
        </Grid>
      </Grid>
      {/* 3rd line section */}
      <Grid container> 
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
<Container maxWidth="md">
<Paper  className={classes.hover}  component={Box} mt={1} p={4} style={{borderRadius:"5px",width:"100%"}}>
<Box mt={1}><Typography variant="h5">Do you use the a channel manager?</Typography></Box>
<Box mt={2}><Typography variant="subtitle2" alignJustify>
A channel manager is a tool that lets you choose what you sell across all the
differnt sites you list your place on.
Lorem ipsum dolor, A channel manager is a tool that lets you choose what you sell across all the
differnt sites you list your place on.
Lorem ipsum dolor, sit amet sit amet consectetur adipisicing elit. Numquam iure dignissimos deleniti vitae velit quia cumque eveniet fugit veritatis doloremque, ut quas.
</Typography></Box>
<Box mt={2}>
<Button
 onClick={use}
 className={classes.makeMargin} variant="outlined"
 startIcon={<Radio value="i use channel" onChange={use} checked={usemanager==="i use channel"} color="primary" size="small"/>}
 >I use a channel manager</Button> &nbsp; &nbsp;
<Button  onClick={nouse} variant="outlined"
startIcon={<Radio value="i not use channel" onChange={nouse} checked={usemanager==="i not use channel"} color="primary" size="small"/>}
 
 >I don't use a channel manager</Button>
</Box>
</Paper>
</Container>
        </Grid>
      </Grid>
       {/* 4rd line section */}
       <Grid container> 
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
<Container maxWidth="md">
<Paper  className={classes.hover}  component={Box} mt={1} p={4} style={{borderRadius:"5px",width:"100%"}}>
<Box mt={1}><Typography variant="h5">Where your property is located?</Typography></Box>
<Box mt={1}><Typography variant="body2">Street address</Typography></Box>
<Box mt={1}><OutlinedInput
  onChange={(e)=>setbasicInfo({...basicInfo,streetaddress:e.target.value})}

  placeholder="e.g 123 easy street"
  className={classes.makeSecondFeiledResponsive}
/></Box>

<Box mt={1}><Typography variant="body2">Adress line 2</Typography></Box>
<Box mt={1}><OutlinedInput
  onChange={(e)=>setbasicInfo({...basicInfo,addressline2:e.target.value})}

  placeholder="e.g 123 easy street"
  className={classes.makeSecondFeiledResponsive}
/></Box>

<Box mt={1}><Typography variant="body2">Country/Region</Typography></Box>
<Box mt={1}><OutlinedInput
    onChange={(e)=>setbasicInfo({...basicInfo,country:e.target.value})}

  placeholder="e.g Pakistan"
  className={classes.makeSecondFeiledResponsive}
/></Box>

<Box mt={1}><Typography variant="body2">City</Typography></Box>
<Box mt={1}><OutlinedInput
  onChange={(e)=>setbasicInfo({...basicInfo,city:e.target.value})}

  placeholder="e.g Karachi"
  className={classes.makeSecondFeiledResponsive}
/></Box>
<Box mt={1}><Typography variant="body2">ZIp code</Typography></Box>
<Box mt={1}><OutlinedInput
   onChange={(e)=>setbasicInfo({...basicInfo,zipcode:e.target.value})}

 style={{width:"150px",height:"42px"}}
/></Box>
<Box my={1}>
<Button
variant="contained"
fullWidth
color="primary"
style={{borderRadius:"0px"}}
>Continue</Button>
</Box>
</Paper>
</Container>
        </Grid>
      </Grid>
      </TabPanel>
      {/* first panel end */}

      {/* second panel start */}
      <TabPanel value={value} index={1}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} component={Box}>
          <Container maxWidth="md">
            {/* heading */}
            <Box my={2} ml={1}>
            <Typography variant="h4" color="initial">
             Layout & Pricing
            </Typography>
            <Typography variant="subtitle2" color="initial" >
            After you complete registration you'll be able to make changes to your listing before it goes live.
            </Typography>
            </Box>
            {/* functionality one */}
            <Paper component={Box} p={4}
             className={classes.hover}
             style={{borderRadius:"5px",width:"100%"}}>
              <Typography variant="h6" style={{fontWeight:"lighter",marginTop:"-30px",marginBottom:"10px"}}>
              Please select
              </Typography>
              <Typography variant="body1" style={{fontWeight:"lighter",marginBottom:"10px"}}>
              Room Type
              </Typography>
              <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Please select</InputLabel>
        <Select
         className={classes.makeSecondFeiledResponsive}
          style={{height:"50px",marginLeft:"-10px"}}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Single</MenuItem>
          <MenuItem value={20}>Double</MenuItem>
          <MenuItem value={30}>Twin</MenuItem>
          <MenuItem value={30}>Twin/Double</MenuItem>
          <MenuItem value={30}>Tripple</MenuItem>
          <MenuItem value={30}>Quad</MenuItem>
          <MenuItem value={30}>Family</MenuItem>
          <MenuItem value={30}>Suit</MenuItem>
          <MenuItem value={30}>Studio</MenuItem>
          <MenuItem value={30}>Apartment</MenuItem>
          <MenuItem value={30}>Dorm Room</MenuItem>
          <MenuItem value={30}>Bed Dorm Room</MenuItem>
        </Select>
      </FormControl>
  <Typography variant="subtitle2" color="initial">
    Smoking policy
  </Typography>
  
  <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Non-smoking</InputLabel>
        <Select
         className={classes.makeSecondFeiledResponsive}
          style={{height:"50px",marginLeft:"-10px"}}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Smoking</MenuItem>
          <MenuItem value={20}>I have both smoking and non-smoking room of type</MenuItem>
          
        </Select>
      </FormControl>
      <Typography variant="subtitle2" color="initial">
      Number of rooms (of this type
  </Typography>
  <OutlinedInput
  className={classes.makeFieldsResponsive}
  style={{height:"40px"}}
  />
            </Paper>
          </Container>
        </Grid>
      </Grid>

{/* item2 line2 */}
<Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} component={Box}>
          <Container maxWidth="md">
            {/* heading */}
            <Box my={2} ml={1}>
            <Typography variant="h4" color="initial">
            Bed Options
            </Typography>
            <Typography variant="subtitle2" color="initial" >
            Tell us only about the existing beds in a room (don't include extra beds).            </Typography>
            <Typography variant="body2" color="initial">
            What kind of beds are available in this room?
            </Typography>
            </Box>
            {/* functionality one */}
            <Paper component={Box} p={4}
             className={classes.hover}
             style={{borderRadius:"5px",width:"100%"}}>
              <Typography variant="h6" style={{fontWeight:"lighter",marginTop:"-30px",marginBottom:"10px"}}>
              What kind of beds are available in this room?
              </Typography>
              <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Please select</InputLabel>
        <Select
         className={classes.makeSecondFeiledResponsive}
          style={{height:"50px",marginLeft:"-10px"}}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twin bed(s) / 90-130cm wide</MenuItem>
          <MenuItem value={20}>Twin bed(s) / 90-130cm wide</MenuItem>
          <MenuItem value={30}>Twin bed(s) / 90-130cm wide</MenuItem>
          <MenuItem value={30}>Twin bed(s) / 90-130cm wide/Double</MenuItem>
          <MenuItem value={30}>Twin bed(s) / 90-130cm wide</MenuItem>
          <MenuItem value={30}>Twin bed(s) / 90-130cm wide</MenuItem>
         
        </Select>
      </FormControl> <span style={{marginRight:"10px"}}>x</span>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">select the number of beds</InputLabel>
        <Select
         className={classes.makeSecondFeiledResponsive}
          style={{height:"50px",marginLeft:"-10px"}}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twin bed(s) / 90-130cm wide</MenuItem>
          <MenuItem value={20}>Twin bed(s) / 90-130cm wide</MenuItem>
          <MenuItem value={30}>Twin bed(s) / 90-130cm wide</MenuItem>
          <MenuItem value={30}>Twin bed(s) / 90-130cm wide/Double</MenuItem>
          <MenuItem value={30}>Twin bed(s) / 90-130cm wide</MenuItem>
          <MenuItem value={30}>Twin bed(s) / 90-130cm wide</MenuItem>
         
        </Select>
      </FormControl>
  <Typography  color="primary">
    <AddComment color="primary"/> Add another bed
  </Typography>
 
     <Box my={2}>
     <Typography variant="subtitle2" color="initial">
      How many guests can stay in this room?
  </Typography>
     </Box>
  <OutlinedInput
  placeholder="1"
  className={classes.makeFieldsResponsive}
  style={{height:"40px"}}
  />&nbsp;&nbsp;&nbsp;<Person color="primary"/>
            </Paper>
          </Container>
        </Grid>
      </Grid>
{/* line3 tab2 */}
{/* item2 line2 */}
<Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} component={Box}>
          <Container maxWidth="md">
           
            {/* functionality one */}
            <Paper component={Box} mt={2} p={4}
             className={classes.hover}
             style={{borderRadius:"5px",width:"100%"}}>
              <Typography variant="h6" style={{fontWeight:"lighter",marginBottom:"5px"}}>
              Room size (optional)
              </Typography>
              <OutlinedInput
      placeholder="1"
      className={classes.makeFieldsResponsive}
  
  />
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Size of room</InputLabel>
        <Select
         className={classes.makeSecondFeiledResponsive}
          style={{height:"50px"}}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>squire meeter</MenuItem>
          <MenuItem value={10}>squire feet</MenuItem>
        </Select>
      </FormControl>
  
            </Paper>
          </Container>
        </Grid>
      </Grid>
      <Grid container style={{marginTop:"10px"}}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
        <Container maxWidth="md">
          <Paper className={classes.hover} elevation={2} p={3} component={Box} >
          <Container maxWidth="md">
          <Box my={2}>
          <Typography variant="h5" >Base price per night</Typography>
        </Box>
        <Box my={2} style={{background:"lightgrey"}}>
          <Typography textAlignJustify variant="subtitle2">This is the lowest price that we automatically apply to this room for all dates. Before your property goes live, you can set seasonal pricing on your property dashboard</Typography>
        </Box>
        <Box my={2}>
          <Typography textAlignJustify variant="subtitle2">Price for 1 person</Typography>
        </Box>
        <Box my={2}>
          <ButtonGroup variant="outlined" color="default" aria-label="">
            <Button variant='contained' disabled>PKR/per night</Button>
            <OutlinedInput  placeholder="0"></OutlinedInput>
            
          </ButtonGroup>
        </Box>
          </Container>
          <Box><Button color="primary" style={{borderRadius:"0px"}} fullWidth variant="contained" >Continue</Button></Box>
          </Paper>
        </Container>
        </Grid>
      </Grid>
      </TabPanel>

      {/* end of panel two */}

      {/* start of panel three */}
      <TabPanel value={value} index={2}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{marginTop:"18px",marginBottom:"18px"}}>
<Container maxWidth="md">

    <Box my={1}>
<Typography variant="h5">Facilities & Services</Typography>
    </Box>
    <Box  my={1}>
<Typography variant="body2">Now let us know some general details about your property like facilities available, internet, parking, and the languages you speak</Typography>
    </Box>
    <Box  my={1} p={2} style={{background:"lightgrey"}}>
<Typography  variant="body2">After you complete registration you'll be able to make changes to your listing before it goes live.

</Typography>
    </Box>
  <Paper className={classes.hover} component={Box} p={2}>
    <Container maxWidth="md">
    <Box  my={1}>
<Typography variant="h5">Parking</Typography>
    </Box>
    <Box  my={1}  p={2} style={{background:"lightgrey"}}>
<Typography variant="body2">This information is especially important for those traveling to your property by car.

</Typography>
    </Box>
    <Box  my={1}>
      <Typography variant="body2">
      Is parking available to guests?
      </Typography>
    </Box>
    <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">No</InputLabel>
        <Select
         className={classes.makeSecondFeiledResponsive}
          style={{height:"50px",marginLeft:"-10px"}}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Age"
          fullWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Yes Paid</MenuItem>
          <MenuItem value={20}>Yes Free</MenuItem>
        </Select>
      </FormControl>
    </Container>
  </Paper>
</Container>
          </Grid>
        </Grid>
        {/* line2 */}
        <Grid container style={{marginTop:"10px",marginBottom:"18px"}}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
<Container maxWidth="md">

  <Paper className={classes.hover} component={Box} p={2}>
    <Container maxWidth="md">
    <Box  my={1}>
<Typography variant="h5">Breakfast</Typography>
    </Box>
    <Box  my={1}  p={2}>
<Typography variant="body2">Is breakfast available to guests?

</Typography>
    </Box>
   
    <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">No</InputLabel>
        <Select
         className={classes.makeSecondFeiledResponsive}
          style={{height:"50px",marginLeft:"-10px"}}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Age"
          fullWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Yes, its included in price</MenuItem>
          <MenuItem value={20}>Yes, it is optional</MenuItem>
        </Select>
      </FormControl>
    </Container>
  </Paper>
</Container>
          </Grid>
        </Grid>
        {/* line3 */}
        <Grid container style={{marginTop:"18px",marginBottom:"18px"}}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
<Container maxWidth="md">

  <Paper className={classes.hover} elevation={3} component={Box} p={2}>
    <Container maxWidth="md">
    <Box  my={1}>
<Typography variant="h5">Languages Spoken</Typography>
    </Box>
    <Box  my={1}  p={2} style={{background:"lightgrey"}}>
<Typography variant="body2">What languages do you or your staff speak?

</Typography>
    </Box>
   
    <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">No</InputLabel>
        <Select
         className={classes.makeSecondFeiledResponsive}
          style={{height:"50px",marginLeft:"-10px"}}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Age"
          fullWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>English</MenuItem>
          <MenuItem value={20}>Urdu</MenuItem>
          <MenuItem value={20}>Other</MenuItem>
        </Select>
      </FormControl>
      <Box my={2}>
      <Typography  color="primary">
    <AddComment color="primary"/> Add another languange
  </Typography>
      </Box>
    </Container>
  </Paper>
</Container>
          </Grid>
        </Grid>
        {/* line4 */}
        <Grid container>
          <Grid item  xs={12} sm={12} md={12} lg={12} xl={12} style={{marginTop:"18px",marginBottom:"18px"}}>
<Container maxWidth="md">
<Paper component={Box} p={5} elevation={4}>
<Box my={1}>
  <Typography variant="h5">
  Facilities That Are Popular With Guests
  </Typography>
</Box>
<Box my={1} style={{background:"lightgrey"}}>
  <Typography variant="subtitle2" style={{fontSize:"12px"}}>
  Guests look for these facilities the most when they’re searching for properties.
    </Typography>
</Box>
{/* checkbox row 1 */}
<Grid container  component={Box} mb={1}>
  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}><Checkbox size="small"/>Free WiFi</Grid>
  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}><Checkbox size="small"/>Non-smoking rooms</Grid>
</Grid>
<Divider/>
{/* checkbox row 2 */}
{/* checkbox row 1 */}
<Grid container  component={Box} mb={1}>
  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}><Checkbox size="small"/>Restaurant</Grid>
  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}><Checkbox size="small"/>Airport shuttle</Grid>
</Grid>
<Divider/>
{/* checkbox row 3 */}
{/* checkbox row 1 */}
<Grid container component={Box} mb={1}>
  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}><Checkbox size="small"/>Room service</Grid>
  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}><Checkbox size="small"/>Family rooms</Grid>
</Grid>
<Divider/>
{/* checkbox row 4 */}
{/* checkbox row 1 */}
<Grid container  component={Box} mb={1}>
  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}><Checkbox size="small"/>Bar</Grid>
  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}><Checkbox size="small"/>Spa</Grid>
</Grid>
<Divider/>
{/* checkbox row 5 */}
{/* checkbox row 1 */}
<Grid container  component={Box} mb={1}>
  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}><Checkbox size="small"/>24-hour front desk</Grid>
  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}><Checkbox size="small"/>Hot tub/Jacuzzi</Grid>
</Grid>
<Divider/>
{/* checkbox row 5 */}
{/* checkbox row 1 */}
<Grid container  component={Box} mb={1}>
  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}><Checkbox size="small"/>Sauna</Grid>
  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}><Checkbox size="small"/>Air conditioning</Grid>
</Grid>
<Divider/>

{/* checkbox row 6 */}
{/* checkbox row 1 */}
<Grid container  component={Box} mb={1}>
  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}><Checkbox size="small"/>Fitness center</Grid>
  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}><Checkbox size="small"/>Water park</Grid>
</Grid>
<Divider/>

{/* checkbox row 7 */}
{/* checkbox row 1 */}
<Grid container  component={Box} mb={1}>
  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}><Checkbox size="small"/>Garden</Grid>
  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}><Checkbox size="small"/>Swimming pool</Grid>
</Grid>
<Divider/>
{/* checkbox row 1 */}
<Grid container  component={Box} mb={1}>
  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}><Checkbox size="small"/>Terrace</Grid>
</Grid>
<Button fullWidth color="primary" variant="contained" className={classes.border} >Continue</Button>

</Paper>

</Container>
          </Grid>
        </Grid>

      </TabPanel>

      <TabPanel value={value} index={3}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
       <Container maxWidth="md">
       <Box mb={2}>
        <Typography variant="h5">Property Photos</Typography>
        </Box>
        <Container>
        <Box  mb={2}>
        <Typography variant="subtitle2">Great photos invite guests to get the full experience of your property, so upload some high-resolution photos that represent all your property has to offer. We'll display these photos on your property's page on the Booking.com website.</Typography>
        </Box>
        </Container>
       <Container>
       <Box style={{background:"lightgrey"}}  mb={2}>
        <Typography variant="subtitle2">After you complete registration you'll be able to make changes to your listing before it goes live.</Typography>
        </Box>
       </Container>

        <Container>
          <Paper>
          <Box mb={2}>
        <Typography variant="h5">Photo Gallery</Typography>
        </Box>
        <Box p={5} className={classes.borderForImg}>
        <Box textAlign="center" mb={2}>
        <Typography  variant="h5">Upload at least one photo</Typography>
        </Box>
        <Box textAlign="center" mb={2}>
        <Typography variant="subtitle2">You'll also able to upload photo after the registeration</Typography>
        </Box>
        <Box textAlign="center" mb={2}>
        <Typography variant="h5">Drag and Drop Your photos here </Typography>
        </Box>
        <Box textAlign="center" mb={2}>
        <Filebase
        multiple={ true }
        onDone={(e)=>setbasicInfo({selectedFile:e[0].base64})}
         />
        </Box>
        <Box textAlign="center">
{/* {basicInfo.selectedFile!==undefined?
<img src={basicInfo.selectedFile} width="70px" height="70px" alt=""/>:null
}      */}
   </Box>
        </Box>
        
          </Paper>
        </Container>
       </Container>
        </Grid>
      </Grid>
      </TabPanel>

      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
    </div>
  );
}
