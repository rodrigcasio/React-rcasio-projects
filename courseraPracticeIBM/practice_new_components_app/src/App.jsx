import AddRemoveItemsButtons from './components/AddRemoveItemsButtons.jsx'
import ConditionalArrayEx from './components/ConditionalArrayEx.jsx'
import CounterButton from './components/CounterButton.jsx'
import CounterButton2 from './components/CounterButton2.jsx'
import FirstChildAppEx from './components/FirstChildAppEx.jsx'
import IntervalComponent from './components/IntervalComponent.jsx'
import ParentComp from './components/ParentComp.jsx'
import SecondChildAppEx from './components/SecondChildAppEx.jsx'
import StateManagement from './components/StateManagement.jsx'
import ThirdChildAppEx from './components/ThirdChildAppEx.jsx'
import ToggleMessage from './components/ToggleMessage.jsx'
import FirstChildComponent from './componentsDOMUpdate/FirstChildComponent.jsx'
import SecondChildComponent from './componentsDOMUpdate/SecondChildCompoent.jsx'

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
      <CounterButton2 />
      <IntervalComponent />
      <AddRemoveItemsButtons />
      <ConditionalArrayEx />

      {/* Adding Components for example of visualizing how React's virtual DOM udpates only the necessary parts of the DOM */}
      <FirstChildComponent />
      <SecondChildComponent />
    </>
  )
}

export default App


