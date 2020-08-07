import React from "react";
import { Route, Switch } from "react-router-dom";


export default function Routes() {
  return (
    <Switch>
      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}