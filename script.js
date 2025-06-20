let state = "view";
const editIcon = document.getElementById("editIcon");
const viewIcon = document.getElementById("viewIcon");
const flipContainer = document.querySelector(".card-flip-container");

viewIcon.addEventListener("click", function () {
  const name = document.querySelector('.card_edit input[type="text"]').value;
  const role = document.querySelectorAll('.card_edit input[type="text"]')[1]
    .value;
  const email = document.querySelectorAll('.card_edit input[type="text"]')[2]
    .value;
  const bio = document.querySelector(".card_edit textarea").value;
  const location = document.querySelectorAll('.card_edit input[type="text"]')[3]
    .value;

  document.querySelector(".applicant_name").textContent = name;
  document.querySelectorAll(".card .role p")[0].textContent = role;
  document.querySelectorAll(".card .role p")[1].textContent = email;
  document.querySelectorAll(".card .role p")[2].textContent = `"${bio}"`;
  document.querySelectorAll(".card .role p")[3].textContent = location;

  state = "view";
  console.log("view");
  flipContainer.classList.remove("flipped");
});

editIcon.addEventListener("click", function () {
  state = "edit";
  console.log("edit");
  flipContainer.classList.add("flipped");
});
