function searchGoogle() {
    let query = document.getElementById("searchInput").value;

    if(query.trim() !== "") {
        window.location.href = "https://www.google.com/search?q=" + query;
    }
}
document.getElementById("searchInput")
.addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        searchGoogle();
    }
});