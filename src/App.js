import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DefaultLayout from "./components/layouts/DefaultLayout";
import { ROOT_PATH } from "./routes/Slugs";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          {/* <Route exact path={LOGIN_PATH} component={WrappedLogin} />
            <Route exact path={PMS_LOGIN_PATH} component={PMSLoginPage} />
            <PrivateRoute isLogin={authContext.isLogin} exact path={PAGE_404_PATH} component={Page404} />
            <PrivateRoute isLogin={authContext.isLogin} exact path={PAGE_403_PATH} component={Page403} />
            <PrivateRoute isLogin={authContext.isLogin} exact path={PAGE_500_PATH} component={Page500} />
            <PrivateRoute isLogin={authContext.isLogin} path={PMS_PHARMACY_VIEW_PATH} component={PMSPharmacy} /> */}
          <Route path={ROOT_PATH} component={DefaultLayout} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
