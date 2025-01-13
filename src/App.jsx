import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [data,setData] = useState('')
 
 useEffect(()=>{
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "get_page_data" }, (response) => {
      if (response && response.data) {
        setData(response.data);
      }
    });
    
  });
  
 })

  return (
    <div>
    <h1>Webpage Data</h1>
    <textarea
      value={data }
      readOnly
      style={{ width: "100%", height: "300px" }}
    />
  </div>
  )
}

export default App
