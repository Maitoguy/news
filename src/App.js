import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Home from './components/home';

function App() {

  const routes = createRoutesFromElements(
    <>
      <Route path="/news" element={<Home/>}/>
    </>
  )

  const router = createBrowserRouter(routes);

  return (

    <RouterProvider router={router}/>
    
  );
}

export default App;
