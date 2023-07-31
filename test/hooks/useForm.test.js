import { renderHook } from "@testing-library/react";
import { useForm } from "../../src/Hooks/useForm";
import { act } from "react-dom/test-utils";

describe("testing useForm", () => {
  const initialForm = {
    name: "juan",
    email: "juan@gmail.com",
  };
  test("should return default", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("should change form name", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;
    const valueChange = "Lea";
    act(() => {
      onInputChange({ target: { name: "name", value: valueChange } });
    });
    expect(result.current.name).toBe(valueChange);
    expect(result.current.formState.name).toBe(valueChange);
  });

  test("should reset form state", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;
    const valueChange = "Lea";
    act(() => {
      onInputChange({ target: { name: "name", value: valueChange } });
      onResetForm();
    });
    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
