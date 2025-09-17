// 38a4fdf1c65149e080766fcc70e79d17
import axios from "axios";
export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}
export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "38a4fdf1c65149e080766fcc70e79d17",
  },
});
