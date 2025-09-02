import CounterButton from './components/CounterButton.jsx'
import FirstChildAppEx from './components/FirstChildAppEx.jsx'
import ParentComp from './components/ParentComp.jsx'

function App() {

  return (
    <>
      <CounterButton />
      <ParentComp />
      <FirstChildAppEx  name="Rodrigo" /> 
    </>
  )
}

export default App


