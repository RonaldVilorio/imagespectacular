import React from "react";
import { Route, Switch } from "react-router-dom";
import AddImageContainer from "./containers/AddImageContainer";
import ImagesContainer from "./containers/ImagesContainer";

const Index = () => {
  return <ImagesContainer />;
};
const SubmitImage = () => {
  return <AddImageContainer />;
};
const Nature = () => {
  return <h2> Nature Images </h2>;
};
const Animals = () => {
  return <h2> Animal Images </h2>;
};
const Oceans = () => {
  return <h2> Ocean Images </h2>;
};

const AppRouter = () => {
  return (
    <div id="router">
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/SubmitImage/" component={SubmitImage} />
        <Route path="/Nature/" component={Nature} />
        <Route path="/Animals/" component={Animals} />
        <Route path="/Oceans/" component={Oceans} />
      </Switch>
    </div>
  );
};
export default AppRouter;
