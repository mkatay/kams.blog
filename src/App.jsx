import { Example } from "./components/Example"
import { Notfound } from "./pages/NotFound"
import {LangProvider} from './contexts/LangContext'
import { SwitchLang } from "./components/SwitchLang"


function App() {
  
  return (
    <LangProvider>
      {/*} <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  <Example/>*/}
  <SwitchLang/>
  <Notfound/>
    </LangProvider>
    

  )
}

export default App
