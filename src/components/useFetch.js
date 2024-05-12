import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchApi = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);

      const resdata = await response.json();
      setData(resdata); // Set the fetched data to state
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return { data, loading, error };
}

export default useFetch;
