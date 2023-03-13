import React, { useEffect, useState } from "react";
import StockList from './StockList';
import InputNewStockListItem from './InputNewStockListItem';

const BrotLogic = () => {
  
  const [data, setData] = useState(null);

  const fetchData = () => {
    return fetch("http://localhost:8080/stocks", {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
      }),
      body: "useremail=marcmatthiae@gmail.com" // <-- Post parameters
    })
      .then((response) => response.json())
      .then((actualData) => setData(actualData))
  }

  const postNewItem = (newItem) => {
    fetch("http://localhost:8080/stock/insert", {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json', // <-- Specifying the Content-Type
      }),
      body: JSON.stringify({
        itemname: newItem.itemname,
        userid: 1,
        quantity: newItem.quantity,
        unit: newItem.unit
      }) // <-- Post parameters
    })
  }

  useEffect(() => {
    fetchData();
  }, [])

  const addTodoItem = (title) => {
    const newItem = {
      itemname: title,
      quantity: 1,
      unit: 'U',
    };
    setData([...data, newItem]);
    postNewItem(newItem);
  };

  if(!data) return '...';

  return (
    <>
      <InputNewStockListItem addTodoItem={addTodoItem}/>
      <StockList stockprops={data} />
    </>
  )
}
export default BrotLogic;