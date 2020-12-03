import React from 'react'
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [books, setBooks] = useState([]);


    useEffect(() => {
      setInterval(() => {
        fetch('/api/books').
          then(res => res.json()).
          then(data => {
            console.log(data)
            setBooks(data)
          })
      }, 2000);
    }, [])

  const addBook = () => {
    const name = prompt("Add Book's Name");
    const author = prompt("Add Book Author's Name");

    fetch('/api/add', {
      method: "POST",
      body: JSON.stringify({ name, author })
    }).then(req => req.json()).then(data => console.log(data))
  }


  if (!books.length) return <h2> Loading . . . </h2>

  return (
    <div>

      Books <br/>

      {books.map((book, ind) => {
        return(
        <div key={ind}> {`Name: ${book.name}  |  Author: ${book.author}` }</div>
        )
      })}

      <button onClick={()=> addBook()} >  Add Book </button>

    </div>
  );
}

export default App;
