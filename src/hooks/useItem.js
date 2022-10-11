import { useQuery } from "react-query";
import axios from "axios";

export function useItem(name) {
    return useQuery("item", async () => {
        let res = await axios({
            url: `https://pokeapi.co/api/v2/pokemon/${name}`
        });
        return res.data;
    });
}
