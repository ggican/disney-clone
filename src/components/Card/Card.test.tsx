// CardContent.test.js

import { fireEvent, render } from "@testing-library/react";
import React from "react";

import CardContent from "./Card";

describe("CardContent component", () => {
  test("renders card content correctly", () => {
    // eslint-disable-next-line @next/next/no-img-element
    const image = <img src="test.jpg" alt="test" />;
    const content = <p>Test content</p>;

    const { getByText, getByTestId } = render(
      <CardContent image={image} content={content} onLove={() => {}} isLove={false} />,
    );

    // Check if the image and content are rendered
    expect(getByText("Test content")).toBeInTheDocument();
    expect(getByTestId("button-love")).toBeInTheDocument();
  });

  test("handles click on love button correctly", () => {
    // eslint-disable-next-line @next/next/no-img-element
    const image = <img src="test.jpg" alt="test" />;
    const content = <p>Test content</p>;

    const onLoveMock = jest.fn(); // Mock the onLove function

    const { getByTestId } = render(
      <CardContent image={image} content={content} onLove={onLoveMock} isLove={false} />,
    );

    const loveButton = getByTestId("button-love");

    // Click the love button
    fireEvent.click(loveButton);

    // Expect the onLove function to have been called with the correct parameter
    expect(onLoveMock).toHaveBeenCalledTimes(1);
    expect(onLoveMock).toHaveBeenCalledWith(true); // Assuming it toggles isLove
  });
});
