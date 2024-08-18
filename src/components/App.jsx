import { useState, useEffect } from "react";
import Descreption from "./Description/Descreption"
import Options from "./Options/Options"
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

export default function App () {

  const [values, setValues] = useState(() => {
    const savedValues = window.localStorage.getItem("values");
    return savedValues ? JSON.parse(savedValues) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("values", JSON.stringify(values));
  }, [values]);

  const updateFeedback = (feedbackType) => {
    setValues((prevValues) => ({
      ...prevValues,
      [feedbackType]: prevValues[feedbackType] + 1
    }));
  };

  const resetValues = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }; 

const { good, neutral, bad } = values;
const totalFeedback = good + neutral + bad;

const positiveFeedback = Math.round((good / totalFeedback) * 100);



  return (

<div>
<Descreption/> 
<Options 
updateFeedback={updateFeedback}
resetValues={resetValues}
totalFeedback={totalFeedback}
/>

{totalFeedback > 0 ? (
  <Feedback 
    values={values}
    positiveFeedback={positiveFeedback} />
        ) : (
  <Notification/>
        )}

</div>





  )
}