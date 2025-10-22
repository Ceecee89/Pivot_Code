//array of objects
const TODO_LIST = [
    { title: "Get Milk", dueDate: "10/31/2025", done: true },
    { title: "Pay Bills", dueDate: "11/05/2025" },
    { title: "Christmas Shopping", dueDate: "12/03/2025", done: true },
    { title: "Create Budget List", dueDate: "01/01/2026" }
    // make 3 more
]
console.log(TODO_LIST[0])

// individual items, props is for passing down
function TaskItem(props) {
    return (
        // ? is the same as if,  : is the same as else
        <div className="task">
            <h3 className={
                props.done == true ? "done" : ""}>{props.title}</h3>
            <p>Due: {props.dueDate}</p>
            <input type='checkbox' />
        </div>

    )
}
// list of items
// with props add the curly brackets and type {props. whatever is in your return 

function TaskList() {
    return (
        <section>
            {/* .map loops through array and shows HTML */}
            {TODO_LIST.map(
                (props, index) => {
                    return (
                        <TaskItem
                            key={index}
                            title={props.title}

                            dueDate={props.dueDate}
                            done={props.done}
                        />
                    )
                }
            )}
            {/* <TaskItem
                title="Get Milk"
                dueDate="10/31/2025"
                done={true}
            />
            <TaskItem
                title="Pay Bills"
                dueDate="11/05/2025"
            />
            <TaskItem
                title="Christmas Shopping"
                dueDate="12/03/2025" />

            <TaskItem
                title="Create Budget List"
                dueDate="01/01/2026" />
            <TaskItem
                title="Open Savings Account"
                dueDate="01/03/2026" /> */}

        </section>)


}
export default TaskList;
