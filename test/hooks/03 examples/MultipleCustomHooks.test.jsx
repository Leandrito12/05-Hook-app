import { render, screen, waitFor } from "@testing-library/react";
import { MultipleCustomHooks } from "../../../src/components/03-examples/multipleCustomHooks/MultipleCustomHooks";
import { useFetch } from "../../../src/Hooks/useFetch";

jest.mock("../../../src/Hooks/useFetch");

describe("MultipleCustomHooks", () => {
  test("should render", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    expect(screen.getByText("Loading...")).toBeTruthy();
  });
  test("should first", () => {
    useFetch.mockReturnValue({
      data: [
        {
          image: "http://example.com",
          name: "TestName",
        },
      ],
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    screen.debug();
    expect(screen.getByText("TestName")).toBeTruthy;
  });
});
