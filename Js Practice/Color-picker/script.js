let colorInterval; // To keep track of the color change interval

// Function to generate a random color
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

$(document).ready(function() {
    // Change background color when a color in the table is clicked
    $('.color-cell').click(function() {
        const bgColor = $(this).css('background-color');
        $('body').css('background-color', bgColor);
    });

    // Start/Stop automatic color changes
    $('.start-stop-button').click(function() {
        const button = this;

        if (button.innerText === "Start") {
            // Start changing background color every second
            colorInterval = setInterval(function() {
                const randomColor = generateRandomColor();
                $('body').css('background-color', randomColor);
            }, 500); // Adjust the interval duration if needed

            button.innerText = "Stop"; // Change the button text to "Stop"
        } else {
            // Stop automatic color changes
            clearInterval(colorInterval);
            const finalRandomColor = generateRandomColor();
            $('body').css('background-color', finalRandomColor); // Set a random color when stopped
            button.innerText = "Start"; // Change the button text back to "Start"
        }
    });
});