import React , {useState} from 'react'
import './todo.css' 

function Todo() {
  const [tasks, settasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleDeleteAllTasks = () => 
  {
    settasks([]);
  }

  const handleInputChange = (e) =>{
    setInputValue(e.target.value);
  }
  const handleAddNewTask = (e) => {
    e.preventDefault();
    const updatedTasks = [...tasks];
    updatedTasks.push({
        id: tasks.length + 1,
        task: inputValue,
        completed: false,
    });
    settasks(updatedTasks);
    setInputValue("");
    }
    const handleDeleteOneTask = (id) => 
    {
      const updatedTasks = tasks.filter((item) => item.id !== id);
      settasks(updatedTasks);
    }
    const handleChangeCheckBox = (id) => {
      const updatedTasks = tasks.map((item) => {
        if (item.id === id) 
        {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
      settasks(updatedTasks);
    };

    return (
    <div>
        <h1>Todo List</h1>
        <form onSubmit={handleAddNewTask}>
            <input className='task-input' value={inputValue} type="text" placeholder="Add a task" onChange={handleInputChange} />
            <button className='btn-add' type='submit'>Add</button>
            {tasks.map((item) => {
                return (
                    <div key={item.id} className='tasks'>
                      <input onChange={() => handleChangeCheckBox(item.id)} type="checkbox" isChecked={handleChangeCheckBox} />                            <span className={item.completed ? 'completed' : ''}>{item.task}</span>
                      <button className='btn-delete' onClick={() => handleDeleteOneTask(item.id)} >Delete</button>
                    </div>
                );
            })}
            <p onClick={handleDeleteAllTasks}>Clear All</p>
        </form>
    </div>
  )
}

export default Todo