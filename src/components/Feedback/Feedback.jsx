export default function Feedback ({values, positiveFeedback}) {
    return (
<>
<p>Good: {values.good}</p>
	<p>Neutral: {values.neutral}</p>
	<p>Bad: {values.bad}</p>
    <p>Positive: {positiveFeedback}%</p>
</>



    )
}