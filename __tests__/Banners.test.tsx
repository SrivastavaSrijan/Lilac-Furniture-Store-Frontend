import { Banners } from "@/components";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { mockBanners } from "@/lib/graphql/mocks";

describe("Banners Component", () => {
  it("renders banners with generated data", () => {
    render(<Banners banners={mockBanners} />);
    const { title, subtitle, image, href } = mockBanners[0];
    if (!title || !subtitle || !image || !href)
      throw new Error("Missing data points");
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(subtitle)).toBeInTheDocument();
    expect(screen.getByAltText(title)).toHaveAttribute("src");
    if (href) {
      expect(screen.getByText("View more")).toBeInTheDocument();
    }
  });
});
