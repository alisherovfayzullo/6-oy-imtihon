import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="container grid grid-cols-3 gap-3 m-auto">
        {data.map((item) => (
          <div key={item.id} className="border w-[250px] p-2 rounded-lg">
            <h2>
              <strong>Title :</strong>
              {item.title}
            </h2>
            <br />
            <h3>
              <strong>Body : </strong>
              {item.body}
            </h3>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
