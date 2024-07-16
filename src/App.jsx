
//build app here
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (

    //<main style={{ backgroundColor: '#663D26' }}>
  <main className="bg-slate-300/20">
    <Router>
       <Navbar />
            <Routes>
                <Route path="/" element={'Home'} />
                <Route path="/about" element={'About'}/>
                <Route path="/syrups" element={'Syrups'}/>
                <Route path="/drinks" element={'Drinks'}/>
                <Route path="/contact" element={'Contact'}/>
            </Routes>
    </Router>
    
  </main>
  )
}

export default App
