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
import { getImageById, convertToUpperCase } from "utils";

const StyledCard = styled(Card)(({ theme }) => ({
    color: theme.palette.text.main,
    textAlign: "center",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(40px)",
    boxShadow: "0px 10px 10px rgba(46, 54, 68, 0.03)"
}));

export default function Item({ id, name }) {
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem("favorites")) || []
    );

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
        window.dispatchEvent(new Event("storage"));
    }, [favorites]);

    const newFavorite = ({ id, name }) => {
        let addFavorites = true;
        let array = JSON.parse(localStorage.getItem("favorites")) || [];

        array.map((item, key) => {
            if (item.id === id) {
                array.splice(key, 1);
                addFavorites = false;
            }
        });
        if (addFavorites) {
            array.push({ id, name });
        }
        setFavorites(array);
    };

    return (
        <StyledCard sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="150"
                image={getImageById(id)}
                alt={convertToUpperCase(name)}
                sx={{
                    width: "auto",
                    margin: "auto"
                }}
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
                    justifyContent: "space-evenly",
                    gap: 1
                }}
            >
                <Button
                    variant="contained"
                    component={RouterLink}
                    to={"/" + name}
                >
                    Learn More
                </Button>
                <Button
                    variant="contained"
                    onClick={() => newFavorite({ id, name })}
                >
                    {favorites.some((fav) => fav.id === id) ? (
                        <Favorite />
                    ) : (
                        <FavoriteBorder />
                    )}
                </Button>
            </CardActions>
        </StyledCard>
    );
}
