import { createSignal } from "solid-js";

function App() {
  const [activeTab, setActiveTab] = createSignal("home");

  return (
    <div>
      <style>
        {`
          nav {
            padding: 10px;
          }
          ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
            display: flex;
          }
          li {
            margin-right: 10px;
          }
          a {
            text-decoration: none;
            color: white;
          }
          .active {
            font-weight: bold;
          }
        `}
      </style>

      <nav className="bg-success">
        <ul>
          <li classList={{ active: activeTab() === "home" }}>
            <a href="#" onClick={() => setActiveTab("home")}>
              School Management
            </a>
          </li>
        </ul>
      </nav>

     
      <div>
        
      </div>
    </div>
  );
}

export default App;
