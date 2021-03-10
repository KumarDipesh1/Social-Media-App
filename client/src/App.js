import React,{ useState, useEffect} from 'react';
import {Container, AppBar, Typography, Grid, Grow} from '@material-ui/core';
import memories from './images/memories.jpg';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import  { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';



const App=()=>{
    const [currentId, setcurrentId]=useState(0);
    const dispatch =useDispatch();
    const classes = useStyles();

    useEffect(()=>{
        dispatch(getPosts());
    },[currentId,dispatch]);
    return(
       <Container max Width="lg">
           <AppBar className={classes.appBar} position="static" color="inherit" >
                <img className={classes.image} src={memories} alt="memories" width="350" height="100" />
           </AppBar>
           {/* <img className={classes.image} src={memories} alt="memories" width="350" height="100" /> */}
           <Grow in>
               <Container>
                   <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
                       <Grid item xs={12} sm={7}>
                           <Posts setcurrentId={setcurrentId} />
                       </Grid>
                       <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setcurrentId={setcurrentId} />
                       </Grid>
                   </Grid>

               </Container>
           </Grow>
       </Container>


    );
}
export default App;