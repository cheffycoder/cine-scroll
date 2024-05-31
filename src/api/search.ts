import { get } from "./index";

type paramTypes = Record<string, string | number>;

/*
{query: string}
*/

const searchMovie = async (params: paramTypes) => {
  try {
    const { data: results } = await get("/search/movie", { params });
    return results;
  } catch (e) {
    console.log(e);
  }
};

export { searchMovie };
