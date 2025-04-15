export function MoodSelector ({moodChange}) {
    const moods = ["Happy", "Sad", "Excited", "Tired"];
    return(
        <div>
            
            
            <h2>Select mood you are in:</h2>
            {moods.map((mood) => (
                <button key={mood} onClick={() => moodChange(mood)}>{mood}</button> 
            ))}
        </div>
    )
}