import React, { useEffect, useState } from "react";
import Card from "./card";

const Product = () => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);

  const getProduct = async () => {
    const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${data.length}`);
    const parseData = await response.json();
    setData([...data, ...parseData.products]);
  };
  // console.log(data, "product");

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="container text-center">
      <div className="container text-center">
        <h1>Product</h1>
        <div className="row row-cols-3">
          {data?.map((product) => {
            return <Card key={product.id} data={product} />;
          })}
        </div>
      </div>
      <button className="btn btn-primary" onClick={getProduct}>
        Load more
      </button>
    </div>
  );
};

export default Product;
