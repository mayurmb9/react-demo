import React from "react";
import ReactDOM from "react-dom/client";


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  resetError = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {

      return this.props.fallback(this.resetError);
    }
    return this.props.children;
  }
}


function UnstableWidget() {
  if (Math.random() > 0.5) {
    throw new Error("Random widget failure 🚨");
  }
  return (
    <div style={{ padding: "10px",color: "green", background: "#e0ffe0", borderRadius: "5px" }}>
      ✅ Widget Loaded Successfully
    </div>
  );
}


const GlobalFallback = (reset) => (
  <div style={{ padding: "20px", textAlign: "center", color: "white", background: "crimson" }}>
    <h2>🌍 Something went wrong globally</h2>
    <p>Try reloading the app or click below.</p>
    <button
      style={{
        padding: "10px 15px",
        background: "white",
        border: "none",
        color: "crimson",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "bold"
      }}
      onClick={reset}
    >
      Retry App
    </button>
  </div>
);

const WidgetFallback = (reset) => (
  <div style={{ padding: "10px", background: "#ffe0e0", borderRadius: "5px" }}>
    <h3 style={{ color: "gray" }}>⚠️ Widget failed</h3>
    <button
      style={{
        padding: "5px 10px",
        background: "tomato",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }}
      onClick={reset}
    >
      Retry Widget
    </button>
  </div>
);





export default function ErrorBoundaries() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h2>🚀 Error Boundary </h2>


      <ErrorBoundary fallback={GlobalFallback}>
        <div style={{ display: "grid", gap: "20px" }}>
          <section style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
            <h2>Stable Section</h2>
            <p>This part will never fail.</p>
          </section>

          <section style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
            <h2>Unstable Widget Section</h2>
            <ErrorBoundary fallback={WidgetFallback}>
              <UnstableWidget />
            </ErrorBoundary>
          </section>

          <section style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
            <h2>Another Unstable Widget</h2>
            <ErrorBoundary fallback={WidgetFallback}>
              <UnstableWidget />
            </ErrorBoundary>
          </section>
        </div>
      </ErrorBoundary>
    </div>
  )
}
