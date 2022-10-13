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
    const [page, setPage] = useState(1);
    const [countPage, setCountPage] = useState(1);

    const { isLoading, data, error } = useItems(page);
    const [filteredItems, setFilteredItems] = useState([]);

    const [searchParams] = useSearchParams();
    const [searchValue, setSearchValue] = useState(searchParams.get("search"));

    useEffect(() => {
        if (data) {
            setFilteredItems(data.results);
            setCountPage(data.pages);
        }
    }, [data]);

    // if (!filteredItems || filteredItems.results.length === 0) {
    //     return "Items not found";
    // }

    const handleChange = (ev) => {
        setSearchValue(ev.target.value);
        setFilteredItems(
            data.results.filter((item) =>
                item.name.includes(ev.target.value.toLowerCase())
            )
        );
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
                count={countPage}
                page={page}
                onChange={(_, value) => setPage(value)}
                color="primary"
            />
        </>
    );
}
