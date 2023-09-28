import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router';
import Toaster from 'react-hot-toast';

function App() {
  return (
    <>
     <RouterProvider router={router}/> 
     <Toaster></Toaster>
    </>
  )
}

export default App
