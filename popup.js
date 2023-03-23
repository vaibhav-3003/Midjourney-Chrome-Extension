// 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 open ai API key
document.addEventListener("DOMContentLoaded", function () {
    const generateBtn = document.getElementById("generate-btn");
    const inputText = document.getElementById("input-text");
    const outputContainer = document.getElementById("output-container");

    generateBtn.addEventListener("click", function () {
        const text = inputText.value.trim();
        if (text) {
            outputContainer.innerHTML = "Generating image...";
            chrome.runtime.sendMessage({ message: "generateImage", text: text }, function (response) {
                if (response && response.success) {
                    outputContainer.innerHTML = `<img src="${response.imageUrl}" />`;
                } else {
                    outputContainer.innerHTML = "Failed to generate image";
                }
            });
        }
    });
});

//automatically increase the size of textarea
var textarea = document.getElementById("input-text");
var heightLimit = 130; 

textarea.oninput = function() {
  textarea.style.height = ""; /* Reset the height*/
  textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
};



