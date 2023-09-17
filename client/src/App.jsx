import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css"

function App() {

  const [apiData, setApiData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_URL;
        console.log("api", import.meta.env.VITE_API_URL)
        const response = await axios.get(apiKey);
        if (response.status === 200) {
          setApiData(response?.data?.blog_records);
          console.log(apiData);
        }
      } catch (error) {
        console.error(error.response);
      }
    }
    fetchData();

  }, [])


  return (
    <div className="container">
      {apiData && apiData.map((blog, index) => (
        <div key={index} className="card-container">
          <img className="img" src={`https://picsum.photos/${index + 1}00/200`} />
          <div className="content">
            <h5>{blog.title}</h5>
            <p>{blog.post}</p>
          </div>
        </div>
      ))}
    </div>


  )
}

export default App


