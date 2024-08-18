export default function Options ({updateFeedback, resetValues, totalFeedback}) {
    return (
        <>
    <button onClick={() => updateFeedback("good")}>Good</button>
    <button onClick={() => updateFeedback("neutral")}>Neutral</button>
<button onClick={() => updateFeedback("bad")}>Bad</button>
{totalFeedback > 0 && <button onClick={resetValues}>Reset</button>}

</> )
}