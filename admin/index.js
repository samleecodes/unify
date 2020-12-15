/* eslint-disable */
const authStatElement = document.getElementById('auth-status');

firebase.auth().onAuthStateChanged(function (user) {
  if (!user) { window.location.href = "/auth.html"; }
  authStatElement.innerHTML = "Hello, " + user.email;
});

function logout() {
  firebase.auth().signOut();
}
