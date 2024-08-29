// Task 1: Create and Append Elements
function createAndAppendDiv() {
    const newDiv = document.createElement('div');
    newDiv.id = 'uniqueDiv';
    const textContent = document.createTextNode('This is a dynamically created div.');
    newDiv.appendChild(textContent);
    document.body.appendChild(newDiv);
}

// Task 2: Modify Existing Elements
function changeParagraphsBackgroundColor() {
    const paragraphs = document.getElementsByTagName('p');
    // Generate a random color
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.backgroundColor = randomColor;
    }
}

// Task 3: Form Input Validation
document.getElementById('nameForm').addEventListener('submit', function (event) {
    const nameInput = document.getElementById('nameInput');
    const errorMessage = document.getElementById('errorMessage');

    if (nameInput.value.trim() === '') {
        event.preventDefault();  // Prevent form submission
        errorMessage.textContent = 'Name cannot be empty.';
        errorMessage.style.color = 'red';
    } else {
        errorMessage.textContent = '';  // Clear error message
    }
});

// Task 4: Dynamic List Creation
function addItemToList() {
    const itemInput = document.getElementById('itemInput');
    const ul = document.getElementById('itemList');

    if (itemInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = itemInput.value;
        ul.appendChild(li);
        itemInput.value = '';  // Clear input field after adding
    }
}

// Task 5: Toggle Visibility
function toggleImageVisibility() {
    const image = document.getElementById('toggleImage');

    if (image.style.display === 'none') {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }
}
