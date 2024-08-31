document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('userList');

    // Fetch user data from JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            // Iterate over the users and create list items
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.classList.add('user-item');

                // Populate the list item with user data
                listItem.innerHTML = `
                    <h3>${user.name}</h3>
                    <p>Email: ${user.email}</p>
                    <p>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}</p>
                `;

                // Append the list item to the user list
                userList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching user data:', error));
});
