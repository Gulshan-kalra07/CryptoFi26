function copyToClipboard() {
    var textToCopy = "Hello, World!";
    var tempInput = document.createElement("textarea");
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Copied: " + textToCopy);
}