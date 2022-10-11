import { List, SearchBar } from "components/molecules";
import { Loading } from "components/atoms";
import { useItems } from "hooks";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { styled, Pagination } from "@mui/material";

const StyledPagination = styled(Pagination)(({ theme }) => ({
    marginTop: theme.spacing(2),
    "& .MuiButtonBase-root, & .MuiPaginationItem-root": {
        color: "white"
    }
}));

export default function MainList() {
    let { isLoading, data: items, error } = useItems();
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchValue, setSearchValue] = useState(searchParams.get("search"));
    const [page, setPage] = useState(1);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        setFilteredItems(items);
    }, [items]);

    // if (!filteredItems || filteredItems.results.length === 0) {
    //     return "Items not found";
    // }

    const handleChange = (ev) => {
        setSearchValue(ev.target.value);
        setFilteredItems(
            items.filter((item) =>
                item.name.includes(ev.target.value.toLowerCase())
            )
        );
    };

    const changePage = (event, value) => {
        // { isLoading, data: items, error } = useItems(value);
        setPage(value);
    };

    if (isLoading) return <Loading />;

    return (
        <>
            <SearchBar
                value={searchValue}
                handleChange={handleChange}
            ></SearchBar>
            <List items={filteredItems}></List>
            <StyledPagination
                count={10}
                page={page}
                onChange={changePage}
                color="primary"
            />
        </>
    );
}
