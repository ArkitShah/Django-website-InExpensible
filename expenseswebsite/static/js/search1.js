const searchField = document.querySelector("#searchField");
const tableOutput = document.querySelector(".table-output");
const appTable = document.querySelector(".app-table");
const tbody1 = document.querySelector(".table-body");
const paginationContainer = document.querySelector(".pagination-container")

tableOutput.style.display = "none";
searchField.addEventListener("keyup", (e) => {
    const searchVal = e.target.value;
    if (searchVal.trim().length > 0) {
        tableOutput.style.display = "none";
        paginationContainer.style.display = "none";
        tbody1.innerHTML = "";
        fetch("/search-income", {
            body: JSON.stringify({searchText: searchVal}),
            method: "POST",
            })
            .then((res) => res.json())
            .then((data) => {
                appTable.style.display = "none";
                tableOutput.style.display = "block";
                if (data.length === 0){
                    tableOutput.innerHTML = "No results found.";
                } else {
                    tbody1.innerHTML = "";
                    data.forEach((item) => {
                        tbody1.innerHTML += `
                    <tr>
                    <td>${item.amount}</td>
                    <td>${item.source}</td>
                    <td>${item.description}</td>
                    <td>${item.date}</td>
                    </tr>`;
                    });
                }
            });
    } else {
        appTable.style.display = "block";
        tableOutput.style.display = "none";
        paginationContainer.style.display = "block";
    }
});