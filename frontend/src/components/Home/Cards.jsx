import { useEffect, useState } from "react";

import Sub from "./Sub";

function Cards() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(page);
  }, [page]);

  async function getData(page = 1) {
    setLoading(true);
    try {
      let res = await fetch(`http://localhost:8080`);
      let data = await res.json();
      setLoading(false);
      console.log(data);
      setData([...data.data]);

      console.log(data);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  return (
    <div>
      <div className={styles.main}>
        {data.map((el) => {
          return <Sub name={el.name} type={el.type} image={el.image} />;
        })}
      </div>
    </div>
  );
}

export default Cards;
