import { Switch, Route } from 'react-router-dom'
import './App.css'
import SiparisFormu from "./components/SiparisFormu"
import AcilisEkrani from './components/AcilisEkrani'
import MenuB from './components/MenuB.JSX'
import Footer from './components/Footer'
import Menu from './components/Menu'
import PizzaMenu from './components/PizzaMenu'
import Slogan from './components/Slogan'
import HizliMenu from './components/HizliMenu'
import Success from './components/Success'






function App() {
 

  return (
    <Switch>
      <Route exact path="/">
        <AcilisEkrani />
        <Menu />
        <HizliMenu />
        <Slogan />
        <MenuB />
        <PizzaMenu />
        <Footer />
      </Route>

      <Route path="/siparis">
        <SiparisFormu />
      </Route>

      <Route path="/success">
        <Success />
      </Route>
    </Switch>
  )
}

export default App
