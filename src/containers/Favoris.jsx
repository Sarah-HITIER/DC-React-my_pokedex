import { List, PaginationComponent } from "components/molecules";
import { Loading } from "components/atoms";

import { useState, useEffect } from "react";
import { Typography } from "@mui/material";

const limit = 20;

export default function Favoris() {
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem("favorites")) || []
    );
    const [filteredFavorites, setFilteredFavorites] = useState(favorites);
    const [isLoading, setLoading] = useState(false);

    const [page, setPage] = useState(1);

    const [countPage, setCountPage] = useState(
        Math.ceil(favorites.length / limit)
    );
    const [numberOfItems, setNumberOfItems] = useState(favorites.length);

    useEffect(() => {
        setLoading(true);
        window.addEventListener("storage", () => {
            setFavorites(JSON.parse(localStorage.getItem("favorites")));
        });
        setNumberOfItems(favorites.length);
        setCountPage(Math.ceil(favorites.length / limit));
        const offset = limit * (page - 1);
        let newFilteredFavorites = favorites.slice(offset, offset + limit);
        if (favorites.length > 0 && newFilteredFavorites.length === 0)
            setPage(page - 1);
        setFilteredFavorites(newFilteredFavorites);
        setLoading(false);
    }, [favorites, page]);

    if (isLoading) return <Loading />;

    return (
        <>
            <Typography sx={{ mt: "16px" }}>
                {numberOfItems} favorites
            </Typography>
            <List items={filteredFavorites}></List>
            <PaginationComponent
                countPage={countPage}
                page={page}
                handlePage={(_, value) => setPage(value)}
            ></PaginationComponent>
        </>
    );
}
