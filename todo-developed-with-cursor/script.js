// DOM Elements
const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoCount = document.getElementById("todoCount");
const taskLists = document.querySelectorAll(".task-list");

// State
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Functions
const addTodo = () => {
  const todoText = todoInput.value.trim();
  if (todoText) {
    const todo = {
      id: Date.now(),
      text: todoText,
      status: "todo",
    };
    todos.push(todo);
    saveTodos();
    renderTodos();
    todoInput.value = "";
    updateTodoCount();
  }
};

const deleteTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
  saveTodos();
  renderTodos();
  updateTodoCount();
};

const renderTodos = () => {
  // Clear all task lists
  taskLists.forEach((list) => {
    list.innerHTML = "";
  });

  // Render todos in their respective columns
  todos.forEach((todo) => {
    const taskElement = createTaskElement(todo);
    const targetList = document.querySelector(
      `.task-list[data-status="${todo.status}"]`
    );

    // Add error checking
    if (targetList) {
      targetList.appendChild(taskElement);
    } else {
      console.error(`Could not find task list for status: ${todo.status}`);
      // Fallback to todo list if status is invalid
      const todoList = document.querySelector('.task-list[data-status="todo"]');
      if (todoList) {
        todoList.appendChild(taskElement);
        // Update the todo status to match
        todo.status = "todo";
        saveTodos();
      }
    }
  });

  // Set up drag and drop
  setupDragAndDrop();
};

const createTaskElement = (todo) => {
  const taskElement = document.createElement("div");
  taskElement.className = "task-item";
  taskElement.draggable = true;
  taskElement.dataset.id = todo.id;
  taskElement.innerHTML = `
    <span class="task-text">${todo.text}</span>
    <button class="delete-btn">
      <i class="fas fa-trash"></i>
    </button>
  `;

  // Add delete button event listener
  const deleteBtn = taskElement.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => deleteTodo(todo.id));

  return taskElement;
};

const setupDragAndDrop = () => {
  const taskItems = document.querySelectorAll(".task-item");
  const taskLists = document.querySelectorAll(".task-list");

  taskItems.forEach((task) => {
    task.addEventListener("dragstart", (e) => {
      task.classList.add("dragging");
      e.dataTransfer.setData("text/plain", task.dataset.id);
    });

    task.addEventListener("dragend", () => {
      task.classList.remove("dragging");
    });
  });

  taskLists.forEach((list) => {
    list.addEventListener("dragover", (e) => {
      e.preventDefault();
      const draggingTask = document.querySelector(".dragging");
      if (draggingTask) {
        const afterElement = getDragAfterElement(list, e.clientY);
        if (afterElement) {
          list.insertBefore(draggingTask, afterElement);
        } else {
          list.appendChild(draggingTask);
        }
      }
    });

    list.addEventListener("drop", (e) => {
      e.preventDefault();
      const taskId = parseInt(e.dataTransfer.getData("text/plain"));
      const newStatus = list.dataset.status;

      // Update todo status
      todos = todos.map((todo) => {
        if (todo.id === taskId) {
          return { ...todo, status: newStatus };
        }
        return todo;
      });

      saveTodos();
      updateTodoCount();
    });
  });
};

const getDragAfterElement = (container, y) => {
  const draggableElements = [
    ...container.querySelectorAll(".task-item:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;

      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
};

const updateTodoCount = () => {
  const todoCount = todos.filter((todo) => todo.status === "todo").length;
  document.getElementById(
    "todoCount"
  ).textContent = `${todoCount} items in Todo`;
};

const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Event Listeners
addButton.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTodo();
});

// Initial render
renderTodos();
updateTodoCount();
