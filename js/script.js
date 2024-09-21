const canvas = document.querySelector(".canvas");

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
