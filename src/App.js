import React, { useState } from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Distribution from "./components/Distribution";
import Medicine from "./components/Medicine";
import Hospitals from "./components/Hospitals";
import Reports from "./components/Reports";
import InstitutionStock from "./components/InstitutionStock";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return <Login setLoggedIn={setLoggedIn} />;
  }

  return (
    <div className="container-fluid">
      <Header />
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
        path="/msd/hospital/stock"
        component={() => <InstitutionStock title="Institution Stock" />}
      />
    </div>
  );
};

export default App;
