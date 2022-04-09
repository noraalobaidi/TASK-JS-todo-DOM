//uncompleted :taskChecked &filterTasks
// You do not need to change the constants
const CATEGORY_SELECTOR = "categories-list";
const CATEGORY_FILTER = "categories-list-filter";

let tasks = [];
let categories = [];

// REMOVE ME: SAMPLE FILLING
// tasks = [
//   { id: 0, title: "Game of thrones", category: "Movies", done: false },
//   { id: 1, title: "Toy Story 4", category: "Movies", done: false },
// ];

// categories = ["Movies", "Groceries"];
// SAMPLE
// renderCategories(categories, CATEGORY_SELECTOR);
// renderCategories(categories, CATEGORY_FILTER);
// renderTasks(tasks, "tasks-list");

function taskChecked(taskId, checked) {
  // implement the delete task.
  // You are given the task id
  //let indexoftask = 0;
  const selectedCategory = getSelectedCategoryById(CATEGORY_FILTER);
  if (checked) {
    tasks.forEach((task) => {
      if (task.id === taskId) {
        task.done = true;
        // indexoftask = index;
        // console.log("index", indexoftask);
      }
    });
  } else {
    {
      tasks.forEach((task) => {
        if (task.id === taskId) {
          task.done = false;
          // indexoftask = index;
          // console.log("index", indexoftask);
        }
      });
    }
  }
  /////////bug1
  // if (getFilteredDone()) {
  //   let checkedtasks = tasks.filter(
  //     (task) => task.done === true && task.category === selectedCategory
  //   );
  //   renderTasks(checkedtasks, "tasks-list");
  // } else {
  //   let unChecked = tasks.filter(
  //     (task) => task.done === false && task.category === selectedCategory
  //   );
  //   renderTasks(unChecked, "tasks-list");
  // }
  ///////////
  let taskschecked = tasks.filter((task) => task.category === selectedCategory);
  renderTasks(taskschecked, "tasks-list");
  //console.log(`${checked ? "" : "UN"}CHECKED TASK`, taskId);
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
  //alert(`Category: ${selectedCategory} | Task: ${taskTitle}`);
  document.getElementById("new-task").value = ""; //remove the input value after clicking + button
}

function addCategory() {
  const newCategory = getNewCategoryText();
  let newCategorysml = newCategory.toLowerCase();
  let categoriessml = categories.map((category) => category.toLowerCase());
  let indx = categoriessml.indexOf(newCategorysml);

  // continue the code here
  if (indx < 0) {
    categories.push(newCategory); ///
    renderCategories(categories, CATEGORY_SELECTOR);
    renderCategories(categories, CATEGORY_FILTER);
    alert(`New category was added: ${newCategory}`);
  } else {
    alert(`category is already added: ${newCategory}`);
  }
  document.getElementById("new-category").value = ""; //remove input after clicking the button create
}

function filterTasks() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_FILTER);
  const done = getFilteredDone();
  // continue the code here
  if (done === true) {
    let donefiltered = tasks.filter(
      (task) => task.category === selectedCategory && task.done === true
    );

    renderTasks(donefiltered, "tasks-list");
  } else {
    let filtered = tasks.filter((task) => task.category === selectedCategory);

    renderTasks(filtered, "tasks-list");
  }

  // REMOVE ME: sample alert
  //alert(`Category: ${selectedCategory} | done: ${done}`);
}

function removeFilter() {
  renderTasks(tasks, "tasks-list");
}
