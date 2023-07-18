import Predict from "./Components/Predict";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import Admin from "./Components/Admin";

// Protected routes are implement for /admin page
function ErrorAdmin() {
  return (
    <div className="container my-container">
      <div className="red card-panel center-align">Login as Admin!</div>
    </div>
  );
}

function PrivateOutlet() {
  const token = localStorage.getItem("token");
  return token ? <Admin /> : <ErrorAdmin />;
}

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/predict", element: <Predict /> },
  { path: "/admin", element: <PrivateOutlet /> },
];
