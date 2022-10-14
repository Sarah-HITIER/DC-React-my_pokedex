import { styled, Pagination } from "@mui/material";

const StyledPagination = styled(Pagination)(({ theme }) => ({
    marginTop: theme.spacing(2),
    "& .MuiButtonBase-root, & .MuiPaginationItem-root": {
        color: "white"
    }
}));

const PaginationComponents = ({ countPage, page, handlePage }) => (
    <>
        {countPage > 1 ? (
            <StyledPagination
                count={countPage}
                page={page}
                onChange={handlePage}
                color="primary"
            />
        ) : (
            <></>
        )}
    </>
);

export default PaginationComponents;
