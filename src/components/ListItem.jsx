import { Link } from "react-router-dom";
import {
    styled,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const StyledCard = styled(Card)(({ theme }) => ({
    color: theme.palette.text.main,
    textAlign: "center",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(40px)",
    boxShadow: "0px 10px 10px rgba(46, 54, 68, 0.03)"
}));

export default function Item({ id, name }) {
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
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    // variant="primary"
                    component={RouterLink}
                    to={"/" + name}
                >
                    Learn More
                </Button>
            </CardActions>
        </StyledCard>

        // <li>
        //     <h2>
        //         <Link
        //             to="test"
        //             // to={slugify(title, {
        //             //     lower: true
        //             // })}
        //         >
        //             <span
        //                 className={`pellet ${
        //                     status ? " pellet--green" : " pellet--red"
        //                 }`}
        //             ></span>
        //             {title}
        //         </Link>
        //     </h2>
        //     <p>{children}</p>
        // </li>
    );
}
