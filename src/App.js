
import routes from './routes/routes.config'
import Navbar from './components/Navbar/Navbar'
import {Routes, Route } from 'react-router-dom'
function App() {
  return (
   <>
  <Routes>
        <Route path="/" element={<Navbar/>}>
          {routes.map((route, index)=>{
           return route.index ? (
            <Route index element={route.element} key={index}/>
            ) : (
              <Route path={route.path} element={route.element} key={index}/>
            )
          })}
        </Route>
      </Routes>
   </>
  );
}

export default App;
