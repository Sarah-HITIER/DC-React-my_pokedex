import { TypesBanner } from "components/atoms";
import { Tabs } from "@mui/material";

export default function TypesBar({ types = [] }) {
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
                        <TypesBanner
                            key={type.name}
                            type={type.name}
                        ></TypesBanner>
                    );
                })}
            </Tabs>
        </>
    );
}
