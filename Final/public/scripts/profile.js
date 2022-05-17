import 
{ getCurrentUser, setCurrentUser, removeCurrentUser, logout, fetchData } 
from './main.js'


let user = getCurrentUser();

if(!user) window.location.href = "profile.html";

let profile = document.getElementById("profile");
profile.innerHTML = `
  <h2>${user.username}</h2>
  <div>
    <p class="error"></p>
    <button class="btn" id="edit">Edit Info</button>
  </div>
`;

document.getElementById("edit").addEventListener('click', editProfile);
document.getElementById("delete").addEventListener('click', deleteAccount);

function editProfile() {
  let editForm = document.getElementById("editForm");
  editForm.innerHTML = `
    <form id="form" class="basic-form">
      <p class="error"></p>
      <h2>Edit Profile</h2>
      <label for="username">Change Username</label>
      <input type="text" name="username" id="username" placeholder="${user.username}">
      <br>
      <input type="submit" value="Submit">
    </form>

    <form id="passForm" class="basic-form">
      <p class="error"></p>
      <h2>Change Password</h2>
      <label for="pswd">Change Password</label>
      <input type="password" name="pword" id="pword">
      <br>
      <input type="submit" value="Submit">
    </form>

    <form id="lessForm" class="basic-form">
    <p class="error"></p>
    <h2>Change Lesson</h2>
    <label for="ldate">Change Lesson Date</label>
    <input type="date" name="ldate" id="ldate">
    <br>
    <input type="submit" value="Submit">
    </form>

    <form id="lessForm" class="basic-form">
    <p class="error"></p>
    <h2>Change Lesson</h2>
    <label for="ldate">Change Lesson Time</label>
    <input type="time" name="appt" id="appt">
    <br>
    <input type="submit" value="Submit">
    </form>

    <button class="btn" id="cancel">Cancel</button>
  `;

  editForm.addEventListener('submit', editAccount)
  document.getElementById("cancel").addEventListener('click', (e) => {
    window.location.href = "profile.html";
  })
}

function editAccount(e) {
  e.preventDefault();

  let userName = document.getElementById("username").value;
  if(userName === user.username) {
    let err = "No changes made";
    document.querySelector("#editForm p.error").innerHTML = err;
  } else {
    fetchData('/users/edit', {userId: user.user_id, userName: userName}, "PUT")
    .then((data) => {
      if(!data.message) {
        removeCurrentUser();
        setCurrentUser(data);
        window.location.href = "profile.html"
      }
    })
 
    .catch((error) => {
       const errText = error.message;
       document.querySelector("#editForm p.error").innerHTML = errText;
       console.log(`Error! ${errText}`)
     });
  
  }
}
