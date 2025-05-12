import './App.css'
import { Login } from './Components/Login/Login'
import { UserPage } from './Components/UserPage/UserPage'
import UserContext from './Context/userContext'
import UserContextProvider from './Context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>Context API</h1>
      <Login/>
      <UserPage/>
    </UserContextProvider>
  )
}

export default App
