import React from 'react';
import './query.css';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
//import Database from './pages/data';
import { useState } from "react";
import { useEffect } from "react";
import { setData } from "react";


async function fetchWithTimeout(url, config, options = {}) {
    const { timeout = 10000 } = options;
  
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
  
    const response = await fetch(url, config, {
      ...options,
      signal: controller.signal
    });
    clearTimeout(id);
  
    return response;
  }

  
function Query() {
    useEffect(() => {
      fetch('localhost:8081/ingredients')
      .then(res => res.json())
      .then(data => setCustomerIngredients(data))
      .catch(err => console.log(err));
    })
  
    const [name, setName] = useState([]);
    const [ingredients, setIngredients] = useState("");
    const [people, setPeople] = useState("");
    const [customerIngredients, setCustomerIngredients] = useState([]);
    const url = 'REST API URL'
    // useEffect(() => {
    //   names()
    // }, [])
    // const names = async () => {
    //   const response = await fetch('')
    // }
    const handleSubmit = async (e) => {
      e.preventDefault();
      const config = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36'
        },
        body: JSON.stringify({
          query: "I have to use up the rest of the following ingredients. Please suggest recipes for "+ people +" persons using the following ingredients: " + ingredients +""
          //query: "I have to use up the rest of the following ingredients. Please suggest recipes for 1 persons using the following ingredients: " + ingredients +""
        })
      }
      try {
        let res = await fetchWithTimeout(url,config, {
          timeout: 10000
        });
        if (res.status === 200) {
          alert(await res.json());
          setName(await res.json())
        } else {
          alert("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
    };
    return (
        <div>
            {/* <Router>
                <Navbar />
                <Routes>
                    <Route path='/data' element={<Database />} />
            <Route path='/home' element={<Home />} />
                </Routes>
            </Router> */}
        <header>
            <h1>Submit list of ingredients within the form below
            </h1>
            <form onSubmit={handleSubmit}>
              <label>Ingredient list:
                <input 
                type="text" 
                value={ingredients} 
                onChange={(e) => setIngredients(e.target.value)} 
                align="middle"
                />
              </label>
              <label>Amount of people the recipe is for:
                <input 
                type="text"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                align="middle"
                />
              </label>
              <input type="submit"/>
            </form>
            <ol className="list-group list-group-numbered">
                {name.map((data) => {
                  return(
                  <li className="list-group-item" key={data.id}> {data.title} </li>
                  )
                })}
            </ol>
            </header>
        </div>
        );
    }
export default Query;
