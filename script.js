 // Button click event
const magicButton = document.getElementById('Tbutton');
magicButton.addEventListener('click', () => {
    magicButton.textContent = 'You Radiate Light!';
    magicButton.style.backgroundColor = 'orange';
});

// Hover effect event
const text = document.getElementById("hoverText");
text.onmouseover = function () {
  text.style.color = "red";
  text.style.fontWeight = "bold";
  hoverText.style.backgroundColor = "yellow";
  hoverText.textContent = "Smile For Me!";
};
text.onmouseout = function () {
  text.style.color = "black";
  text.style.fontWeight = "normal";
  hoverText.style.backgroundColor = "#f4f4f9";
  hoverText.textContent = "Come Closer!";
};

// Keypress detection
const keypressDisplay = document.getElementById('keypressDisplay');
document.addEventListener('keydown', (event) => {
    keypressDisplay.textContent = `You pressed: ${event.key}`;
});

// Double-click event
document.getElementById('Tbutton').addEventListener('dblclick', () => {
    alert('Shine For The Whole World To See!');
});

document.getElementById('doubleClick').addEventListener('dblclick', () => {
    alert('You Are Beyond Awesome!');
});
 
// Tabs functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Hide all tab contents
        tabContents.forEach(content => content.style.display = 'none');
        // Show the selected tab content
        const targetTab = button.getAttribute('data-tab');
        document.getElementById(targetTab).style.display = 'block';
    });
});

// Form Validation 
const userForm = document.getElementById('friendForm');
const formFeedback = document.getElementById('formFeedback');

friendForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!name || !email || !password) {
        formFeedback.textContent = 'All fields are required!';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        formFeedback.textContent = 'Please enter a valid email address!';
    } else if (password.length < 8) {
        formFeedback.textContent = 'Password must be at least 8 characters!';
    } else {
        formFeedback.textContent = 'Form submitted successfully!';
        formFeedback.style.color = 'green';
    }
});

 