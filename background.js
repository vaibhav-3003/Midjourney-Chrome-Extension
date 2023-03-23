chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === 'generateImage') {
        const apiKey = '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'; // your OpenAI API key here

        fetch('https://api.openai.com/v1/images/generations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                "model": "image-alpha-001",
                "prompt": request.text,
                "num_images": 1,
                "size": "512x512",
                "response_format": "url"
            })
        })
            .then(response => response.json())
            .then(data => {
                sendResponse({ success: true, imageUrl: data.data[0].url });
            })
            .catch(error => {
                console.error('Error generating image:', error);
                sendResponse({ success: false, error: error.message });
            });

        return true; // tell Chrome we will be responding asynchronously
    }
});
