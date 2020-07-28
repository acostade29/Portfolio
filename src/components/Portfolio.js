import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography

} from "@material-ui/core"
import Navbar from'./Navbar'
import project1 from "../images/SimonGame.png"
import project2 from "../images/SnakeGame.png"
import project3 from "../images/Guizmo.png"
import project4 from "../images/CookingWithBam .png"
import project5 from "../images/CoronaTracker.png"






const useStyles = makeStyles({
    mainContainer: {
        height: "100%"
    },
    cardContainer: {
        maxWidth: 345,
        margin: "3rem",
        margin: "5rem auto"
    }
})

const Portfolio = () => {
    const classes = useStyles()
    return (
        <Box component="div" className={classes.mainContainer}>
           <Navbar />
           <Grid container justify="center" >
               {/* project 1  */}
               <Grid item xs={12} sm={8} md={6}>
              
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia 
                    component="img"
                    alt="project 1"
                    height="140"
                    image={project1} 
                     />
                        
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                         Simon Game
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, fugiat.
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            live
                        </Button>


                    </CardActions>
                
            </Card>
            </Grid>


              {/* project 2  */}
              <Grid item xs={12} sm={8} md={6}>
              
              <Card className={classes.cardContainer}>
                  <CardActionArea>
                      <CardMedia 
                      component="img"
                      alt="project 2"
                      height="140"
                      image={project2} 
                       />
                          
                      <CardContent>
                          <Typography gutterBottom variant="h5">
                           Snake Game
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, fugiat.
                          </Typography>
                      </CardContent>
                      </CardActionArea>
                      <CardActions>
                      
                          <Button size="small" color="primary">
                              Share
                          </Button>
                          <Button size="small" color="primary">
                              live
                          </Button>
  
  
                      </CardActions>
                  
              </Card>
  
            
            </Grid>

                          {/* project 3  */}
                          <Grid item xs={12} sm={8} md={6}>
              
              <Card className={classes.cardContainer}>
                  <CardActionArea>
                      <CardMedia 
                      component="img"
                      alt="project 3"
                      height="140"
                      image={project3} 
                       />
                          
                      <CardContent>
                          <Typography gutterBottom variant="h5">
                           Guizmo Dog Walking Services 
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, fugiat.
                          </Typography>
                      </CardContent>
                      </CardActionArea>
                      <CardActions>
                      
                          <Button size="small" color="primary">
                              Share
                          </Button>
                          <Button size="small" color="primary">
                              live
                          </Button>
  
  
                      </CardActions>
                  
              </Card>
  
            
            </Grid>



                          {/* project 4  */}
                          <Grid item xs={12} sm={8} md={6}>
              
              <Card className={classes.cardContainer}>
                  <CardActionArea>
                      <CardMedia 
                      component="img"
                      alt="project 4"
                      height="140"
                      image={project4} 
                       />
                          
                      <CardContent>
                          <Typography gutterBottom variant="h5">
                           Cooking with BAM!
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, fugiat.
                          </Typography>
                      </CardContent>
                      </CardActionArea>
                      <CardActions>
                     
                          <Button size="small" color="primary">
                              Share
                          </Button>
                          <Button size="small" color="primary">
                              live
                          </Button>
  
  
                      </CardActions>
                 
              </Card>
  
            
            </Grid>

                         {/* project 5  */}
                         <Grid item xs={12} sm={8} md={6}>
              
              <Card className={classes.cardContainer}>
                  <CardActionArea>
                      <CardMedia 
                      component="img"
                      alt="project 5"
                      height="140"
                      image={project5} 
                       />
                          
                      <CardContent>
                          <Typography gutterBottom variant="h5">
                           Coronavirus Tracker
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, fugiat.
                          </Typography>
                      </CardContent>
                      </CardActionArea>
                      <CardActions>
                      
                          <Button size="small" color="primary">
                              Share
                          </Button>
                          <Button size="small" color="primary">
                              live
                          </Button>
  
  
                      </CardActions>
                  
              </Card>
  
            
            </Grid>




            </Grid>
            </Box>
        
    );
};

export default Portfolio
