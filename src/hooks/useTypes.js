import { useQuery } from "react-query";
import axios from "axios";

export function useTypes() {
    return useQuery("types", async () => {
        let res = await axios({
            url: "https://pokeapi.co/api/v2/type"
        });
        return res.data.results;
    });
}
