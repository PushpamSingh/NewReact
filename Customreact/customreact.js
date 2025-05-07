function customReact(reactElement,mainContainer){
    /*const reactDom = document.createElement(reactElement.type);
    reactDom.innerHTML=reactElement.children;
    reactDom.setAttribute('href',reactElement.props.href);
    reactDom.setAttribute('target',reactElement.props.target);
    mainContainer.append(reactDom);
    */
   const reactDom=document.createElement(reactElement.type);
   reactDom.innerHTML=reactElement.children;
   for (const prop in reactElement.props) {
    if (prop==='children') continue;
    reactDom.setAttribute(prop,reactElement.props[prop]);
   }
   mainContainer.append(reactDom);
}

const reactElement={
    type:'a',
    props:{
        href:"https://www.flipkart.com/",
        target:"_blank"
    },
    children:"Click me to visit flipkart"
}
const mainContainer=document.querySelector('#root');

customReact(reactElement,mainContainer);