import axios from "axios";
import { useState, useEffect } from "react";
import { Meteorite } from "../shared/meteorite.model";

export const useMeteoriteData = () => {
  const [meteorites, setMeteorites] = useState<Meteorite[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          "https://data.nasa.gov/resource/gh4g-9sfh.json"
        );

        setMeteorites(response.data);
      } catch (error) {
        console.error(error);
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An error occurred while fetching the data.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { meteorites, loading, error };
};
