import { get } from "@api";
import { tMovie } from "@components/year-section";

type paramTypes = Record<string, string | number>;

const getMovies = async (params: paramTypes) => {
  try {
    const {data: { results }} = await get("discover/movie", { params });
    return results;
  } catch (e) {
    console.log(e)
  }
};

export { getMovies };
