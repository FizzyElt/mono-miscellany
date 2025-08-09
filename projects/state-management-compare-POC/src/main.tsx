import { Option, pipe } from "effect";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

pipe(
  Option.fromNullable(document.getElementById("root")),
  Option.map((root) => ReactDOM.createRoot(root).render(<App />)),
);
