import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMettupsPage from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favorites";
import MainNav from "./components/layout/MainNav";

function App() {
  return (
    <div>
      <MainNav />
      <Switch>
        <Route path='/' exact>
          <AllMeetupsPage/>
        </Route>
        <Route path="/new-meetup">
          <NewMettupsPage/>
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
