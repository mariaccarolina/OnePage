import React from "react"
import Header from "./assets/Components/Header/Header"
import Footer from "./assets/Components/Footer/Footer"
import Main from "./assets/Components/Main/Main"
import GlobalStyle from './global'


function App() {

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Main/>
     <Footer />
    </div>
  )
}

export default App
