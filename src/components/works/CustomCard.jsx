import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Chip } from '@mui/material';

function CustomCard({ imageSrc, title, description, githubLink, liveLink, technologies, languages }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={() => window.open(liveLink, '_blank')}>
                <CardMedia
                    component="img"
                    height="240"
                    image={imageSrc}
                    alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginTop: 2 }}>
                        Technologies: {technologies.join(', ')}
                    </Typography>
                    {languages && (      
                        <div style={{ marginTop: '8px' }}>
                            {Object.entries(languages).map(([language, percentage], index) => (
                                <Chip 
                                    key={index} 
                                    label={`${language}: ${percentage}%`} 
                                    variant="outlined" 
                                    size="small" 
                                    style={{ margin: '2px' }}
                                />
                            ))}
                        </div>
                    )}
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={() => window.open(githubLink, '_blank')}>
                    View on GitHub
                </Button>
            </CardActions>
        </Card>
    );
}

export default CustomCard;
