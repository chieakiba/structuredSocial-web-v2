import React from 'react'
import NavigationBar from './navbar'
import Title from './title'
import Services from './services'
import CounterContainer from './counter/redux/CounterContainer'
import Footer from './footer'
import ModalContainer from './modals/ModalContainer'

const App = () => (
    <div>
      <NavigationBar/>
      <Title/>
      <Services/>
      <CounterContainer />
      <ModalContainer />
      <Footer/>
    </div>
);

export default App
