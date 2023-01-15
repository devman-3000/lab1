import { Product } from '../../app/models/product';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, CardHeader, Avatar } from '@mui/material';

export interface Props {
    product: Product
}


export default function ProductCard({ product }: Props) {

    const { pictureUrl, name, price, brand, type } = product || {};

    return (
        <Card>
            <CardHeader 
                title={name} 
                avatar={
                    <Avatar sx={{ bgcolor: 'secondary.main' }}>
                        {name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                titleTypographyProps={{ sx: { fontWeight: 'bold', color: 'primary.main' }}}
            />
            <CardMedia
                sx={{ height: 140, backgroundSize: 'contain', bgcolor: 'primary.light' }}
                image={pictureUrl}
                title={name}
            />
            <CardContent>
                <Typography gutterBottom color='secondary' variant="h5">
                    ${(price / 100).toFixed(2)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {brand} / {type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add to cart</Button>
                <Button size="small">View</Button>
            </CardActions>
        </Card>
    )
}