import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { getAuthToken } from "./services/authService";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Distribution from "./components/Distribution";
import Medicine from "./components/Medicine";
import Hospitals from "./components/Hospitals";
import Reports from "./components/Reports";
import InstitutionStock from "./components/InstitutionStock";
import UserProfile from "./components/UserProfile";

const App = () => {
  return (
    <div className="container-fluid">
      <Switch>
        <Route path="/auth" component={() => <Login />} />
        <Route
          path="/msd/dashboard"
          component={() => <Dashboard title="Dashboard" />}
        />
        <Route
          path="/msd/distribution"
          component={() => <Distribution title="Medicine Distribution" />}
        />
        <Route
          path="/msd/medicine"
          component={() => <Medicine title="Medicine Stock" />}
        />
        <Route
          path="/msd/hospitals"
          component={() => <Hospitals title="Institutions Management" />}
        />
        <Route
          path="/msd/msd-reports"
          component={() => <Reports title="Reports Management" />}
        />
        <Route
          path="/msd/hospital/stock/:refNo"
          component={() => <InstitutionStock title="Institution Stock" />}
        />
        <Route
            path="/msd/hospital/profile"
            component={() => <UserProfile title="User Profile" />}
        />
        <Redirect from="/" to="/auth" />
      </Switch>
    </div>
  );
};

export default App;
