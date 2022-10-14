import { useQuery } from "react-query";
import axios from "axios";

const limit = 20;

export function useItems(searchParams = "", page = 1) {
    return useQuery(
        ["items", page, searchParams],
        async () => {
            let results = JSON.parse(sessionStorage.getItem("allItems"));
            if (!results) {
                let res = await axios({
                    url: `https://pokeapi.co/api/v2/pokemon?offset=0&limit=5000`
                });
                results = res.data.results;
                sessionStorage.setItem("allItems", JSON.stringify(results));
            }

            if (searchParams) {
                results = results.filter((item) =>
                    item.name.includes(searchParams.toLowerCase())
                );
            }

            const pages = Math.ceil(results.length / limit);
            const offset = limit * (page - 1);
            return {
                pages,
                count: results.length,
                results: results.slice(offset, offset + limit)
            };
        },
        { keepPreviousData: true }
    );
}
