import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
 import {Provider} from 'react-redux'
import { Store } from './Store/Store.js'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import {AuthLayOut} from "../src/Components/AuthLayOut.jsx"
import { HomePage } from './Components/Pages/HomePage.jsx'
import { LogInPage } from './Components/Pages/LogInPage.jsx'
import { SignUpPage } from './Components/Pages/SignUpPage.jsx'
import { AddPostPage } from './Components/Pages/AddPostPage.jsx'
import { AllPostPage } from './Components/Pages/AllPostPage.jsx'
import { EditPostPage } from './Components/Pages/EditPostPage.jsx'
import { PostPage } from './Components/Pages/PostPage.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<HomePage/>
      },
      {
        path:'/login',
        element:(
          <AuthLayOut authentication={false}>
            <LogInPage/>
          </AuthLayOut>
        )
      },
      {
        path:'/signup',
        element:(
          <AuthLayOut authentication={false}>
            <SignUpPage/>
          </AuthLayOut>
        )
      },
      {
        path:'/add-post',
        element:(
          <AuthLayOut authentication>
            <AddPostPage/>
          </AuthLayOut>
        )
      },
      {
        path:'/all-post',
        element:(
          <AuthLayOut authentication>
            <AllPostPage/>
          </AuthLayOut>
        )
      },
      {
        path:'/edit-post/:slug',
        element:(
          <AuthLayOut authentication>
            <EditPostPage/>
          </AuthLayOut>
        )
      },
      {
        path:'/post/:slug',
        element:(
          <AuthLayOut authentication>
            <PostPage/>
          </AuthLayOut>
        )
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
