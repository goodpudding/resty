import React from "react";
import { render, screen } from "@testing-library/react";
import History from "./Components/History";

describe("History", () => {
  test("renders History component", () => {
    render(<History searchHistory={[]} />);
    expect(screen.getByText(/Search History/i)).toBeInTheDocument();
  });

  test("renders search history items", () => {
    const searchHistory = [
      { method: "GET", url: "http://example.com" },
      { method: "POST", url: "http://example.com/post" },
    ];

    render(<History searchHistory={searchHistory} />);

    expect(screen.getByText(/GET/i)).toBeInTheDocument();
    expect(screen.getByText(/http:\/\/example\.com/i)).toBeInTheDocument();
    expect(screen.getByText(/POST/i)).toBeInTheDocument();
    expect(screen.getByText(/http:\/\/example\.com\/post/i)).toBeInTheDocument();
  });

  test("renders empty state if no search history", () => {
    render(<History searchHistory={[]} />);
    expect(screen.getByText(/No Search History/i)).toBeInTheDocument();
  });
});
