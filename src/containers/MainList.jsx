import { List, SearchBar, PaginationComponent } from "components/molecules";
import { Loading } from "components/atoms";
import { useItems } from "hooks";
import { useState, useEffect } from "react";
import { createSearchParams, useSearchParams } from "react-router-dom";
import { Typography } from "@mui/material";

export default function MainList() {
    const [page, setPage] = useState(1);
    const [countPage, setCountPage] = useState(1);

    const [searchParams, setSearchParams] = useSearchParams();

    const { isLoading, data } = useItems(searchParams.get("search"), page);
    const [filteredItems, setFilteredItems] = useState([]);
    const [numberOfItems, setNumberOfItems] = useState(0);

    useEffect(() => {
        if (data) {
            setFilteredItems(data.results);
            setCountPage(data.pages);
            setNumberOfItems(data.count);
        }
    }, [data]);

    const handleChange = (ev) => {
        setPage(1);
        setSearchParams(createSearchParams({ search: ev.target.value }));
    };

    if (isLoading) return <Loading />;

    return (
        <>
            <SearchBar
                value={searchParams.get("search")}
                handleChange={handleChange}
            ></SearchBar>
            <Typography sx={{ mt: "16px" }}>{numberOfItems} results</Typography>
            <List items={filteredItems}></List>
            <PaginationComponent
                countPage={countPage}
                page={page}
                handlePage={(_, value) => setPage(value)}
            ></PaginationComponent>
        </>
    );
}
