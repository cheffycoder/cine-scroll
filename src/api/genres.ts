import { get } from "@api";

type paramTypes = Record<string, string | number>;

const getGenres = async () => {
  try {
    const { data : { genres } } = await get("genre/movie/list");
    return genres;
  } catch (e) {
    console.log(e);
  }
};

export { getGenres };
