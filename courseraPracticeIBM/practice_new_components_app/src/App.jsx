import CounterButton from './components/CounterButton.jsx'
import FirstChildAppEx from './components/FirstChildAppEx.jsx'
import ParentComp from './components/ParentComp.jsx'
import SecondChildAppEx from './components/SecondChildAppEx.jsx'
import StateManagement from './components/StateManagement.jsx'
import ThirdChildAppEx from './components/ThirdChildAppEx.jsx'
import ToggleMessage from './components/ToggleMessage.jsx'

function App() {
    const employee_id = 10007;    // example of passing prop dynamically to the SecondChildAppEx component using {}.
  return (
    <>
      <CounterButton />
      <ParentComp />
      <FirstChildAppEx  name="Rodrigo" /> 
      <SecondChildAppEx name="Rodrigo Casio Garcia" employeeID={employee_id} dept_name="Software Engineering" />

      <ThirdChildAppEx name="Rodrigo Casio" employeeId={employee_id} dept_id={577} increase={10000} />
      <StateManagement />
      <ToggleMessage />
    </>
  )
}

export default App


