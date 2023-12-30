import { render, screen, waitFor } from "@testing-library/react";
import { CategoriesGrid, ErrorBoundary } from "@/components";
import { MockedProvider } from "@apollo/client/testing";
import mocks, { mockCategories } from "../src/lib/graphql/mocks";

describe("CategoriesGrid Component", () => {
  it("renders categories with provided data", () => {
    render(<CategoriesGrid categories={mockCategories} />);
    mockCategories.forEach((category) => {
      const { name, description } = category;
      if (!name || !description) throw new Error("Missing fields");
      expect(screen.getByText(name)).toBeInTheDocument();
      expect(screen.getByText(description)).toBeInTheDocument();
    });
  });

  it("renders title and subtitle when provided", async () => {
    const title = "Our Categories";
    const subtitle = "Explore our wide range of products";
    const wrapper = render(
      <ErrorBoundary>
        <MockedProvider mocks={mocks}>
          <CategoriesGrid
            title={title}
            subtitle={subtitle}
            categories={mockCategories}
          />
        </MockedProvider>
      </ErrorBoundary>,
    );
    await waitFor(() => {
      expect(wrapper.getByText(title)).toBeInTheDocument();
      expect(wrapper.getByText(subtitle)).toBeInTheDocument();
    });
  });
});
