import { render } from "@testing-library/react";
import React from "react";

export const renderComponent = ({ Component, props }) => {
  return render(<Component {...props} />);
};
