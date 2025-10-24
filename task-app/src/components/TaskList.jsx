import { useState } from "react"
//array of objects (arrays in the "[" list things, objects group stuff together)
const TODO_LIST = [
    { title: "Get Milk", dueDate: "10/31/2025" },
    { title: "Pay Bills", dueDate: "11/05/2025" },
    { title: "Christmas Shopping", dueDate: "12/03/2025" },
    { title: "Create Budget List", dueDate: "01/01/2026" }
    // make 3 more
]
console.log(TODO_LIST[0])

// individual items, props is for passing down
function TaskItem(props) {
    //track if the checkbox was clicked

    //let isDone = true;
    //if we want a variable to update the site, we use state!
    // left side is the name of variable | right side is the name of function
    const [isDone, setIsDone] = useState(true); //true creates the slash throught the items, false leaves the list items without the slash and unable to check the checkboxes
    console.log(props.title, isDone);

    function toggleCheck() {//only here is connected to the click
        //make isDone equal false
        //isDone = false;
        setIsDone(false); //isDone = false;
        console.log(isDone);
        console.log(props.title, isDone)
        if (isDone == true) {
            setIsDone(false)
        }
        else {
            setIsDone(true);
        }


    }

    return (
        // ? is the same as if,  : is the same as else
        <div className="task">
            <h3 className={
                isDone == true ? "done" : ""}>{props.title}</h3>
            <p>Due: {props.dueDate}</p>
            <input
                type='checkbox'
                onChange={toggleCheck}
                checked={isDone} />
        </div>

    )
}
//when one item is changed they all change (example when one is checked in the TaskItem fucnction to either true or false, they all become checked or unchecked)
//components are their own thing example: each task item is it's own component)
// list of items
// with props add the curly brackets and type {props. whatever is in your return 
// always console.log it helps us test the code
//return part is html
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
