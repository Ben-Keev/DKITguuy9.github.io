https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function shareFunction() {
    // Copy the text inside the text field
    navigator.clipboard.writeText(document.URL);

    // Alert the copied text
    alert("Copied the text: " + document.URL);
}