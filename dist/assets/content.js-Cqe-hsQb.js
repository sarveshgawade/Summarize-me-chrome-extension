const e=document.body.innerText;console.log("Page data is here:",e);chrome.runtime.onMessage.addListener((a,n,t)=>{a.action==="get_page_data"&&t({data:e})});
