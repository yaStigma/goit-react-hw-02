import { useState } from "react";
import Descreption from "./Description/Descreption"
import Options from "./Options/Options"
import Feedback from "./Feedback/Feedback";

export default function App () {

  const [values, setValues] = useState(
    {
    good: 0,
    neutral: 0,
    bad: 0
  });
	
  const updateFeedback = (feedbackType) => {
    setValues((prevValues) => ({
      ...prevValues,
      [feedbackType]: prevValues[feedbackType] + 1
    }));
  };


  return (

<div>
<Descreption/> 
<Options updateFeedback={updateFeedback}/>
<Feedback values={values}/>
</div>





  )
}