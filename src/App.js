import { RouterProvider } from "react-router";
import { router } from "./routes/Route/Route";
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className='container mx-auto md:p-0 p-3'>
      <RouterProvider router = {router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
