import { useState, useEffect } from "react";

function Transfer(url) {
  const [data, setData] = useState();
  const [products, setProducts] = useState();
  const [allproducts, setAllProducts] = useState();
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((json) => setData(json));
    }, 1000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((json) => setProducts(json));
    }, 1000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((json) => setAllProducts(json));
    }, 1000);
  }, []);
  return { data, products, allproducts };
}

export default Transfer;
