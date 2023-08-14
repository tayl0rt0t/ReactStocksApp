import './App.css';
import {Routes, Route} from 'react-router-dom'
import Nav from './components/nav';
import Home from './pages/home';
import About from './pages/about';
import StockSym from './pages/stockSym';
import Stocks from './pages/stocks';
import { useState } from 'react';
import stocks from './data/data';
import Symbol from './components/symbol';


function App() {
  const [data, setData] = useState(stocks);
  
  const stockName = data.map((item)=> <Stocks name={item.name} symbol />)
  
  const symbol = data.map((item)=> <Stocks symbol = {item.symbol}/> )
  
  const price = data.map((item)=> (
    <Stocks price = {item.lastPrice} />
  ))

  const change = data.map((item)=>(
    <Stocks change = {item.change}/>
  ))
  return (
    <div>
      
      <Nav />
        <Routes>
          <Route path= '/' element={<Home />}/>
          <Route path = '/about' element={<About/>}/> 
          <Route path = '/stocks/:symbol' element = {<StockSym/>}/>
          <Route path='/stocks' element={<Stocks name={stockName} symbol={symbol} price = {price} change = {change}/>}/>
        </Routes>
      

    </div>
  );
}

export default App;
