import axios from "axios";
import { useState, useEffect } from "react";
import { Meteorite } from "../shared/meteorite.model";
import { MeteoriteData } from "../shared/meteoriteData.model";

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
        const newData = response.data.map((meteorite: MeteoriteData) => {
          const year =
            meteorite.year !== undefined
              ? parseInt(meteorite.year.slice(0, 4))
              : -1;
          return {
            id: meteorite.id,
            name: meteorite.name,
            mass: parseFloat(meteorite.mass).toFixed(2),
            recClass: meteorite.recclass,
            year: year,
          };
        });

        setMeteorites(newData);
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
