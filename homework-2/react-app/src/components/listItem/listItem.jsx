import "./listItem.css"
const tasks = [
    { name: "Learn React", priority: "High" },
    { name: "Do Groceries", priority: "Low" },
    { name: "Exercise", priority: "High" },
    { name: "Read a Book", priority: "Medium" },
]

export function ListItem () {
    return (
        <div >
            <ul>
                <h2>Tasks list:</h2>
                {tasks.map((item,index) => (
                    <li key={index}>
                        <p>Task Name: {item.name}</p>
                        <p>Priority: {item.priority}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}