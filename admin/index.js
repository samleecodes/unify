/* eslint-disable */
const authStatElement = document.getElementById('auth-status');
const msgTableElement = document.getElementById('message-table');
const msgTableBodyElement = document.getElementById('message-table-body');
const msgLoadingElement = document.getElementById('message-table-loading');

var rows = [];

firebase.auth().onAuthStateChanged(function (user) {
  if (!user) { window.location.href = "/auth.html"; return; }
  authStatElement.innerHTML = "Hello, " + user.email;
  loadMessages();
});

function logout() {
  firebase.auth().signOut();
}

function loadMessages() {
  msgLoadingElement.hidden = false;
  rows.forEach((row) => {
    row.remove();
  });
  rows = [];
  firebase
    .firestore()
    .collection('messages')
    .get()
    .then(function (snapshot) {
      msgLoadingElement.hidden = true;
      snapshot.forEach((doc) => {
        var row = msgTableElement.insertRow(-1);
        var col1 = row.insertCell(0);
        var col2 = row.insertCell(1);
        col1.innerHTML = doc.data().message;
        col2.innerHTML = doc.data().createdAt.toDate();
        rows.push(row);
      });
    });
}
