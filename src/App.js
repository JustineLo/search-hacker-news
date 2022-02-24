import React from 'react'
import SearchForm from './SearchForm'
import Stories from './Stories'
import Buttons from './Buttons'
import Fade from 'react-reveal/Fade';

function App() {
  return (
    <>
      <SearchForm />
      <Buttons />
      <Stories />
      <footer>
        <Fade top delay={500}>
          <h4>© 2022 - Crée avec ❤ par <a href="https://justinelo-portfolio.netlify.app">Justine Lo</a></h4>
        </Fade>
      </footer>
    </>
  )
}

export default App