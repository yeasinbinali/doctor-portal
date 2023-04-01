import { RouterProvider } from "react-router";
import { router } from "./routes/Route/Route";


function App() {
  return (
    <div className='container mx-auto'>
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
