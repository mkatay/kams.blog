import {LangProvider} from './contexts/LangContext'
import {RouterProvider} from 'react-router-dom'
import { router } from "./router"

function App() {
  
  return (
    <LangProvider>
       <RouterProvider router={router} />;
    </LangProvider>
    

  )
}

export default App