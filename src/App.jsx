import { useState, useEffect } from 'react'
import Description from "./components/Description/Description"
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from './components/Notification/Notification';
import './App.css'

function App() {

  const[feedback,setFeedback]=useState(()=>{
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback): { good: 0, neutral: 0, bad: 0 };

  })
 
useEffect(() => {
  localStorage.setItem('feedback', JSON.stringify(feedback));
}, [feedback]);

const updateFeedback = (feedbackType) => {
  setFeedback((prev) => ({
    ...prev,
    [feedbackType]: prev[feedbackType] + 1,
  }));
};

const resetFeedback=()=>{setFeedback({
  good: 0,
  neutral: 0,
  bad: 0,
})};

const totalFeedback = feedback.good+feedback.bad+feedback.neutral
const positivePercentage = totalFeedback>0 ? Math.round((feedback.good/totalFeedback)*100):0;


  return (
  <>
<Description/>
<Options options ={["good", "neutral", "bad"] }   resetFeedback ={resetFeedback} updateFeedback={updateFeedback} />
{totalFeedback>0 ? (<Feedback feedback={feedback} totalFeedback={totalFeedback} positivePercentage={positivePercentage}/>): 
<Notification message = "No feedback given yet."/> }

     </> 
    
  )
}

export default App




