import { useState } from 'react'
import './App.css'


function App() {
  const pal = ["pink","white"];
  const S = 5;
  const [cols, setCols] = useState(Array(S*S).fill(0));  

  function clickHandler(i:number){
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

  function completed(){
    for (let i =0; i<S*S; i++){
      if(cols[i]==0){
        return false;
      }
    }
    return true;
  }


  function Cell({i}:{i:number}){
    const x = 100*(i%S);
    const y = 100*Math.floor(i/S);
    return(
      <g onClick={()=>clickHandler(i)} transform = {"translate("+x+","+y+")"}>
        <rect width={100} height={100}
        x={0}  
        y={0}
        stroke="black" fill={pal[cols[i]]}
        >      
        </rect>
        <text fill="red" x={50} 
        y={50}>{i}</text>
      </g>
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
  function Finished(){
    if(completed()){
      return(<h1>完成です。おめでとうございます。</h1>)
    }else{
      return(<h1>未完成です。頑張ってください。</h1>)
    }
  }
  return (
    <>
      <div>
        <Finished></Finished>
        <h1>My first react project</h1>
        <svg width={800} height={800}>
          <Board></Board>
        </svg>
      </div>
    </>
  )
}

export default App
