document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggleButton');
    const text = document.getElementById('text');
    const container = document.getElementById('container');
    
    let isChanged = false;

    button.addEventListener('click', () => {
        if (isChanged) {
            // Revert to initial state
            text.textContent = 'Initial Text';
            button.textContent = 'Change';
            container.classList.remove('changed');
            button.classList.remove('changed-button');
        } else {
            // Change state
            text.textContent = 'Changed Text';
            button.textContent = 'Revert';
            container.classList.add('changed');
            button.classList.add('changed-button');
        }

        isChanged = !isChanged;
    });
});
