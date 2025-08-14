import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const Platform = () => {
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get("/platforms/lists/parents")
      .then((res) => {
        setPlatforms(res.data.results);
      })
      .catch((err) => {
        setError(err.message);
      });
  },[]);
   return { platforms, error };
};
export default Platform
