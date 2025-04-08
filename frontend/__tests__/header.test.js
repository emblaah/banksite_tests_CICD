import { render, screen, fireEvent } from "@testing-library/react";
import Header from "@/app/components/Header";

describe("Header component", () => {
  test("renders logo link", () => {
    render(
      <Header
        loggedIn={false}
        focusLoginForm={jest.fn()}
        handleLogout={jest.fn()}
      />
    );
    const logo = screen.getByText(/VeloBank/i);
    expect(logo).toBeInTheDocument();
  });

  test("shows 'Log in' button when not logged in", () => {
    const mockFocus = jest.fn();
    render(
      <Header
        loggedIn={false}
        focusLoginForm={mockFocus}
        handleLogout={jest.fn()}
      />
    );

    const loginButton = screen.getByText(/Log in/i);
    expect(loginButton).toBeInTheDocument();

    fireEvent.click(loginButton);
    expect(mockFocus).toHaveBeenCalled();
  });

  test("shows 'Log out' button when logged in", () => {
    const mockLogout = jest.fn();
    render(
      <Header
        loggedIn={true}
        handleLogout={mockLogout}
        focusLoginForm={jest.fn()}
      />
    );

    const logoutButton = screen.getByText(/Log out/i);
    expect(logoutButton).toBeInTheDocument();

    fireEvent.click(logoutButton);
    expect(mockLogout).toHaveBeenCalled();
  });
});
