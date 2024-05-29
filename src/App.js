
import routes from './routes/routes.config'
import Navbar from './components/Navbar/Navbar'
import {Routes, Route } from 'react-router-dom'
function App() {
  return (
   <>
  <Routes>
        <Route path="/" element={<Navbar/>}>
          {routes.map((route)=>{
           return route.index ? (
            <Route index element={route.element}/>
            ) : (
              <Route path={route.path} element={route.element} />
            )
          })}
        </Route>
      </Routes>
   </>
  );
}

export default App;
