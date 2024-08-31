const typingText = document.querySelector('.typing-2');
const textArray = ['Web Designer', 'Frontend Developer', 'Backend Developer'];
let typingIndex = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;

function type() {
    if (charIndex < textArray[typingIndex].length) {
        if (!isDeleting && charIndex === 0) {
            typingText.textContent = '';
        }
        currentText = textArray[typingIndex].substring(0, charIndex + 1);
        typingText.textContent = currentText;
        charIndex++;
        setTimeout(type, 200);
    } else {
        setTimeout(() => {
            isDeleting = true;
            deleteText();
        }, 1000);
    }
}

function deleteText() {
    if (charIndex > 0) {
        currentText = textArray[typingIndex].substring(0, charIndex - 1);
        typingText.textContent = currentText;
        charIndex--;
        setTimeout(deleteText, 100);
    } else {
        isDeleting = false;
        typingIndex = (typingIndex + 1) % textArray.length;
        setTimeout(type, 200);
    }
}

document.addEventListener('DOMContentLoaded', type);




