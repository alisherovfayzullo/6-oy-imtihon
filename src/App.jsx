import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [dark, setDark] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const toggleTheme = () => setDark(!dark);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading..........</p>;

  return (
    <div data-theme={dark ? "dark" : "light"}>
      <Navbar toggleTheme={toggleTheme} dark={dark} />
      <div className="container grid grid-cols-4 gap-y-2 m-auto mt-5">
        {data.map((item) => (
          <div key={item.id} className="border w-[250px] p-2 rounded-lg">
            <p>
              <strong>ID : </strong>
              {item.id}
            </p>
            <h2>
              <strong>Title : </strong>
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
    </div>
  );
}

export default App;
