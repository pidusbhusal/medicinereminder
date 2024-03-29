import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL: "https://librarybooks-ab9fb-default-rtdb.firebaseio.com/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");

// Start authentication code

// End authentication

const PersonName = document.getElementById("input-field");
const Medicine = document.getElementById("medicine-field");
const Quantity = document.getElementById("quantity-field");
const Time = document.getElementById("time-field");
const addButtonEl = document.getElementById("add-button");
const shoppingListEl = document.getElementById("shopping-list");

function resetForm() {
  document.getElementById("input-field").value = "";
  document.getElementById("medicine-field").value = "";
  document.getElementById("quantity-field").value = "";
  document.getElementById("time-field").value = "";
}

addButtonEl.addEventListener("click", function () {
  let personName = PersonName.value;
  let medicine = Medicine.value;
  let quantity = Quantity.value;
  let time = Time.value;

  if (personName && medicine && quantity && time) {
    push(shoppingListInDB, {
      personName: personName,
      medicine: medicine,
      quantity: quantity,
      time: time,
    });
    resetForm();
  }
});

onValue(shoppingListInDB, function (snapshot) {
  if (snapshot.exists()) {
    let itemsArray = Object.entries(snapshot.val());

    shoppingListEl.innerHTML = "";

    for (let i = 0; i < itemsArray.length; i++) {
      let currentItem = itemsArray[i];

      appendItemToShoppingListEl(currentItem);
    }
  } else {
    shoppingListEl.innerHTML = "No items in the list... yet";
  }
});

function appendItemToShoppingListEl(item) {
  let itemID = item[0];
  let personName = item[1].personName;
  let medicine = item[1].medicine;
  let quantity = item[1].quantity;
  let time = item[1].time;
  let newEl = document.createElement("li");

  // Create the delete button
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`);
    remove(exactLocationOfItemInDB);
  });

  // Create the content of the list item
  let listItemContent = document.createElement("div");
  listItemContent.innerHTML = `<span class="Patient Name">${personName}</span> <p class="medicine">Medicine : ${medicine}</p> <p>Quantity: ${quantity}</p> <p>Time: ${time}</p>`;

  // Append the delete button and the content to the list item
  newEl.appendChild(listItemContent);
  newEl.appendChild(deleteButton);

  shoppingListEl.append(newEl);
}

// function appendItemToShoppingListEl(item) {
//   let itemID = item[0];
//   let itemValue = item[1];

//   let newEl = document.createElement("li");

//   newEl.textContent = itemValue;

//   newEl.addEventListener("click", function () {
//     let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`);

//     remove(exactLocationOfItemInDB);
//   });

//   shoppingListEl.append(newEl);
// }
