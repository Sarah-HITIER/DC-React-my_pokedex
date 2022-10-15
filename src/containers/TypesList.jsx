import { List, TypesBar, PaginationComponent } from "components/molecules";
import { TypesBanner, Loading } from "components/atoms";

import { useItemsByTypes, useTypes } from "hooks";

import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

export default function TypesList() {
    const [page, setPage] = useState(1);
    const [countPage, setCountPage] = useState(1);

    const [selectedType, setSelectedType] = useState("normal");

    const { isLoading, data } = useItemsByTypes(selectedType, page);
    const [filteredItems, setFilteredItems] = useState([]);
    const [numberOfItems, setNumberOfItems] = useState(0);

    const { data: types } = useTypes();

    useEffect(() => {
        if (data) {
            setFilteredItems(data.results);
            setCountPage(data.pages);
            setNumberOfItems(data.count);
        }
    }, [data]);

    const handleSelectedType = (_, value) => {
        setPage(1);
        setSelectedType(value);
        setNumberOfItems(data.count);
    };

    if (isLoading) return <Loading />;

    return (
        <>
            <TypesBar
                types={types}
                handleSelectedType={handleSelectedType}
            ></TypesBar>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                    mt: "24px"
                }}
            >
                <TypesBanner type={selectedType}></TypesBanner>
                <Typography sx={{ mt: "16px" }}>
                    {numberOfItems} results
                </Typography>
            </Box>
            <List items={filteredItems}></List>
            <PaginationComponent
                countPage={countPage}
                page={page}
                handlePage={(_, value) => setPage(value)}
            ></PaginationComponent>
        </>
    );
}
