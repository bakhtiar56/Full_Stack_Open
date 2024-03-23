import { useState } from 'react'
import "./App.css"

const StatisticLine =(props)=>{
  return(
    <div>
    <tr>
      <td colSpan="3">{props.text}</td>
      <td colSpan="2"> {props.value}</td>
    </tr>
    </div>
  )
}


const Statistics =(props)=>{
  const scores={
    good:1,
    neutral:0,
    bad:-1
  }

  if (props.total>0){
    
    const sum= (props.good*scores.good)+(props.bad*scores.bad)+(props.neutral*scores.neutral)
    const weightedAverage=sum/props.total
    const positiveFeedback=((props.good)/props.total)*100
    const positiveFeedbackString=""+positiveFeedback+" %"
    return(
      <div>
        <table>
        <StatisticLine text="good" value ={props.good} />
        
        <StatisticLine text="neutral" value ={props.neutral} />
       <StatisticLine text="bad" value ={props.bad} />
       <StatisticLine text="all" value ={props.total} />
       <StatisticLine text="average" value ={weightedAverage} />
       <StatisticLine text="positive" value ={positiveFeedbackString} />
        </table>
       



        

      </div>
  
    )
  }

  else{
    return (
      <p>No feedback given</p>
    )
  }
  
  
  
}





const Button= (props)=>{

  return(
    <button onClick={props.handleClick}>{props.text}</button>
    
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGood =()=>{
    setGood(good+1)
    setTotal(total+1)
  }
  const handleBad =()=>{
    setBad(bad+1)
    setTotal(total+1)
  }

  const handleNeutral =()=>{
    setNeutral(neutral+1)
    setTotal(total+1)
  }




  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={handleGood}/>
      <Button text="neutral" handleClick={handleNeutral}/>
      <Button text="bad" handleClick={handleBad}/>

      <h1>statistics</h1>

      <Statistics good={good} bad={bad} neutral={neutral} total={total}/>

      





    </div>
  )
}

export default App