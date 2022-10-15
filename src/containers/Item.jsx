import {
    DetailTypesComponent,
    AbilityComponent,
    MeasurementsComponent,
    StatsComponent
} from "components/molecules";
import { Loading } from "components/atoms";

import { useItem } from "hooks";
import { convertToUpperCase } from "utils";

import { useParams } from "react-router-dom";
import { styled, Typography, Box } from "@mui/material";

const ColumnBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(4),
    flexGrow: 1
}));

export default function Item() {
    const { name } = useParams();
    const { isLoading, data: item } = useItem(name);

    if (isLoading) return <Loading />;

    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 4
            }}
        >
            <ColumnBox sx={{ alignItems: "center" }}>
                <Typography variant="h4" align="center">
                    {convertToUpperCase(name)}
                </Typography>

                <DetailTypesComponent types={item.types} />

                <Box
                    component="img"
                    sx={{
                        width: "70%"
                    }}
                    src={item.sprites.other.home.front_default}
                    alt={`${convertToUpperCase(name)}`}
                />
            </ColumnBox>

            <ColumnBox>
                <AbilityComponent abilities={item.abilities} />
                <MeasurementsComponent
                    weight={item.weight}
                    height={item.height}
                />
                <StatsComponent stats={item.stats} />
            </ColumnBox>
        </Box>
    );
}
