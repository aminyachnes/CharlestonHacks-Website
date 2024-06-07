
import Routes from './router/Routes'
import Route from './router/Route'
// ** Views
import Home from './views/Home'
import NotFound from './views/NotFound'

function App() {
  
  return (
    <>
      <Routes>
        <Route index layout={'Card'} element={Home}/>
        <Route path='*' layout={'Card'} element={NotFound}/>
      </Routes>
    </>
  )
}

export default App
