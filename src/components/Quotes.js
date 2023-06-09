import { useEffect, useState } from 'react';
import Loading from './Loading';

const Quotes = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://api.api-ninjas.com/v1/quotes?category=movies',
        {
          method: 'GET',
          headers: {
            'X-Api-Key': 'arIFtVZGcs2vT1zIZyli+g==v755qa3tuyC6sjFm',
          },
          contentType: 'application/json',
        },
      );

      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch {
      setError(true);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (error) return <p className="error">Sorry, something went wrong !!!</p>;

  return (
    <div className="Content content-2">
      <div className="quotes" data-testid="Quote">
        {loading ? (
          <Loading />
        ) : (
          data.map((item) => <h2 key={item.author}>{item.quote}</h2>)
        )}
      </div>
    </div>
  );
};

export default Quotes;
