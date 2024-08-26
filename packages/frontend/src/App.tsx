import Markdown from "react-markdown";
import "./App.css";

function App() {
  const onClick = async () => {
    const res = await fetch("/api/chat");

    if (res.ok) {
      const json = await res.json();
      alert(JSON.stringify(json));
    } else {
      alert("Failed to fetch");
      console.error("Failed to fetch", res);
    }
  };

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold underline">Hello world!</h1>
      </div>
      <div>
        <article className="prose prose-slate text-left">
          <Markdown>{`
## Hello markdown
Lorem ipsum.`}</Markdown>
        </article>
      </div>

      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onClick}
        >
          Button
        </button>
      </div>
    </>
  );
}

export default App;
