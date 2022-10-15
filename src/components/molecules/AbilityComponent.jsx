import { AbilityBanner } from "components/atoms";
import { Box, Typography } from "@mui/material";

const AbilityComponent = ({ abilities = [] }) => (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h5">Abilities:</Typography>
        {abilities.slice(0, 3).map((ability) => {
            return (
                <AbilityBanner
                    key={ability.ability.name}
                    ability={ability.ability}
                />
            );
        })}
    </Box>
);

export default AbilityComponent;
