import { LinearProgressComponent } from "components/atoms";
import { Box, Typography } from "@mui/material";

const StatsComponent = ({ stats = [] }) => (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h5">Stats:</Typography>
        {stats.map((stat) => {
            return (
                <LinearProgressComponent
                    key={stat.stat.name}
                    stat={stat.stat.name}
                    value={stat.base_stat}
                />
            );
        })}
    </Box>
);

export default StatsComponent;
