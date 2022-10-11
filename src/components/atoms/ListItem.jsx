import {
    styled,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button
} from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { convertToUpperCase } from "utils";

const StyledCard = styled(Card)(({ theme }) => ({
    color: theme.palette.text.main,
    textAlign: "center",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(40px)",
    boxShadow: "0px 10px 10px rgba(46, 54, 68, 0.03)"
}));

export default function Item({ id, name }) {
    const [favorites, setFavorites] = useState([]);

    const handleFavorites = (event) => {
        console.log("favorites" + name);
    };

    return (
        <StyledCard sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                    id +
                    ".png"
                }
                alt={convertToUpperCase(name)}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {convertToUpperCase(name)}
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}
            >
                <Button
                    variant="contained"
                    component={RouterLink}
                    to={"/" + name}
                >
                    Learn More
                </Button>
                <Button variant="contained" onClick={handleFavorites}>
                    {favorites.includes(name) ? (
                        <Favorite />
                    ) : (
                        <FavoriteBorder />
                    )}
                </Button>
            </CardActions>
        </StyledCard>
    );
}
