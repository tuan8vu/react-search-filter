
import { useEffect, useState } from "react";
//import { Users } from "./api/users";
import "./app.css";
import Table from "./Table";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data);
    };
    fetchUsers();
  }, [query]);

  return (
    <div className="app">
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      {<Table data={data} />}
    </div>
  );
}

export default App;