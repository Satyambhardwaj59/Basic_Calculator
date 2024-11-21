let string = "";
const display = document.querySelector('#input-display');
           
document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', (e) => {
    const value = e.target.innerHTML;
        
        if (value === "AC") {
                    // Clear the display
                    string = "";
                    display.value = string;
         } else if (value === "DE") {
        
            // Delete the last character
            string = string.slice(0, -1);
            display.value = string;
        } else if (value === "=") {
            try {
 
           // Evaluate the expression
            string = eval(string).toString();
            display.value = string;
         } catch {
            display.value = "Error";
            string = "";
        }
    } else {
        // Append the button value to the string
        string += value;
        display.value = string;
    }
});
});
