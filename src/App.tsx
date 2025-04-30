import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const pal = ["pink","white"];
  const S = 5;
  const [cols, setCols] = useState(Array(S*S).fill(0));  

  function clickHandler(i){
    const newcols = cols.slice();
    newcols[i]=1-newcols[i];
    if (i-S >= 0){
      newcols[i-S]=1-newcols[i-S];
    }
    if (i+S < S*S){
      newcols[i+S]=1-newcols[i+S];
    }
    if (i%S-1 >= 0){
      newcols[i-1]=1-newcols[i-1];
    }
    if (i%S+1 < S){
      newcols[i+1]=1-newcols[i+1];
    }
    
    setCols(()=>newcols);
  }


  function Cell({i}){
    return(
      <>
        <rect width={100} height={100}
        x={100*(i%S)}  
        y={100*Math.floor(i/S)}
        stroke="black" fill={pal[cols[i]]}
        onClick={()=>clickHandler(i)}>      
        </rect>
        <text fill="red" x={100*(i%S)+50} 
        y={100*Math.floor(i/S)+50}>{i}</text>
      </>
    )
  }

  function Board(){
    const cells = []; //空の配列
    for (let k=0; k<S*S; k++){
      cells.push(<Cell i={k}></Cell>);
    }
    return(
      <>
        <rect width={400} height={400} fill="green">
        </rect>
        {cells}
      </>
    )
  }

  return (
    <>
      <div>
        <h1>My first react project</h1>
        <svg width={800} height={800}>
          <Board></Board>
        </svg>
      </div>
    </>
  )
}

export default App
