import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/Hooks/useCounter";
import { act } from "react-dom/test-utils";

describe("testing useCounter", () => {
  test("should return default value", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;
    expect(counter).toBe(0);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("should generate counter with a value of 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;
    expect(counter).toBe(100);
  });

  test("should increase counter", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment } = result.current;
    act(() => {
      increment();
    });
    expect(result.current.counter).toBe(1);
  });

  test("should decrease counter", () => {
    const { result } = renderHook(() => useCounter(2));
    const { counter, decrement } = result.current;
    act(() => {
      decrement();
    });
    expect(result.current.counter).toBe(1);
  });

  test("should reset counter", () => {
    const { result } = renderHook(() => useCounter(2));
    const { reset, increment } = result.current;
    act(() => {
      increment();
      reset();
    });
    expect(result.current.counter).toBe(2);
  });
});
