
// Utility function to escape HTML to prevent XSS
function escapeHTML(str) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

function validateInputs(inputs) {
    const errors = [];

    inputs.forEach(({ value, validator, message }) => {
        if (!validator(value)) {
            errors.push(message);
        }
    });

    return errors.length ? errors.join('\n') : null;
}

// Example validators
const isValidUsername = username => username.length >= 3 && username.length <= 20;
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidPassword = password => password.length >= 6;



function showSnackbar(message) {
    const snackbar = document.getElementById('snackbar');
    snackbar.textContent = message; // This line is throwing the error
    snackbar.classList.add('show');
    setTimeout(() => snackbar.classList.remove('show'), 3000);
}



function handleError(errorMessage) {
    console.error(errorMessage);
}



async function MasonryLayout(mainconid, subconsid) {
    const container = document.getElementById(mainconid);
    if (!container) {
        console.error('Error: events container not found in the DOM.');
        return;
    }

    const items = Array.from(container.getElementsByClassName(subconsid));
    if (items.length === 0) {
        console.error('Error: No event elements found in the container.');
        return;
    }

    // Get the number of columns based on container width and item width
    const itemWidth = items[0].offsetWidth + 20; // width of the item + margin
    const columns = Math.floor(container.offsetWidth / itemWidth);
    const columnHeights = Array(columns).fill(0); // Array to track the height of each column

    // Helper function to place items into columns
    function placeItems() {
        // Clear previous positioning
        items.forEach(item => {
            item.style.position = 'absolute';
            item.style.left = '';
            item.style.top = '';
        });

        items.forEach(item => {
            const itemHeight = item.offsetHeight;

            // Find the index of the column with the minimum height
            const columnIndex = columnHeights.indexOf(Math.min(...columnHeights));

            // Set the item's position
            item.style.left = `${columnIndex * itemWidth}px`;
            item.style.top = `${columnHeights[columnIndex]}px`;

            // Update the height of the column that the item was placed in
            columnHeights[columnIndex] += itemHeight + 20; // Add margin
        });

        // Optionally, set the container height to match the tallest column
        container.style.height = `${Math.max(...columnHeights)}px`;
    }

    // Ensure images are loaded before applying the masonry layout
    const images = Array.from(container.getElementsByTagName('img'));
    const imagePromises = images.map(img => {
        return new Promise(resolve => {
            if (img.complete) {
                resolve();
            } else {
                img.onload = resolve;
            }
        });
    });

    // Wait for all images to load before placing items
    await Promise.all(imagePromises);

    // Now we can call the placeItems function to position everything
    placeItems();

    // Optionally, handle window resizing and reapply masonry layout
    window.addEventListener('resize', () => {
        // Recalculate column count and reapply layout
        placeItems();
    });
}



export { escapeHTML, validateInputs, isValidUsername, isValidEmail, isValidPassword, showSnackbar, handleError, MasonryLayout };