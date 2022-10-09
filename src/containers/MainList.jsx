import List from "components/List";
import { useItems } from "hooks";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { styled, InputBase, Pagination } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
    display: "flex",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: theme.shape.borderRadius
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    color: theme.palette.text.main,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(0, 2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: theme.palette.text.main,
    width: "100%",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: theme.spacing(2)
    }
}));

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

    if (isLoading) return "Loading...";

    return (
        <>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                    value={searchValue}
                    onChange={handleChange}
                />
            </Search>
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
