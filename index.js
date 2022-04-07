//uncompleted :taskChecked &filterTasks
// You do not need to change the constants
const CATEGORY_SELECTOR = "categories-list";
const CATEGORY_FILTER = "categories-list-filter";

let tasks = [];
let categories = [];
let doneTasks = [];

// REMOVE ME: SAMPLE FILLING
tasks = [
  { id: 0, title: "Game of thrones", category: "Movies", done: false },
  { id: 1, title: "Toy Story 4", category: "Movies", done: false },
];

categories = ["Movies", "Groceries"];
// SAMPLE
// renderCategories(categories, CATEGORY_SELECTOR);
// renderCategories(categories, CATEGORY_FILTER);
// renderTasks(tasks, "tasks-list");

function taskChecked(taskId, checked) {
  // implement the delete task.
  // You are given the task id
  if (checked) {
    tasks.forEach((task) => {
      if (task[id] === taskId) {
        let index = indexOf(task);
      }
    });
    let deletedTask = tasks.splice(index, 1); //removing the task from tasks original list
    doneTasks.push(deletedTask); //saving a copy
  }
  renderTasks(tasks, "tasks-list");
  console.log(`${checked ? "" : "UN"}CHECKED TASK`, taskId);
}

function addTask() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_SELECTOR);
  const taskTitle = getNewTaskText();
  // continue the code here
  let idnum = tasks.length; ///
  let taskObj = {
    id: idnum,
    title: taskTitle,
    category: selectedCategory,
    done: false,
  };
  tasks.push(taskObj); ///
  renderTasks(tasks, "tasks-list"); ///
  alert(`Category: ${selectedCategory} | Task: ${taskTitle}`);
}

function addCategory() {
  const newCategory = getNewCategoryText();
  // continue the code here
  categories.push(newCategory); ///
  renderCategories(categories, CATEGORY_SELECTOR);
  renderCategories(categories, CATEGORY_FILTER);
  alert(`New category was added: ${newCategory}`);
}

function filterTasks() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_FILTER);
  const done = getFilteredDone();
  // continue the code here
  let filtertasks = tasks.filter((task) => task[category] === selectedCategory);
  renderTasks(filtertasks); ///

  // REMOVE ME: sample alert
  alert(`Category: ${selectedCategory} | done: ${done}`);
}
