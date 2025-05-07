import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// const reactElement={
//   type:'a',
//   props:{
//       href:"https://www.flipkart.com/",
//       target:"_blank"
//   },
//   children:"Click me to visit flipkart"
// }

// const anotherreactElement=(
//   <a href="https://www.flipkart.com/"> visit flipkart </a>
// )
// const customReactEle=React.createElement(
//   'a',
//   {href:'https://www.google.com/',target:'_blank'},
//   "visit google",

// )


createRoot(document.getElementById('root')).render(
<StrictMode>
  <App/>
</StrictMode>
)
