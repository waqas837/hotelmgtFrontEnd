import { Button, Grid, TextField, Typography,makeStyles } from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles((theme)=>({
    makeTextFieldResponsive:{
        [theme.breakpoints.up('md')]:{
            width:"500px"
        }
    }
}))
const SaveTimeAndMoney = () => {
    const classes = useStyles()
    return (
        <div style={{background:"rgb(0,34,79)",padding:"40px",marginTop:"10px"}}>
        {/* line1 */}
            <Grid container>
            <Grid item xs={12} sm={12} md={12}  lg={12} xl={12}>
                <Typography variant="h5" style={{textAlign:"center",fontWeight:"lighter",color:"white"}}>
                Save time, save money!</Typography>
            </Grid>
            </Grid>
            {/* line2 */}
            <Grid container>
            <Grid item xs={12} sm={12} md={12}  lg={12} xl={12}>
                <Typography variant="subtitle2" style={{textAlign:"center",fontWeight:"lighter",color:"white"}}>
                Sign up and we'll send the best deals to you</Typography>
            </Grid>
            </Grid>
             {/* line3 :subsribe to here*/}
             <Grid container style={{marginTop:"20px"}}>
            <Grid item xs={12} sm={12} md={12}  lg={12} xl={12} style={{textAlign:"center"}}>
                <TextField 
                size="small"
                variant="outlined"
                placeholder="Your Email"
                className={classes.makeTextFieldResponsive}
                style={{background:"white",borderRadius:"10px",marginBottom:"10px"}}
                />
              
                <Button 
                size="large"
                style={{background:"rgb(0,113,194)",color:"white",marginLeft:"5px",fontSize:"13px"}}
                variant="contained" 
                
                >Subscribe</Button>
            </Grid>
            </Grid>
        </div>
    )
}

export default SaveTimeAndMoney;
