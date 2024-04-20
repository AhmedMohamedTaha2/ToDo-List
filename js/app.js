let inputField = document.querySelector(".input");
let inputs = document.querySelectorAll("input");
let inputText = inputs[0];
let taskAddBtn = inputs[1];
let tasks = document.querySelector("#tasks");
let taskText = inputText.value;

function adding() {
  if (inputText.value.length <= 0) {
    window.alert("please , enter a task");
  } else {
    taskText = inputText.value;
    tasks.innerHTML += `
      <div class="newtask">
        <h1>${taskText}</h1>
        <div class="button">
        <button id="delete">Delete</button>
        <button id="edit">Edit</button>
        </div>
      </div>
    
    `;
    // !editing and deleting input decleration
    Deleting = tasks.querySelectorAll("#delete");
    editing = tasks.querySelectorAll("#edit");
    // !editing and deleting functions
    // Deleting.addEventListener("click", function () {
    //   tasks.querySelector(".newtask").remove();
    // });
    // editing.addEventListener("click", function () {
    //   tasks.querySelector(".newtask").querySelector("h1").innerText =
    //     inputText.value;
    // });
    // !editing and deleting functions loops
    // =========================================================
    // ================ EDITED BY IBRAHIM ======================
    // =========================================================
    /*
     * using Let for the loop to make the 'i' visible globally in the function
     */
    for (let i = 0; i <= Deleting.length; i++) {
      Deleting[i].addEventListener("click", function () {
        tasks.querySelectorAll(".newtask")[i].remove();
      });
      editing[i].addEventListener("click", function () {
        tasks.querySelectorAll(".newtask h1")[i].innerText = inputText.value;
      });
    }
    // =========================================================
    // =========================================================
    // =========================================================
  }
}

taskAddBtn.addEventListener("click", adding);
