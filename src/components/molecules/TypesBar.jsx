import { TypesBanner } from "components/atoms";
import { Button, Tabs } from "@mui/material";

export default function TypesBar({ types = [], handleSelectedType }) {
    return (
        <>
            <Tabs
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="scrollable auto tabs"
                sx={{ alignItems: "center" }}
            >
                {types.map((type) => {
                    return (
                        <Button
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
            </Tabs>
        </>
    );
}
