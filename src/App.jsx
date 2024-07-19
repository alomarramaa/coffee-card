
//build app here
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {Home, About, Drinks, Syrups, Contact} from "./pages";
import Dock from "./components/Dock";
import Navbar from "./components/Navbar";
import '@fontsource/italiana';

const App = () => {
  return (

    //<main style={{ backgroundColor: '#663D26' }}>
  <main className="bg-amber-900">
    <Router>
       <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}/>
                <Route path="/syrups" element={<Syrups />}/>
                <Route path="/drinks" element={<Drinks />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
            <Dock/>
    </Router>
  </main>
  )
}

export default App
