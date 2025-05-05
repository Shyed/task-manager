document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("taskForm");
    const taskList = document.getElementById("taskList");
  
    // Fetch and display tasks
    const fetchTasks = async () => {
      taskList.innerHTML = '';
      const res = await fetch('/api/tasks');
      const tasks = await res.json();
  
      tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = `${task.title} - ${task.status} (Due: ${task.dueDate?.split('T')[0]})`;
        taskList.appendChild(li);
      });
    };
  
    // Handle form submission
    taskForm.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const newTask = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        status: document.getElementById("status").value,
        dueDate: document.getElementById("dueDate").value
      };
  
      const res = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
      });
  
      if (res.ok) {
        taskForm.reset();
        fetchTasks();
      } else {
        alert('Failed to create task');
      }
    });
  
    fetchTasks();
  });
  