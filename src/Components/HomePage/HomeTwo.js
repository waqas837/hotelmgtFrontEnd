import React from 'react'
import {Box, Button, Divider, Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import {Carousel} from  "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import img from "../../images/Lahore_Fort_view_from_Baradari.jpg"
import img2 from "../../images/Karachi.jpg"
import img3 from "../../images/peshawar.png"
import img4 from "../../images/banner.jpg"
import "./HomeTwo.css"
const useStyles = makeStyles(theme=>({
heading:{
  textAlign:"center",
  margin:"10px"
}
}))
const HomeTwo = () => {
  const classes = useStyles()
    return (
        <div>
             <Grid container>
             {/* row 1 */}
       <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
       {/* image1 */}
{/* <div>
<Box display="inline" className="main">
<Typography variant="h3" style={{color:"white"}}>Islamabad</Typography>
 </Box> */}
 {/* image2 */}
 {/* <Box display="inline" className="main">
<Typography variant="h3" style={{color:"white"}}>Islamabad</Typography>
 </Box>
</div> */}
               </Grid>
            </Grid>
            {/* Browse by category  */}
           
<Box>
<Typography variant="h5" className={classes.heading}>Browse by property type</Typography>
</Box>               
            {/* caresoule */}
          <Box mb={3}>
          <Carousel
           navButtonsAlwaysVisible
           autoPlay={false}
           showThumbs={false}
           showStatus={0}
           centerMode
           centerSlidePercentage={50}
           >
  <div style={{padding:"10px"}}>
    <img src={img} alt="" width="200px" height="200px"/>
    <h5>headins</h5>
    <p>paragraphs</p>
    
  </div>
  
  <div style={{padding:"10px"}}>
    <img src={img2} alt="" width="200px" height="200px"/>
     <h5>headins</h5>
    <p>paragraphs</p>
    
  </div>
  <div style={{padding:"10px"}}>
    <img src={img3} alt="" width="200px" height="200px"/>
     <h5>headins</h5>
    <p>paragraphs</p>
    
  </div>
  <div style={{padding:"10px"}}>
    <img src={img4} alt="" width="200px" height="200px"/>
     <h5>headins</h5>
    <p>paprahs</p>
    
  </div>
  <div style={{padding:"10px"}}>
    <img src={img} alt="" width="200px" height="200px"/>
     <h5>headins</h5>
    <p>paprahs</p>
    
  </div>
  <div style={{padding:"10px"}}>
    <img src={img} alt="" width="200px" height="200px"/>
     <h5>headins</h5>
    <p>paprahs</p>
    
  </div>

           </Carousel>
          </Box>
      {/*2nd carosoule for Explore Pakistan */}
          <Box mb={3}>
          <Typography variant="h5" className={classes.heading}>Explore Pakistan</Typography>
          <Carousel
           navButtonsAlwaysVisible
           autoPlay={false}
           showThumbs={false}
           showStatus={0}
           centerMode
           centerSlidePercentage={50}
           >
  <div style={{padding:"10px"}}>
    <img src={img} alt="" width="200px" height="200px"/>
    <h5>headins</h5>
    <p>paragraphs</p>
    
  </div>
  
  <div style={{padding:"10px"}}>
    <img src={img2} alt="" width="200px" height="200px"/>
     <h5>headins</h5>
    <p>paragraphs</p>
    
  </div>
  <div style={{padding:"10px"}}>
    <img src={img3} alt="" width="200px" height="200px"/>
     <h5>headins</h5>
    <p>paragraphs</p>
    
  </div>
  <div style={{padding:"10px"}}>
    <img src={img4} alt="" width="200px" height="200px"/>
     <h5>headins</h5>
    <p>paprahs</p>
    
  </div>
  <div style={{padding:"10px"}}>
    <img src={img} alt="" width="200px" height="200px"/>
     <h5>headins</h5>
    <p>paprahs</p>
    
  </div>
  <div style={{padding:"10px"}}>
    <img src={img} alt="" width="200px" height="200px"/>
     <h5>headins</h5>
    <p>paprahs</p>
    
  </div>

           </Carousel>
          </Box>
      <Divider/>
      {/*3nd carosoule for Homes guests love */}
      <Box mb={3}>
          <Typography variant="h5" className={classes.heading}>Homes guests love</Typography>
          <Carousel
           navButtonsAlwaysVisible
           autoPlay={false}
           showThumbs={false}
           showStatus={0}
           centerMode
           centerSlidePercentage={50}
           >
  <div style={{padding:"10px"}}>
    <img src={img} alt="" width="200px" height="200px"/>
    <h5>headins</h5>
    <p>paragraphs</p>
    
  </div>
  
  <div style={{padding:"10px"}}>
    <img src={img2} alt="" width="200px" height="200px"/>
     <h5>headins</h5>
    <p>paragraphs</p>
    
  </div>
  <div style={{padding:"10px"}}>
    <img src={img3} alt="" width="200px" height="200px"/>
     <h5>headins</h5>
    <p>paragraphs</p>
    
  </div>
  <div style={{padding:"10px"}}>
    <img src={img4} alt="" width="200px" height="200px"/>
     <h5>headins</h5>
    <p>paprahs</p>
    
  </div>
  <div style={{padding:"10px"}}>
    <img src={img} alt="" width="200px" height="200px"/>
     <h5>headins</h5>
    <p>paprahs</p>
    
  </div>
  <div style={{padding:"10px"}}>
    <img src={img} alt="" width="200px" height="200px"/>
     <h5>headins</h5>
    <p>paprahs</p>
    
  </div>

           </Carousel>
          </Box>
           {/*3nd carosoule for Connect with other travelers */}
      <Box mb={3}>
          <Typography variant="h5" className={classes.heading}>Connect with other travelers</Typography>
          <Carousel
           navButtonsAlwaysVisible
           autoPlay={false}
           showThumbs={false}
           showStatus={0}
           centerMode
           centerSlidePercentage={50}
           >
  <div style={{padding:"10px"}}>
    <img src={img} alt="" width="200px" height="200px"/>
    <h5>headins</h5>
    <p>paragraphs</p>
    
  </div>
  
  <div style={{padding:"10px"}}>
    <img src={img2} alt="" width="200px" height="200px"/>
     <h5>headins</h5>
    <p>paragraphs</p>
    
  </div>
  <div style={{padding:"10px"}}>
    <img src={img3} alt="" width="200px" height="200px"/>
     <h5>headins</h5>
    <p>paragraphs</p>
    
  </div>
  <div style={{padding:"10px"}}>
    <img src={img4} alt="" width="200px" height="200px"/>
     <h5>headins</h5>
    <p>paprahs</p>
    
  </div>
  <div style={{padding:"10px"}}>
    <img src={img} alt="" width="200px" height="200px"/>
     <h5>headins</h5>
    <p>paprahs</p>
    
  </div>
  <div style={{padding:"10px"}}>
    <img src={img} alt="" width="200px" height="200px"/>
     <h5>headins</h5>
    <p>paprahs</p>
    
  </div>

           </Carousel>
          </Box>
        </div>
    )
}

export default HomeTwo;
