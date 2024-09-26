let number_of_squares = 16;
const canvas = document.querySelector(".container");

// Function to create canvas with dynamic square sizes
function create_canvas(number_of_squares) {
    // Clear the existing canvas
    canvas.innerHTML = '';

    // Calculate the size of each square dynamically based on input
    let square_size = 960 / number_of_squares;

    for (let i = 0; i < number_of_squares; i++) {
        const div_row = document.createElement("div");
        div_row.classList.add("row");

        for (let j = 0; j < number_of_squares; j++) {
            const div_col = document.createElement("div");
            div_col.classList.add("col");
            div_col.style.width = `${square_size}px`;
            div_col.style.height = `${square_size}px`;
            div_row.appendChild(div_col);
        }
        canvas.appendChild(div_row);
    }

    // Add mouseover event listener to each 'col' cell after creating the grid
    const cols = document.querySelectorAll('.col');
    cols.forEach(col => {
        col.addEventListener('mouseover', function() {
            this.style.backgroundColor = "black";
        });
    });
}

create_canvas(number_of_squares);

// Function to prompt user for grid size and recreate the canvas
function myFunction() {
    let number = prompt("Enter the number of squares per side (between 1 and 100):");
    let intValue = parseInt(number, 10);

    // Check if the number is valid (within the range)
    if (intValue >= 1 && intValue <= 100) {
        number_of_squares = intValue;  // Update the number of squares
        create_canvas(number_of_squares);  // Recreate the canvas with new grid size
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
}
