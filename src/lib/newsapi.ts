import axios from "axios";

const API_KEY = "3fc668c4412748048ee5e3c1fed61fc5";
const BASE_URL = "https://newsapi.org/v2";

interface IArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

// Function to call api from NewsAPI. Used for Server Component fetching data
export async function getNewsHeadline(): Promise<IArticle[]> {
  try {
    const res = await axios.get(
      `${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`
    );

    return res.data.articles;
  } catch (error) {
    console.log(error);
    return [];
  }
}
