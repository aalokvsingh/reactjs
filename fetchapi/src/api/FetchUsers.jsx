import {useState,useEffect} from "react"; 

export default function FetchUsers() {
  const [users, setUsers] = useState([null]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if(response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok");
      })
      .then((data) => {
        setUsers(data.slice(0, 15));
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (loading) return <p>Loading..................</p>;
  if (loading) console.log("Loading posts...");

  return (
    <div className="p-4 border rounded-xl shadow-md bg-gray-50">
      <h2 className="text-xl font-bold mb-2">Get Users with Fetch API</h2>
      {users.map((user) => (
        <div key={user.id} className="post-card p-2 mb-2 border-b">
          <h3 className="font-semibold">{user.name}</h3>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">{user.address.city}</p>
        </div>
      ))}
    </div>
  );

}