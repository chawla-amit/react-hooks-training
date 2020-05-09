import React from "react";
import Carousel from "./components/Carousel";

/*
  persist autoplay here
 */
function App() {
  return (
    <div className="container">
      <h1>React Hooks Training</h1>
      <main>
        <Carousel />
        {/* <div className="d-flex justify-content-center m-2">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary">
              Forward
            </button>
            <button type="button" class="btn btn-secondary">
              Stop
            </button>
            <button type="button" class="btn btn-secondary">
              Reverse
            </button>
          </div>
        </div> */}
      </main>
    </div>
  );
}

export default App;
