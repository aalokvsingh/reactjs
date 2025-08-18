import "./App.css";
import FetchUsers from "./api/FetchUsers";
import AxiosUsers from "./api/AxiosUsers";
import AxiosUpload from "./api/AxiosUpload";
import AxiosPost from "./api/AxiosPost";


// https://jsonplaceholder.typicode.com/
// https://randomuser.me/

function App() {
  

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        React Fetch vs Axios Demo
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <AxiosPost />
        {/* <AxiosUpload /> */}
        {/* // <FetchUsers /> */}
        {/* // <AxiosUsers /> */}
      </div>
    </div>
   
  );
}

export default App;
