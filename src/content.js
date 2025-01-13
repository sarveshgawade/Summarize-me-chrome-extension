const pageData = document.body.innerText
console.log('Page data is here:', pageData) 

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {   
    if (message.action === 'get_page_data') {
        sendResponse({data:pageData})
    }
});


