// 1. Create and Append Elements
// Task: Write a JavaScript function that creates a <div> element with a unique id and some text content. Append this div to the body of the document.
// Hint: Use document.createElement(), document.createTextNode(), and appendChild().

// 2. Modify Existing Elements
// Task: Write a JavaScript function that changes the background color of all <p> elements on the page to blue when a button is clicked.
// Hint: Use getElementsByTagName() or querySelectorAll() and a loop to modify the style property of the elements.

// 3. Form Input Validation
// Task: Create a simple form with an input field for a user's name and a submit button. Write JavaScript code to validate that the input is not empty before allowing the form to submit. If the input is empty, display an error message below the input field.
// Hint: Use addEventListener() to handle the form submission and prevent default behavior using event.preventDefault() if the input is invalid.

// 4. Dynamic List Creation
// Task: Write a JavaScript function that allows the user to add items to an unordered list (<ul>). The user should type the item in a text input and click an "Add" button. The item should be added to the list dynamically.
// Hint: Use createElement(), appendChild(), and addEventListener().

// 5. Toggle Visibility
// Task: Write a JavaScript function that toggles the visibility of an image on the page when a button is clicked. If the image is visible, it should become hidden, and vice versa.
// Hint: Use style.display and getElementById().




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
