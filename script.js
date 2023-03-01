let userList = document.getElementById('userList');

fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(data => {
        printUsers(data);
    });

function printUsers(users) {
    console.log(users);

    users.map((user) => {
        let li = document.createElement('li');
        li.id = user.id;
        li.innerHTML = user.name;
        userList.appendChild(li);
    });
}