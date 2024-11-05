// Select elements for displaying browser information
const browserNameElement = document.getElementById('browserName');
const browserVersionElement = document.getElementById('browserVersion');

// Extract browser information using userAgent
const userAgent = navigator.userAgent;
const browserInfo = userAgent.match(/(firefox|msie|chrome|safari|opr|edg|brave)\/?\s*(\d+)/i) || [];
const browserName = browserInfo[1];
const browserVersion = browserInfo[2];

// Display browser name and version
browserNameElement.innerText = browserName ? browserName.charAt(0).toUpperCase() + browserName.slice(1) : "Unknown";
browserVersionElement.innerText = browserVersion || "Unknown";

// Display screen width and height
document.getElementById('screenWidth').innerText = screen.width;
document.getElementById('screenHeight').innerText = screen.height;

// Display history length
document.getElementById('historyLength').innerText = history.length;

// Count and display number of paragraph tags
const paraCount = document.getElementsByTagName('p').length;
document.getElementById('paraCount').innerText = paraCount;

// Add event listener for replacing text in sampleText paragraph
document.getElementById('replaceTextButton').addEventListener('click', () => {
    const newText = document.getElementById('newText').value;
    const sampleTextElement = document.getElementById('sampleText');
    sampleTextElement.innerText = newText || "The text has been replaced!";
});
