import { students, Chosen } from "../js/students.js";

renderList();

function renderList() {
  let listHtml = "";

  students.forEach((student, index) => {
    let firstName = student.firstName;
    let middleName = student.middleName;
    let lastName = student.lastName;
    let age = student.age;
    let sex = student.sex;
    let birthday = student.birthday;
    let email = student.email;
    let whereAtList = index;

    const html = `
        <div class="student ${index}" data-tooltip="View More Info">
            <div class="student-number">${index + 1}</div>
            <div class="first-name">${firstName}</div>
            <div class="middle-name">${middleName}</div>
            <div class="last-name">${lastName}</div>
            <div class="age">${age}</div>
            <div class="sex">${sex}</div>
            <div class="birthday">${birthday}</div>
            <div class="email">${email}</div>
        </div>
    `;

    listHtml += html;
  });

  document.querySelector(".student-container").innerHTML = listHtml;

  // Add event listener to the container for event delegation
  document.querySelector(".student-container")
    .addEventListener("click", handleStudentClick);
}

function handleStudentClick(event) {
  // Check if a student div is clicked
  if (event.target.classList.contains("student")) {
    // Extract the whereAtList value
    const whereAtList = event.target.classList[1];
    // Output whereAtList value wherever you need
    console.log(whereAtList);
    // You can replace the console.log with code to update some other part of your application.
  }
}
