import { MeasurementBox } from "components/atoms";
import { Box, Typography } from "@mui/material";

const MeasurementsComponent = ({ weight = 0, height = 0 }) => (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h5">Measurements:</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <MeasurementBox name="weight" value={weight}></MeasurementBox>
            <MeasurementBox name="height" value={height}></MeasurementBox>
        </Box>
    </Box>
);

export default MeasurementsComponent;
