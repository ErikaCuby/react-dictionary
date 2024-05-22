import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App">
        <Dictionary defaultWord="sunrise" />
      </header>
    </div>
  );
}
