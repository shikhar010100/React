
// function CreateElement(reactElement,mainContainer){
//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.children;
//     domElement.setAttribute('href',reactElement.props.href);
//     domElement.setAttribute('target',reactElement.props.target);

//     mainContainer.appendChild(domElement);
// }

function CreateElement(reactElement,mainContainer){
    const domElement = document.createElement(reactElement.type)
    
    domElement.innerHTML = reactElement.data;

   for(const prop in reactElement.props){
    domElement.setAttribute(prop,reactElement.props)
   }
    mainContainer.appendChild(domElement);
}

const reactElement={
    type:'a',
    props:{
        href:"https://google.com",
        target:'_blank'
       
    },
    children:'Click me to visit google'
}
const reactElement1={ 
    type:'div',

    data:"nothing"
}

const mainContainer = document.querySelector('#root')
CreateElement(reactElement,mainContainer);