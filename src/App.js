import "./App.css";
import SearchBar from "./Components/SearchBar";
import CardRepo from "./Components/CardRepo";
import React from "react";
import Container from "./Components/Container";
function App() {
  const [text, setText] = React.useState("");
  const [error, setError] = React.useState(false);
  const [myRes, setmyRes] = React.useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.elements.query.value) {
      setError(true);
    } else {
      setError(false);
      setText(e.target.elements.query.value);
      console.log(e.target.elements.query.value);
      console.log(text);
    }
  };
  React.useEffect(() => {
    if (!text) {
      return;
    }
    fetch(`https://api.github.com/search/repositories?q=${text}`)
      .then((res) => res.json())
      .then((data) => setmyRes(data.items));
  }, [text]);

  return (
    <div className="App">
      <SearchBar error={error} handleSubmit={handleSubmit} />
      {myRes && <Container myRes={myRes} />}
    </div>
  );
}

export default App;
