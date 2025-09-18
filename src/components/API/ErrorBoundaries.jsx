import ErrorBoundary from "../../ErrorBoundary";


function UnstableWidget() {
  if (Math.random() > 0.5) {
    throw new Error("Random widget failure");
  }
  return (
    <div className="widget-success-div">
      Widget Loaded Successfully
    </div>
  );
}


const GlobalFallback = (reset) => (
  <div className="global-fallback-container">
    <h2>Something went wrong globally</h2>
    <p>Try reloading the app or click below.</p>
    <button
      className="retry-button"
      onClick={reset}
    >
      Retry App
    </button>
  </div>
);

const WidgetFallback = (reset) => (
  <div className="widget-fallback-container">
    <h3 style={{ color: "gray" }}>Widget failed</h3>
    <button
    className="retry-button"
      onClick={reset}>
      Retry Widget
    </button>
  </div>
);





export default function ErrorBoundaries() {
  return (
    <div style={{  padding: "20px" }}>
      <h2>Error Boundary </h2>


      <ErrorBoundary fallback={GlobalFallback}>
        <div className="error-boundaries-container">
          <section className="section">
            <h3>Stable Section</h3>
            <p>This part will never fail.</p>
          </section>

          <section className="section">
            <h3>Unstable Widget Section</h3>
            <ErrorBoundary fallback={WidgetFallback}>
              <UnstableWidget />
            </ErrorBoundary>
          </section>

          <section className="section">
            <h3>Another Unstable Widget</h3>
            <ErrorBoundary fallback={WidgetFallback}>
              <UnstableWidget />
            </ErrorBoundary>
          </section>
        </div>
      </ErrorBoundary>
    </div>
  )
}
