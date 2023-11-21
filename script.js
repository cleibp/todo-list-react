class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tasks: [
          { name: "Fazer compras", completed: false },
          { name: "Lavar o carro", completed: true }
        ],
        newTask: ""
      };
    }
  
    addTask = () => {
      const { tasks, newTask } = this.state;
      if (newTask.trim() !== "") {
        tasks.push({ name: newTask, completed: false });
        this.setState({ tasks, newTask: "" });
      }
    };
  
    removeTask = (index) => {
      const { tasks } = this.state;
      tasks.splice(index, 1);
      this.setState({ tasks });
    };
  
    toggleCompleted = (index) => {
      const { tasks } = this.state;
      tasks[index].completed = !tasks[index].completed;
      this.setState({ tasks });
    };
  
    render() {
      const { tasks, newTask } = this.state;
      return (
       <div>
          <h1>Lista de Tarefas</h1>
  
          <form
            onSubmit={(e) => {
              e.preventDefault();
              this.addTask();
            }}
          >
            <input
              type="text"
              value={newTask}
              onChange={(e) => this.setState({ newTask: e.target.value })}
              placeholder="Adicionar uma nova tarefa"
              required
            />
            <button type="submit">Adicionar</button>
          </form>
  
          <ul>
            {tasks.map((task, index) => (
              <li key={index} className={task.completed ? "completed" : ""}>
                {task.name}
                <button onClick={() => this.toggleCompleted(index)}>
                  Concluir
                </button>
                <button onClick={() => this.removeTask(index)}>Remover</button>
              </li>
            ))}
          </ul>
  
          {tasks.length === 0 ? (
            <div>
              <p>Nenhuma tarefa na lista.</p>
            </div>
          ) : (
            <div>
              <p>Total de tarefas: {tasks.length}</p>
            </div>
          )}
        </div>
      );
    }
  }
  
  ReactDOM.render(<TodoApp />, document.getElementById("app"));
  