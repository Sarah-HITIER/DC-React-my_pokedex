import { Grid } from "@mui/material";
import { ListItem } from "../atoms";

export default function List({ items = [] }) {
    if (items.length === 0) {
        return "Items not found";
    }

    return (
        <Grid
            container
            spacing={4}
            // justifyContent="space-evenly"
            alignItems="center"
            sx={{ mt: 0 }}
        >
            {items.map((item) => {
                // Item id
                const paths = item.url.split("/").filter((path) => path !== "");
                const id = paths[paths.length - 1];

                return (
                    <Grid key={id} item xs={6} sm={4} md={3}>
                        <ListItem id={id} name={item.name}></ListItem>
                    </Grid>
                );
            })}
        </Grid>
    );
}