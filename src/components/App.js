import React from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import {useEffect, useState} from 'react'
const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [wallet, setWallet] = useState(100)

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch(API)
        const sushis = await response.json()
        const updatedSushis = sushis.map(sushi => {
          return {...sushi, eaten:false}})
        setSushis(updatedSushis)
      }catch(error){
        alert(error)
      }
  
    }
    fetchData()
    
  }, [])

  const handleEat = (price, id) => {
    if (wallet >= price){
      setWallet(currentMoney => currentMoney - price)
     const updatedSushis = sushis.map(sushi => {
        return  sushi.id === id ? {...sushi, eaten: true} : sushi
      })
      setSushis(updatedSushis)
    }
  }

  const handleMore = () => {
    const shuffleArray = [...sushis.slice(4), ...sushis.slice(0,4)]
    setSushis(shuffleArray)
  }
  
  const eatenSushi = sushis.filter(sushi => sushi.eaten)
  return (
    <div className="app">
      <SushiContainer handleMore={handleMore} handleEat={handleEat} sushis={sushis}/>
      <Table wallet= {wallet} plates={eatenSushi} />
    </div>
  );
}

export default App;
