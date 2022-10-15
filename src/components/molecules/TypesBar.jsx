import { TypesBanner } from "components/atoms";
import { Button, Box } from "@mui/material";

export default function TypesBar({ types = [], handleSelectedType }) {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,
                    justifyContent: "center"
                }}
            >
                {types.map((type) => {
                    return (
                        <Button
                            key={type.name}
                            onClick={(event) =>
                                handleSelectedType(event, type.name)
                            }
                            disableRipple
                            sx={{
                                color: "inherit",
                                minWidth: "auto",
                                padding: 0
                            }}
                        >
                            <TypesBanner
                                key={type.name}
                                type={type.name}
                            ></TypesBanner>
                        </Button>
                    );
                })}
            </Box>
        </>
    );
}
