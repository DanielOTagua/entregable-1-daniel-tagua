import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quote.json'
import colors from './json/colors.json'

function App() {
  
  const getRandomArray = (arr) => {
    const indexRandom = Math.floor(arr.length * Math.random()) 
    return arr[indexRandom]
  }

  const [quoteRandom, setQuoteRandom] = useState(getRandomArray(quotes))  
  const [colorRandom, setcolorRandom] = useState(getRandomArray(colors))
  console.log(colorRandom);

  const handleClick = () => {
    setQuoteRandom(getRandomArray(quotes))
    setcolorRandom(getRandomArray(colors))
  }

  const objeStyle = {
    backgroundColor : colorRandom,
  }
  return (
    <div className="App" style={objeStyle}>
      <QuoteBox quoteRandom= {quoteRandom} handleClick ={handleClick} colorRandom = {colorRandom}/>
    </div>
  )
}

export default App
