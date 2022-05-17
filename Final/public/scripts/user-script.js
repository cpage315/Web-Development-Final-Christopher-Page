import 
{ fetchData, getCurrentUser, setCurrentUser, removeCurrentUser } 
from './main.js'

const loginform = document.getElementById("login");
if(logform) logform.addEventListener('submit', login);

function login(e) {
  e.preventDefault();

  const uname = document.getElementById("uname").value;
  const pword = document.getElementById("pword").value;
  fetchData('/users/login', {username: uname, password: pword}, "POST")
  .then((data) => {
    if(!data.message) {
      setCurrentUser(data);
      window.location.href = "register.html";
    }
  })
  .catch((error) => {
    const errText = error.message;
    document.querySelector("#login-form p.error").innerHTML = errText;
    document.getElementById("pword").value = "";
    console.log(`Error! ${errText}`)
  });
}

const regForm = document.getElementById("register");
if(regform) regform.addEventListener('submit', register);

function register(e) {
  e.preventDefault();

  const uname = document.getElementById("uname").value;
  const pword = document.getElementById("pword").value;

  fetchData('/users/register', {username: uname, password: pword}, "POST")
  .then((data) => {
    if(!data.message) {
      setCurrentUser(data);
      window.location.href = "profile.html";
    }
  })
  .catch((error) => {
    const errText = error.message;
    document.querySelector("#register p.error").innerHTML = errText;
    document.getElementById("pword").value = "";
    console.log(`Error! ${errText}`)
  });
}

const lform = document.getElementById("lesson");
if(lform) lform.addEventListener('submit', lesson);

function lesson(e) {
  e.preventDefault();

  const pos = document.getElementById("pos").value;
  const ltype = document.getElementById("ltype").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const comm = document.getElementById("extra").value;

  fetchData('/users/register', {position: pos, lessontype: ltype, date: date, time: time, comments: extra}, "POST")
  .then((data) => {
    if(!data.message) {
      setCurrentUser(data);
      window.location.href = "profile.html";
    }
  })
  .catch((error) => {
    const errText = error.message;
    document.querySelector("#reg-form p.error").innerHTML = errText;
    document.getElementById("pword").value = "";
    console.log(`Error! ${errText}`)
  });
}