function addFaq() {
	// Get the input values
	const newTitle = document.getElementById('faq-title-input').value;
	const newText = document.getElementById('faq-text-input').value;

	// Create a new "faq" div
	const newFaqDiv = document.createElement('div');
	newFaqDiv.className = 'faq';

	// Create and add the title and text elements
	const titleElement = document.createElement('h3');
	titleElement.className = 'faq-title';
	titleElement.textContent = newTitle;

	const textElement = document.createElement('p');
	textElement.className = 'faq-text';
	textElement.textContent = newText;

	newFaqDiv.appendChild(titleElement);
	newFaqDiv.appendChild(textElement);

	// Create and add the "faq-toggle" button
	const toggleButton = document.createElement('button');
	toggleButton.className = 'faq-toggle';
	toggleButton.innerHTML =
		'<i class="fas fa-chevron-down"></i><i class="fas fa-times"></i>';

	toggleButton.addEventListener('click', function () {
		const faqElement = this.closest('.faq.active');
		if (faqElement) {
			faqElement.remove();
		}
	});

	newFaqDiv.appendChild(toggleButton);

	newFaqDiv.addEventListener('click', function () {
		this.classList.toggle('active');
	});

	// Get the "faq-container" div
	const faqContainer = document.querySelector('.faq-container');

	// Append the new "faq" div to the "faq-container"
	if (newTitle || newText) {
		faqContainer.appendChild(newFaqDiv);
	}

	// Clear the input fields
	document.getElementById('faq-title-input').value = '';
	document.getElementById('faq-text-input').value = '';
}

// Add a click event listener to the "Add FAQ" button
document.getElementById('add-faq-btn').addEventListener('click', addFaq);

const toggleButtons = document.getElementsByClassName('faq-toggle');

// Iterate over the buttons and attach a click event listener to each one
for (let i = 0; i < toggleButtons.length; i++) {
	toggleButtons[i].addEventListener('click', function () {
		const faqElement = this.closest('.faq.active');
		if (faqElement) {
			faqElement.remove();
		}
	});
}

const faqElements = document.getElementsByClassName('faq');

// Iterate over the divs and attach a click event listener to each one
for (let i = 0; i < faqElements.length; i++) {
	faqElements[i].addEventListener('click', function () {
		this.classList.toggle('active');
	});
}
