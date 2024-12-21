export default function Options({  updateFeedback, resetFeedback, showReset}) {
    return (
        <div>
            <button onClick={() => updateFeedback('good')}>Good</button>
            <button onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button onClick={() => updateFeedback('bad')}>Bad</button>
            {showReset &&  ( 
                <button onClick={resetFeedback} >
                    Reset
                </button>)}
            
        </div>
    );
};


