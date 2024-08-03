import { expect } from "@jest/globals";
import React from "react";
import { InfoPortal } from "@/components/InfoPortal/InfoPotral";
import { Layout } from "@/components/Layout/Layout";
import { render, waitFor, queryByTestId } from "@testing-library/react";

const AuthNavbar = () => <div>AuthNavbar</div>;
const Navbar = () => <div>Navbar</div>;

const propsInfo = { isActiveLayout: false };
const propsLayout = { AuthNavbar: <AuthNavbar />, Navbar: <Navbar /> };

test("Checking props 'isActiveLayout' with false value", () => {
  const componentInfo = render(
    <InfoPortal {...propsInfo}>
      <div>Harry</div>
    </InfoPortal>
  );
  const componentLayout = render(
    <Layout {...propsLayout}>
      <div>Button</div>
    </Layout>
  );

  expect(
    queryByTestId(componentLayout.container, "info-portal-test-id")
  ).not.toBeInTheDocument();
});

test("Checking props 'isActiveLayout' with true value and displayed portal inside Layout", async () => {
  const componentLayout = render(
    <Layout {...propsLayout}>
      <div>Button</div>
    </Layout>
  );

  const { rerender } = render(
    <InfoPortal {...propsInfo}>
      <div>Harry</div>
    </InfoPortal>
  );

  expect(
    queryByTestId(componentLayout.container, "info-portal-test-id")
  ).not.toBeInTheDocument();

  waitFor(() => {
    rerender(
      <InfoPortal isActiveLayout={true}>
        <div>Harry</div>
      </InfoPortal>
    );
  });

  expect(
    queryByTestId(componentLayout.container, "info-portal-test-id")
  ).toBeInTheDocument();

  expect(componentLayout).toMatchSnapshot();
});
