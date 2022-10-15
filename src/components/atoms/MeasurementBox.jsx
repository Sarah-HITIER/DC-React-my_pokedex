import HeightIcon from "@mui/icons-material/Height";
import MonitorWeightOutlinedIcon from "@mui/icons-material/MonitorWeightOutlined";
import { Box, Typography } from "@mui/material";

const MeasurementBox = ({ name, value }) => (
    <Box sx={{ display: "flex", gap: 1 }}>
        {name === "weight" ? (
            <>
                <MonitorWeightOutlinedIcon />
                <Typography>{value / 10} kg</Typography>
            </>
        ) : (
            <></>
        )}
        {name === "height" ? (
            <>
                <HeightIcon />
                <Typography>{value * 10} cm</Typography>
            </>
        ) : (
            <></>
        )}
    </Box>
);

export default MeasurementBox;
