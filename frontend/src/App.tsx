import Markdown from "react-markdown";
import "./App.css";

function App() {
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
    </>
  );
}

export default App;
