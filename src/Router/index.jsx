import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from '../views/Home'
import Events from '../views/Events'
import About from '../views/About'
import NotFound from '../views/NotFound'

function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/events" element={<Events/>} />
        <Route exact path="/about" element={<About/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;