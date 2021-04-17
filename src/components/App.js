import { HashRouter as Router, Route } from "react-router-dom";
import Details from "../routes/Details";
import Home from "../routes/Home";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Details} />
    </Router>
  );
}

export default App;
