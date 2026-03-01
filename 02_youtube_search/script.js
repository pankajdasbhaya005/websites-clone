function searchYouTube() {
    const query = document.getElementById("searchInput").value;

    if (query.trim() !== "") {
        const url = "https://www.youtube.com/results?search_query=" + encodeURIComponent(query);
        window.location.href = url;
    }
}
document.getElementById("searchInput")
.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchYouTube();
    }
});