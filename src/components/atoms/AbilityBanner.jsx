import { convertToUpperCase } from "utils";

import { styled } from "@mui/material";

const AbilityItem = styled("span")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    padding: 4,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 16
}));

const AbilityBanner = ({ ability }) => (
    <AbilityItem>{convertToUpperCase(ability.name)}</AbilityItem>
);

export default AbilityBanner;
