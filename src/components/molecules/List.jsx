import { Grid, Typography } from "@mui/material";
import { ListItem } from "../atoms";

export default function List({ items = [], numberOfItems = 0 }) {
    if (items.length === 0)
        return <Typography sx={{ mt: "16px" }}>Items not found</Typography>;

    return (
        <Grid container spacing={4} alignItems="center" sx={{ mt: 0 }}>
            {items.map((item) => {
                let id = item.id;
                if (!id) {
                    const paths = item.url
                        .split("/")
                        .filter((path) => path !== "");
                    id = paths[paths.length - 1];
                }

                return (
                    <Grid key={id} item xs={6} sm={6} md={3}>
                        <ListItem id={id} name={item.name}></ListItem>
                    </Grid>
                );
            })}
        </Grid>
    );
}
