const canvas = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    const div_row = document.createElement("div");
    div_row.classList.add("row");

    for (let j = 0; j < 16; j++) {
        const div_col = document.createElement("div");
        div_col.classList.add("col");
        div_row.appendChild(div_col);
    }
    canvas.appendChild(div_row);
}

// Change background color when mouse moves over a grid cell (leaving a trail)
document.addEventListener('mouseover', function(event) {
    if (event.target.classList.contains('col')) {
        event.target.style.backgroundColor = "lightblue"; // Change to any color for the trail
    }
});

function myFunction(){
    let number = prompt("Enter the number between 1 and 100:");
    let intValue = parseInt(number, 10);
    alert("The number is "+ intValue);
}