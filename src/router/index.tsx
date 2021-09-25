import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { routes } from "./routes";

import { Dashboard } from "@/screen/dashboard";
import { Page } from "@/screen/permissions/page";
import { Role } from "@/screen/permissions/role";
import { Keyboard } from "@/screen/charts/keyboard";
import { Line } from "@/screen/charts/line";
import { MixinCharts } from "@/screen/charts/mixin-charts";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/permissions/page" component={Page} />
        <Route path="/permissions/role" component={Role} />
        <Route path="/charts/keyboard" component={Keyboard} />
        <Route path="/charts/line" component={Line} />
        <Route path="/charts/mixin-charts" component={MixinCharts} />
      </Switch>
    </Router>
  );
};
