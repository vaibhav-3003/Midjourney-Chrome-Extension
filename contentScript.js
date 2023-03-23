const generateImage = (text) => {
    return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({ message: 'generateImage', text: text }, (response) => {
            if (response.success) {
                resolve(response.imageUrl);
                console.log(response.imageUrl);
            } else {
                reject(response.error);
            }
        });
    });
};
