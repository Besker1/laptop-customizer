import React from "react";

import Header from "./Header";

import MainOptions from "./MainOptions";

import "./App.css";

const Features = (props) => {

  console.log("this is feature props", props);
  const features = Object.keys(props.features).map((featureName, idx) => {
    const featureHash = featureName + "-" + idx;

    return (
      <MainOptions
        key={featureHash}
        featureName={featureName}
        options={props.features[featureName]}
        currency={props.currency}
        updateFeature={(featureName, newValue) =>
          props.updateFeature(featureName, newValue)
        }
        feature={props.state}
      />
    );
  });

  return (
    <form className="main__form">
      <Header header={props.header} />

      {features}
    </form>
  );
};

export default Features;