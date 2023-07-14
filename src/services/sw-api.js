import axios from "axios";


const BASE_URL =`https://swapi.dev/api/`;

export function getAllStarShips () {
    const url = `${BASE_URL}starships/`;
    return axios.get(url);
}


