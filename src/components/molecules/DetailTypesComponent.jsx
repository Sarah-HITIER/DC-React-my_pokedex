import { TypesBanner } from "components/atoms";
import { Box } from "@mui/material";

const DetailTypesComponent = ({ types = [] }) => (
    <Box
        sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2
        }}
    >
        {types.map((type) => {
            return (
                <TypesBanner
                    key={type.type.name}
                    type={type.type.name}
                ></TypesBanner>
            );
        })}
    </Box>
);

export default DetailTypesComponent;
