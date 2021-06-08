import React,{useState} from 'react'
import SaveTimeAndMoney from "./SaveTimeAndMoney";
import {Box, Button, Container, CssBaseline,  FormControl,  Grid, InputLabel, makeStyles, OutlinedInput, Select, Typography, Avatar, CardHeader, IconButton, CardActions, CardContent, CardMedia, Card, CardActionArea, Dialog, DialogTitle, Paper, Tooltip, withStyles, DialogActions, Hidden} from "@material-ui/core"
import { Search, MoreVert as MoreVertIcon, Stars, ThumbUp, Check, Visibility, FavoriteBorder, Feedback, Close } from '@material-ui/icons'
import img from "../../images/Karachi.jpg"
const useStyles = makeStyles((theme) => ({
  inputsResp:{
    [theme.breakpoints.down('md')]:{
      width:"100%"
    }
  },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    borderRadius:{
      background:"#1769aa",
      color:"white",
      display:"inline-block",
      padding:"8px",
      borderRadius:"12px 12px 12px 0px",
      marginTop:"10px"
    },
    lastbooked:{
     color:"#f73378",
     textDecoration:"underline"
    },
    info:{
      color:"#1769aa",
      textDecoration:"underline",
      fontWeight:"bolder"
     },
     ratings:{
       marginTop:"10px",
       marginBottom:"5px"
     },
     reviews:{
      marginBottom:"10px"
     },
     searchBarResp:{
       [theme.breakpoints.down('sm')]:{
        //we can do something else here
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
       },
       [theme.breakpoints.down('xl')]:{
        background:"lightgrey",
        marginTop:"15px",
        borderRadius:"7px",
        padding:"20px",
        marginLeft:"-10px"
      },
     },
     makeFontResp:{
       [theme.breakpoints.down('sm')]:{
         fontSize:"70%"
       }
     },
     CardimgResp:{
      [theme.breakpoints.down('sm')]:{
        width:"100%"
      }
     }
  }));
