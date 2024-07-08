import { cleanup, fireEvent, mswServer, render, screen, waitFor } from "@import/libs/test-utils";

import Home from "./page";

jest.mock("next/navigation", () => ({
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(""),
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe("Landing Page", () => {
  afterEach(() => {
    cleanup();
    mswServer.resetHandlers();
  });
  afterAll(() => mswServer.close());
  it("should render title testing", async () => {
    render(<Home />);
    await waitFor(() => {
      expect(screen.getByText("Testing")).toBeInTheDocument();
    });
  });
  it("should check button love element length", async () => {
    render(<Home />);
    await waitFor(() => {
      expect(screen.queryAllByTestId("button-love").length).toBe(4);
    });
  });

  it("should click button load more", async () => {
    render(<Home />);
    await waitFor(() => {
      expect(screen.queryAllByTestId("button-love").length).toBe(4);
    });

    await waitFor(() => {
      expect(screen.getByTestId("btn-load-more")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId("btn-load-more"));

    await waitFor(() => {
      expect(screen.queryAllByTestId("button-love").length).toBe(8);
    });
  });
});
