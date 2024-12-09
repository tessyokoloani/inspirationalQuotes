import React, {useState, useEffect} from 'react'
import './App.css'

function App() {
  const [ quote, setQuote] = useState("Valar Moghulis: All men must die")
  const [ author, setAuthor] = useState("George R. R. Martin")




    const fetchQuote = async() => {
            const response = await fetch('https://inspiquotes.tessysolutions.site/api/quotes/quote')
            const data = await response.json()
            setQuote(data.quote)
            setAuthor(data.author)
        }

    useEffect(()=>{
        fetchQuote()

    }, [])


  return (
    <>
      <div className="App">
        
        <h3>Quote: {quote}</h3>
        <h4>Author: {author}</h4>
        <br />
        <div className="card">
          <button onClick={fetchQuote} className='logo, hover'>
            Get Random Quote
          </button>
        </div>
      </div>
    </>
  )
}

export default App
