import { cleanup, fireEvent, mswServer, render, screen, waitFor } from "@import/lib/test-utils";

import ExplorePage from "./page";

jest.mock("next/navigation", () => ({
  usePathname: () => "/explore",
  useSearchParams: () => new URLSearchParams("?query=Zombie"),
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe("Explore Page", () => {
  afterEach(() => {
    cleanup();
    mswServer.resetHandlers();
  });
  afterAll(() => mswServer.close());
  it("should render search bar have value", async () => {
    render(<ExplorePage />);
    await waitFor(() => {
      expect(screen.getByDisplayValue("Zombie")).toBeInTheDocument();
    });
  });
  it("should render search bar change value", async () => {
    render(<ExplorePage />);
    const nameInput = screen.getByTestId("input-search-form");
    nameInput && fireEvent.change(nameInput, { target: { value: "Frozen" } });
    await waitFor(() => {
      expect(screen.getByDisplayValue("Frozen")).toBeInTheDocument();
    });
  });

  it("should render movie list", async () => {
    render(<ExplorePage />);
    await waitFor(() => {
      expect(screen.getByText("Movies Results")).toBeInTheDocument();
    });
  });
  it("should render series list", async () => {
    render(<ExplorePage />);
    await waitFor(() => {
      expect(screen.getByText("Series Results")).toBeInTheDocument();
    });
  });

  it("should render movie check total data", async () => {
    const { container } = render(<ExplorePage />);
    await waitFor(() => {
      expect(container.getElementsByClassName("test-id-movie").length).toBe(12);
    });
  });

  it("should render series check total data", async () => {
    const { container } = render(<ExplorePage />);
    await waitFor(() => {
      expect(container.getElementsByClassName("test-id-series").length).toBe(7);
    });
  });

  it("should render search bar close value", async () => {
    render(<ExplorePage />);
    const closeIcon = screen.getByTestId("close-search-form");
    closeIcon && fireEvent.click(closeIcon, {});
    const inputSearch = screen.getByTestId("input-search-form");
    await waitFor(() => {
      expect(inputSearch).toHaveValue("");
    });
  });
});
