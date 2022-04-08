function tasksItemComponent(task) {
  // You are going to add your HTML design here.
  // Do the option design in HTML page, test it, and replace it if you need instead of this code.
  // For any variables, just use the interpolation operation ${} and pass the variable
  const checked = task.done ? "checked" : "";
  return `
              <div class="todo-item">
                <input 
                  class="task-checkbox" 
                  type="checkbox"
                  ${checked} 
                  onchange="taskChecked(${task.id}, this.checked)"
                />
                <div style="colorbackground-color:rgb(237, 237, 237);font-size: medium; width:500px;border-radius:20px;font-weight: bold;"className="movie-details">
                  <p class="item-category">${task.category}</p>
                  <p class="item-title">${task.title}</p>
                </div>
                
              </div>
      `;
}
