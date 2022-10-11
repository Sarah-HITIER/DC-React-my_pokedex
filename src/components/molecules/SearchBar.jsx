import SearchIcon from "@mui/icons-material/Search";
import { styled, InputBase } from "@mui/material";

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

const SearchBar = ({ value, handleChange }) => (
    <Search>
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            defaultValue={value}
            // value={searchValue}
            onChange={handleChange}
        />
    </Search>
);

export default SearchBar;
