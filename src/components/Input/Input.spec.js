import React from "react";
import Input from "../Input";
import renderer from "../../util/renderer";

describe("decribes Input component", () => {
  it("Should render Input", () => {
    const { getByTestId } = renderer(
      <Input
        value={"Input component"}
      />
    );

    const inputContainer = getByTestId("input-search");
    expect(inputContainer).toBeInTheDocument();
  });

  it("Should render text on input field", () => {
    const { getByPlaceholderText } = renderer(
      <Input
        value={"Input component"}
        placeholder="Component Input"
      />
    );

    const inputText = getByPlaceholderText("Component Input");
    expect(inputText.value).toContain("Input component");
  });
});
