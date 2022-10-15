import { convertToUpperCase } from "utils";

import { styled, Typography } from "@mui/material";
import LinearProgress, {
    linearProgressClasses
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 8,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[300]
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5
    }
}));

const LinearProgressComponent = ({ stat = "", value = 0 }) => (
    <div>
        <Typography sx={{ mb: 1 }}>{convertToUpperCase(stat)} :</Typography>
        <BorderLinearProgress variant="determinate" value={value} />
    </div>
);

export default LinearProgressComponent;
