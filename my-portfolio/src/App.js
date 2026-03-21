import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1>My Portfolio</h1>
        <p>Hello, I'm Narendra Sen</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>I am learning HTML and web development.</p>
      </section>

      <section>
        <h2>My Projects</h2>

        <article>
          <h3>Project 1</h3>
          <p>Portfolio webpage</p>
        </article>

        <article>
          <h3>Project 2</h3>
          <p>Basic HTML practice page</p>
        </article>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: narendra.sen@ssism.org</p>
      </section>
    </div>
  );
}

export default App;