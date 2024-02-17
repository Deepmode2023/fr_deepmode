import { expect, jest } from "@jest/globals";
import React from "react";
import ClientPortal from "@/components/Portal/Portal";
import { render, waitFor, queryByTestId } from "@testing-library/react";
const testID = { initial: "test_portal_id", after: "after_portal_id" };
const propsPortal = {
  selector: testID.initial,
  show: false,
};

const ContainerComponentForPortal = ({ id = testID.initial }) => {
  return (
    <div id={id} data-testid="container-for-portal">
      Container for portal
    </div>
  );
};

test("Simple render Portal component with show=false", () => {
  render(
    <ClientPortal {...propsPortal}>
      <div data-testid="portal">Portal Testing</div>
    </ClientPortal>
  );
  const componentContainer = render(<ContainerComponentForPortal />);

  expect(componentContainer.queryByTestId("portal")).toBeNull();
  expect(componentContainer).toMatchSnapshot();
});

test("Simple render Portal component with show=true", () => {
  const componentContainer = render(<ContainerComponentForPortal />);

  render(
    <ClientPortal {...{ ...propsPortal, show: true }}>
      <div data-testid="portal">Portal Testing</div>
    </ClientPortal>
  );

  expect(componentContainer.queryByTestId("portal")).toBeInTheDocument();
  expect(componentContainer).toMatchSnapshot();
});

test("Imitation change show property", async () => {
  const componentContainer = render(<ContainerComponentForPortal />);
  const componentPortal = render(
    <ClientPortal {...propsPortal}>
      <div data-testid="portal">Portal Testing</div>
    </ClientPortal>
  );
  expect(componentContainer.queryByTestId("portal")).toBeNull();

  waitFor(() => {
    componentPortal.rerender(
      <ClientPortal {...{ selector: testID.initial, show: true }}>
        <div data-testid="portal">Portal Testing</div>
      </ClientPortal>
    );
  });

  expect(componentContainer.queryByTestId("portal")).toBeInTheDocument();
});

test("Checking for change selector props", () => {
  const componentContainer = render(<ContainerComponentForPortal />);
  const anotherComponentContainer = render(
    <ContainerComponentForPortal id={testID.after} />
  );
  const componentPortal = render(
    <ClientPortal show={true} selector={testID.initial}>
      <div data-testid="portal">Portal Testing</div>
    </ClientPortal>
  );

  expect(
    queryByTestId(componentContainer.container, "portal")
  ).toBeInTheDocument();
  expect(
    queryByTestId(anotherComponentContainer.container, "portal")
  ).not.toBeInTheDocument();

  waitFor(() => {
    componentPortal.rerender(
      <ClientPortal show={true} selector={testID.after}>
        <div data-testid="portal">Portal Testing</div>
      </ClientPortal>
    );
  });

  expect(
    queryByTestId(componentContainer.container, "portal")
  ).not.toBeInTheDocument();

  expect(
    queryByTestId(anotherComponentContainer.container, "portal")
  ).toBeInTheDocument();
});

test.only("Testing blocked state", async () => {
  const setState = jest.fn();
  jest.spyOn(React, "useState").mockImplementation((init) => [init, setState]);
  const componentContainer = render(<ContainerComponentForPortal />);
  const componentPortal = render(
    <ClientPortal show={true} selector={testID.initial}>
      <div data-testid="portal">Portal Testing</div>
    </ClientPortal>
  );

  await waitFor(() => {
    expect(setState.mock.calls.length).toBe(5);
  });
});
