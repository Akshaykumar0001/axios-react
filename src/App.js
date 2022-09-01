import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((reponse) => {
        console.log(reponse)
        setData(reponse.data)
      });
  }, [])

  console.log("this is the data", data);
  const Deletedata = (id) => {
    let alldata = [...data];
    let newData = alldata.filter(product => {
      if (product.id !== id) {
        return product;
      }
    })
    setData(newData);
  }

  if (data === null) {
    return <h2>Loading ... </h2>
  }

  return (
    <>
      <div className="main-conatiner">
        <div className="row">
          {
            data.map((value) => {
              return (
                <div className='col-1' key={value.id}>
                  <div className='card' style={{ width: "18rem" }}>
                    <h4 className='category'>{value.category} </h4>
                    <img src={value.image} className="image" alt='first' />
                    <h5 className='cardtitle'>{value.title}</h5>
                    <h5 className='price'> ${value.price}</h5>
                    <p className='card-text'>{value.description}</p>
                    <div className='btn'>
                      <button onClick={() => Deletedata(value.id)}>Delete data</button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

    </>
  );
}

export default App;
