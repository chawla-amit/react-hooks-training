import React from "react";
import Carousel from "./components/Carousel";
import usePersistentState from "./hooks/use-persistent-state";

function App() {
  const [autoplay, setAutoplay] = usePersistentState(0, "autoplay");

  return (
    <div className="container">
      <h1>React Hooks Training</h1>
      <main>
        <Carousel autoplay={autoplay} />
        <div className="d-flex justify-content-center m-2">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => setAutoplay(-1)}
            >
              Previous
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => setAutoplay(0)}
            >
              Stop
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => setAutoplay(1)}
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
