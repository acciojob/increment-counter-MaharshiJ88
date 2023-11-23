//your JS code here. If required.
const counterElement = document.getElementById('counter');
        const incrementBtn = document.getElementById('incrementBtn');

        // Initial counter value
        let counterValue = 0;

        // Function to increment the counter
        function incrementCounter() {
            // Display the un-incremented value in an alert
            alert("Un-incremented Value: " + counterValue);
            
            // Increment the counter value
            counterValue++;

            // Update the counter text in the HTML
            counterElement.textContent = counterValue;
        }

        // Attach the incrementCounter function to the button click event
        incrementBtn.addEventListener('click', incrementCounter);