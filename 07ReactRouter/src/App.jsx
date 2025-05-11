import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router'
import { Home } from './Components/Pages/Home/Home'
import { Layout } from './Components/PageLayout/Layout'
import { About } from './Components/Pages/About/About'
import { Contact } from './Components/Pages/Contact/Contact'
import { Github, githubApi } from './Components/Pages/Github/Github'
import { User } from './Components/Pages/User/User'
function App() {
 
  // const router=createBrowserRouter([
  //     {
  //       path:"/",
  //       element:<Layout/>,
  //       children:[
  //         {
  //           path:"",
  //           element:<Home/>
  //         },
  //         {
  //           path:"about",
  //           element:<About/>
  //         },
  //         {
  //           path:"contact",
  //           element:<Contact/>
  //         },
  //         {
  //           path:"github",
  //           element:<Github/>
  //         }
  //       ]
  //     }
  // ])

  const router =createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route 
        loader={githubApi}
        path='github' element={<Github/>}></Route>
        <Route path='user/:userid' element={<User/>}></Route>
      </Route>
    )
  )

  return (
   <RouterProvider router={router}/>
  )
}

export default App
