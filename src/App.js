import logo from './logo.svg';
import './App.css';
import {Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Paper, Typography} from "@mui/material";

function App() {
    return (
        <Paper>
            <CssBaseline/>
            <Card sx={{maxWidth: 345}}>
                <CardMedia
                    aria-describedby={"https://unsplash.com/photos/xmSWVeGEnJw"}
                    component="img"
                    alt="image from Unsplash https://unsplash.com/photos/xmSWVeGEnJw"
                    height="140"
                    image="/unsplash.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Enfrente.org
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aliquam aperiam autem beatae
                        consequuntur delectus, dignissimos dolore fugiat ipsum maxime minima odit quidem quis recusandae
                        rem, saepe soluta vero!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Paper>
    );
}

export default App;
