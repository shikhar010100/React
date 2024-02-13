import  {  ReactElement, useState } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'

function MyApp():ReactElement {
  const x=123;
  let [Value , setValue]= useState(0);
function addValue():void{
  Value= Value+1;
  setValue( Value);
}
function delValue():void{
  Value=Value-1;
  setValue(Value)
}
  return (
    <>
    <h1>{x}<br/>
    Hello MY world
    </h1>
    <h1>counter Value : {Value}</h1>
   <button onClick={addValue}>Add Value</button>
   <button onClick={delValue}>Delete Value</button>
    </>
  )
}



ReactDOM.createRoot(document.getElementById('root')!).
render(
   <>
<MyApp/>
   </>
)
// const anotherElement = (
//   <a href="https://google.com" target = "_blank">    visit google</a>
// )


// const reactElement = React.createElement(
//   'a',
//   {href:"https://google.com",
//   target:'_blank'  },
//   'Click me to visit google',
// )