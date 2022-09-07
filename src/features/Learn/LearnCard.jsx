import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {

    return (
        <Card style={{ height: 400 }} sx={{ maxWidth: 700 }}>
            <CardActionArea>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        program
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.rani}{props.hi}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sunt sint architecto, tenetur reprehenderit odio deserunt culpa quo quod numquam exercitationem ut obcaecati veritatis suscipit aspernatur fugiat, molestiae ullam qui.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