const SearchResults = () => {
    const classes = useStyles();
    const [startdate, setstartdate] = useState('')
    const [ datelogic,setdatelogic ] = useState(null)
    const [ open , setopen ] = useState(null)
    const [ datelogictwo,setdatelogictwo ] = useState(null)
    var today = new Date().toISOString().split('T')[0];
    const [state, setState] = useState();
    console.log(startdate);
    // show prices 
    const showPrices = () =>{
      if(startdate===""){
        setopen(true)
      }
    }
      const handleChange = (event) => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };
    return (
        <div>
        <CssBaseline/>
        <Dialog
        open={open}
        onClose={()=>setopen(false)}
        >
          <DialogTitle>
            <Box mb={2}>
        <Typography color="secondary" variant="h5"><Feedback/> Please tell us about your stay !</Typography>
              </Box>
            <Typography style={{fontSize:"15px"}}>Choose a location, check in check out
           And how much persons are you trevelling?</Typography>
          </DialogTitle>
          <DialogActions>
            <Button
            variant="contained"
            color="primary"
            onClick={()=>setopen(false)}
            >Close</Button>
          </DialogActions>
        </Dialog>
        <Container>
        <Box mb={-2} mt={1} textAlign="center">
         <Typography variant="h5" color="primary"> Cologne: 455 properties found</Typography>
          </Box>
        <Grid container>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
         
           <Box className={classes.searchBarResp}>
                <Box>
                <Typography variant="h6" color="initial">Search</Typography>
                </Box>
                <Box>
                <Typography variant="body2" color="initial"> Destination/property name:</Typography>
                </Box>
                <Box>
                <input
                className={classes.inputsResp}
                type="text"
                placeholder="Choose a Location"
             //    onChange={allCities}
           style={{
                backgroundColor: "white",
                paddingTop:"13px",
                paddingBottom:"12px",
                borderRadius: "0px",
                width:"100%",
                fontWeight:"bold"
              }}
             
         />
                </Box>
                <Box>
                <Typography variant="body2" color="initial"> Check-in date:</Typography>
                </Box>
{/* date */}
  {/* check in */}
  { !datelogic?
          <input
           type="text"
           placeholder="Check-in"
           onClick={()=>setdatelogic(true)}
           style={{
                textTransform: "capitalize",
                backgroundColor: "white",
                width:"100%",
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
           min={today}
           style={{
                textTransform: "capitalize",
                backgroundColor: "white",
                paddingTop:"9px",
                paddingBottom:"9px",
                borderRadius: "0px",
                width:"100%",
                fontSize:"15px",
                fontWeight:"bold"
              }}
              onChange={(e)=>{setstartdate(e.target.value)}}
         />
        
        }
                <Box>
                <Typography variant="body2" color="initial"> Check-in date:</Typography>
                </Box>
{/* date */}
  {/* Check out */}
  { !datelogictwo?
          <input
            type="text"
            placeholder="Check-Out"
            onClick={()=>setdatelogictwo(true)}
            style={{
                textTransform: "capitalize",
                backgroundColor: "white",
                width:"100%",
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
           style={{
                textTransform: "capitalize",
                backgroundColor: "white",
                paddingTop:"9px",
                width:"100%",
                paddingBottom:"9px",
                borderRadius: "0px",
                fontSize:"15px",
                fontWeight:"bold"
              }}
              onChange={(e)=>{setstartdate(e.target.value)}}
         />
        
        }
               <Box>
                <Typography variant="body2" color="initial"> 1-week stay</Typography>
                </Box>
                <Box>
            <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Choose Adult</InputLabel>
        <Select
          native
          onChange={handleChange}
          label="Adults"
         style={{width:"200px",height:"50px",background:"white",marginLeft:"-7px"}}
        >
          <option aria-label="None" value="" />
          <option value={1}>Adult 1</option>
          <option value={2}>Adult 2</option>
          <option value={3}>Adult 3</option>
          <option value={4}>Adult 4</option>
          <option value={5}>Adult 5</option>
       
        </Select>
      </FormControl>
            </Box>

<Box style={{marginLeft:"-10px"}}>
    <Grid container>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple" style={{fontSize:"10px"}}>No Childeren</InputLabel>
        <Select
          native
          onChange={handleChange}
          label="Adults"
          style={{width:"100px",height:"50px",background:"white"}}
        >
          <option aria-label="None" value="" />
          <option value={1}>Childeren 1</option>
          <option value={2}>Childeren 2</option>
          <option value={3}>Childeren 3</option>
          <option value={4}>Childeren 4</option>
          <option value={5}>Childeren 5</option>
       
        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple" style={{fontSize:"10px"}}>Select Rooms</InputLabel>
        <Select
          native
          onChange={handleChange}
          label="Adults"
          style={{width:"100px",height:"50px",background:"white"}}
        >
          <option aria-label="None" value="" />
          <option value={1}>Room 1</option>
          <option value={2}>Room 2</option>
          <option value={3}>Room 3</option>
          <option value={4}>Room 4</option>
          <option value={5}>Room 5</option>
       
        </Select>
      </FormControl>
        </Grid>
    </Grid>
</Box>
<Box>
    <Button variant="contained" color="secondary" size="large" fullWidth>Search</Button>
</Box>

  </Box>
  {/* </HtmlTooltip> */}
            </Grid>
            {/* end for the search , here we can write the card in the grid */}
            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
                    <Box ml={2}>
{
  Array(5).fill().map(()=>
  <Box my={3}>
  {/* fist hidden element */}
<Hidden only={['xs','sm']}>
<Card style={{textAlign:"center"}}>
      <CardActionArea className={classes.CardimgResp} style={{display:"flex"}}>
        <CardMedia
          style={{width:"100%",height:"250px"}}
          image={img}
          title="Cologone by park plaza"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" color="primary" component="h2">
          Cologone by park plaza <Stars size="small" style={{color:"yellowgreen"}}/> <Stars style={{color:"yellowgreen"}} size="small"/> <Stars size="small" style={{color:"yellowgreen"}}/> <Stars size="small" style={{color:"yellowgreen"}}/>
         <Box className={classes.borderRadius}> <Typography  size="small">
          Very Good
        </Typography></Box>
        <Box ml={3}> <Typography  size="small">
        </Typography></Box>
        <Typography variant="h6" className={classes.ratings}>
          8.4 <Check fontSize="small"/>
        </Typography>
        <Typography variant="subtitle2" className={classes.reviews}>
          5,575 reviews <Visibility fontSize="small"/>
        </Typography>
          </Typography>
         <Box mb={1} className={classes.info}> <Typography variant="body2">
          Altstadt-Süd, Cologne  Show on map  1.1 km from center
          </Typography></Box>

          <Box  mb={1}><Typography variant="body2" color="textSecondary" component="p">
          This hotel is located on the River Rhine in Cologne’s historic city center and features modern design, stylish rooms, free WiFi, and a large rooftop terrace
          </Typography></Box>

         <Box  mb={1}> <Typography className={classes.lastbooked} variant="body2" color="textSecondary" component="p">
          Last booked 9 hours ago on our site</Typography></Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
         onClick={showPrices}
         variant="contained" color="secondary" style={{borderRadius:"0px"}}>
          Show prices
        </Button>
      
      </CardActions>
    </Card>
</Hidden>
{/* second hidden element */}
<Hidden
only={['md','lg','xl']}
><Card style={{textAlign:"center",marginLeft:"-17px"}}>
      <CardActionArea className={classes.CardimgResp}>
        <CardMedia
          style={{width:"100%",height:"250px"}}
          image={img}
          title="Cologone by park plaza"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" color="primary" component="h2">
          Cologone by park plaza <Stars size="small" style={{color:"yellowgreen"}}/> <Stars style={{color:"yellowgreen"}} size="small"/> <Stars size="small" style={{color:"yellowgreen"}}/> <Stars size="small" style={{color:"yellowgreen"}}/>
         <Box className={classes.borderRadius}> <Typography  size="small">
          Very Good
        </Typography></Box>
        <Box ml={3}> <Typography  size="small">
        </Typography></Box>
        <Typography variant="h6" className={classes.ratings}>
          8.4 <Check fontSize="small"/>
        </Typography>
        <Typography variant="subtitle2" className={classes.reviews}>
          5,575 reviews <Visibility fontSize="small"/>
        </Typography>
          </Typography>
         <Box mb={1} className={classes.info}> <Typography variant="body2">
          Altstadt-Süd, Cologne  Show on map  1.1 km from center
          </Typography></Box>

          <Box  mb={1}><Typography variant="body2" color="textSecondary" component="p">
          This hotel is located on the River Rhine in Cologne’s historic city center and features modern design, stylish rooms, free WiFi, and a large rooftop terrace
          </Typography></Box>

         <Box  mb={1}> <Typography className={classes.lastbooked} variant="body2" color="textSecondary" component="p">
          Last booked 9 hours ago on our site</Typography></Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
         onClick={showPrices}
         variant="contained" color="secondary" style={{borderRadius:"0px"}}>
          Show prices
        </Button>
      
      </CardActions>
    </Card></Hidden>
</Box>
  )
}

</Box>
 </Grid>
        </Grid>
        </Container>
        {/* showing at last this component */}
        <SaveTimeAndMoney/>
        </div>
    )
}

export default SearchResults
