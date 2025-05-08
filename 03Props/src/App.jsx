import "./App.css";
import { Card } from "./Components/Card";
function App() {
  const newObj={
    name:"Raju",
    age:14
  };
  const newArr=[1,2,3];
  return (
    <>
      <h1 className="bg-green-400 text-black rounded-2xl p-2">Tailwind Test</h1>
      <Card username="Pushpam" btnText="Click me"/>
      <Card username="RajuRashtogi" />
    </>
  );
}

export default App;
