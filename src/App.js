import { RouterProvider } from "react-router";
import { router } from "./routes/Route/Route";


function App() {
  return (
    <div className='container mx-auto md:p-0 p-3'>
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
