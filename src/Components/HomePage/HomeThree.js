import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import { AppBar, Box, Button, Container, Divider, Grid,makeStyles, Tab, Tabs, TabPanel } from '@material-ui/core';
import {NavLink} from "react-router-dom"
import "./HomeTwo.css"
const useStyles = makeStyles(theme=>({
    hover:{
        "&:hover":{
            background:"rgb(0,113,194)",
            borderRadius:"0px",
            color:"white"
        }
    },
    activeClass:{
       
            background:"rgb(0,113,194)",
            borderRadius:"0px",
            color:"white"
        
    },
    headings:{
        margin:"15px",
        textAlign:"center"
      }
}))
const HomeThree = () => {
    const classes = useStyles();
    const [state, setstate] = useState(0)
    function tabChanger(e,val) {
        console.log(val);
        setstate(val)
    }
    function TabPanel(props){
        const {childern,value,index} = props
       return index===value &&
        <h2>{childern}</h2>
    }
    return (
        <div>
          <Box mb={3}>  <Typography variant="h5"  className={classes.headings}>
            Get inspiration for your next trip</Typography></Box>
           <Container>
           <Grid container spacing={4}>
           {/* 1st item */}
            <Grid item xs={12} sm={4} lg={3} md={4} xl={3} >
                <div className="mainthree" style={{borderRadius:"5px",textAlign:"center"}}>
                <Typography variant="h5" style={{color:"white",marginTop:"250px"}}>
                    Great Train Journneys:The Glaciar Express
                </Typography>
                <Typography variant="subtitle2" style={{color:"white"}}>
                    Get Hipnotyzed by amazing scenery
                </Typography>
                </div>
                </Grid>  
                {/* 2nd item */}
                <Grid item xs={12} sm={4} lg={3} md={4} xl={3} >
                <div className="mainthree" style={{borderRadius:"5px",textAlign:"center"}}>
                <Typography variant="h5" style={{color:"white",marginTop:"250px"}}>
                    Great Train Journneys:The Glaciar Express
                </Typography>
                <Typography variant="subtitle2" style={{color:"white"}}>
                    Get Hipnotyzed by amazing scenery
                </Typography>
                </div>
                </Grid> 
                {/* 3item */}
                <Grid item xs={12} sm={4} lg={3} md={4} xl={3} >
                <div className="mainthree" style={{borderRadius:"5px",textAlign:"center"}}>
                <Typography variant="h5" style={{color:"white",marginTop:"250px"}}>
                    Great Train Journneys:The Glaciar Express
                </Typography>
                <Typography variant="subtitle2" style={{color:"white"}}>
                    Get Hipnotyzed by amazing scenery
                </Typography>
                </div>
                </Grid> 
            </Grid>
            {/* line 2 */}
            <Grid container spacing={4} style={{marginTop:"20px"}}>
           {/* 1st item */}
            <Grid item xs={12} sm={6} lg={6} md={6} xl={3} >
                <div className="mainthree" style={{borderRadius:"5px",textAlign:"center"}}>
                <Typography variant="h5" style={{color:"white",marginTop:"250px"}}>
                    Great Train Journneys:The Glaciar Express
                </Typography>
                <Typography variant="subtitle2" style={{color:"white"}}>
                    Get Hipnotyzed by amazing scenery
                </Typography>
                </div>
                </Grid>  
                {/* 2nd item */}
                <Grid item xs={12} sm={6} lg={6} md={6} xl={3} >
                <div className="mainthree" style={{borderRadius:"5px",textAlign:"center"}}>
                <Typography variant="h5" style={{color:"white",marginTop:"250px"}}>
                    Great Train Journneys:The Glaciar Express
                </Typography>
                <Typography variant="subtitle2" style={{color:"white"}}>
                    Get Hipnotyzed by amazing scenery
                </Typography>
                </div>
                </Grid> 
               
            </Grid>
           </Container>
           {/* Destinations we love */}
<Box my={5}>
<Typography variant="h5"  className={classes.headings} >Destinations we love</Typography>
</Box>       
<Container>
<Grid container>
<Box>

<TabPanel value={state} index={0}>
    This is first data
</TabPanel>
  
<TabPanel value={state} index={1}>   
 This is second data
</TabPanel>
<TabPanel value={state} index={2}> 
   This is third data
</TabPanel>
</Box>

<Divider style={{background:"rgb(0,113,194)",width:"100%",height:"1px"}} />
</Grid>
</Container>
{/* new line after the links */}
<Grid container>
<Grid item xs={6} sm={2} md={2}  lg={12} xl={12}>
    <Typography variant="body2" color="initial">Here are all links data</Typography>
</Grid>
</Grid>

 </div>
    )
}

export default HomeThree;
