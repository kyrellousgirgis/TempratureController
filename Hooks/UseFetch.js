import { useEffect, useState } from "react";

const useFetch = (service, onSuccess) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await service?.();
        console.log(response.data);
        onSuccess(response?.data);
        setData(response?.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [service]);

  return { data, error, loading };
};

export default useFetch;
