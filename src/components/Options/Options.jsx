export default function Options({ options, updateFeedback, resetFeedback, totalFeedback}) {
    return (
        <div>
            {options.map(option => (
                <button key={option} onClick={() => updateFeedback(option)}>
                    {option}
                </button>
            ))}
            
                <button onClick={resetFeedback} >
                    Reset
                </button>
            
        </div>
    );
};


