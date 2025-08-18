import {useState,useEffect, use} from 'react'
import axios from 'axios';

export default function AxiosUsers() {
    const [users, setUsers] = useState([null]);
    const [error, setError] = useState(null);  
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            setUsers(response.data.slice(0, 5));
            setLoading(false);
        })
      .catch((error) => {
        if (error.response) {
        setError(error)
        } 
        console.error("There was a problem with the fetch operation:", error);  
        // setError(error.message);
        setLoading(false);
      });

    },[]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div><p className="text-red-500">Error: {<pre>{JSON.stringify(error, null, 2)}</pre>}</p></div>
    
    
    if (!users || users.length === 0) {
        return <p>No users found.</p>;
    }else{
        console.log("Users:", users);
    }

    return (
    <div className="p-4 border rounded-xl shadow-md bg-gray-50">
      <h2 className="text-xl font-bold mb-2">Get Users with Axios Get API</h2>
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