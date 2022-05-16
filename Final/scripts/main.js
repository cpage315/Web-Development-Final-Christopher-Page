const navbar = document.querySelector('navbar');


export async function fetchData(route = '', data = {}, methodType) {
  const response = await fetch(`${route}`, {
    method: methodType,
    mode: 'cors', 
    cache: 'no-cache', 
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
     
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });
  if(response.ok) {
    return await response.json(); 
  } else {
    throw await response.json();
  }
}

export function setCurrentUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

export function removeCurrentUser() {
  localStorage.removeItem('user')
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'));
}

export const logoutBtn = document.getElementById("logout");
if(logoutBtn) logoutBtn.addEventListener('click', logout)

export function logout() {
  removeCurrentUser();
  window.location.href = "login.html";
}