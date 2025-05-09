document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("taskForm");
  const taskList = document.getElementById("taskList");

  const API_URL = 'https://task-manager-vr7v.onrender.com/api/tasks';

  // Fetch and display tasks
  const fetchTasks = async () => {
    taskList.innerHTML = '';
    try {
      const res = await fetch(API_URL);
      const tasks = await res.json();

      tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = `${task.title} - ${task.status} (Due: ${task.dueDate?.split('T')[0]})`;
        taskList.appendChild(li);
      });
    } catch (err) {
      console.error('Failed to fetch tasks:', err);
    }
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

    try {
      const res = await fetch(API_URL, {
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
        alert('❌ Failed to create task');
      }
    } catch (err) {
      console.error('Submit error:', err);
      alert('❌ Error submitting task');
    }
  });

  fetchTasks();
});
