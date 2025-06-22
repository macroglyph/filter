const users = [
    "Abbe",
    "Abbett",
    "Backhus",
    "Backman",
    "Cade",
    "Cadwell",
]

const searchInput = document.getElementById("search");
const userList = document.getElementById("user-list");

function renderList(filteredUsers) {
    userList.innerHTML = ""

    if (filteredUsers.length === 0) {
        userList.innerHTML = "<li>No results found...</li>";
        return;
    }

    filteredUsers.forEach(user => {
        const li = document.createElement("li");
        li.textContent = user;
        userList.appendChild(li);
    });
}

function filteredUsers() {
    const query = searchInput.value.toLowerCase();
    const filtered = users.filter(user =>
        user.toLowerCase().includes(query));
        renderList(filtered);
}

renderList(users);

searchInput.addEventListener("input", filteredUsers);