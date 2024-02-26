import React from "react";
import './App.css';
import { useQuery } from "react-query";
import MovieView from "./views/MovieView";
const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};
const App = () => {
  const { data, status } = useQuery("users", fetchUsers);
  return (
    <div className="App">
     

<header className="py-5 bg-gray-700 text-white text-center">
          Popular movies
        </header>
        <MovieView></MovieView>
        {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <div>
          {data.map((user) => (
            <p key={user.id}>{user.name}</p>
          ))}
        </div>
      )}
    </div>
  );
};
export default App;