import { render, screen, waitFor } from "@testing-library/react";
import { CategoriesGrid, ErrorBoundary } from "@/components";
import { MockedProvider } from "@apollo/client/testing";
import mocks, { mockCategories } from "@/lib/graphql/mocks";

const title = "Our Categories";
const subtitle = "Explore our wide range of products";
const MockedCategoriesGrid = () => {
  return (
    <ErrorBoundary>
      <MockedProvider mocks={mocks}>
        <CategoriesGrid
          title={title}
          subtitle={subtitle}
          categories={mockCategories}
        />
      </MockedProvider>
    </ErrorBoundary>
  );
};

describe("CategoriesGrid Component", () => {
  it("renders categories with provided data", () => {
    render(<MockedCategoriesGrid />);
    mockCategories.forEach(async (category) => {
      const { name, description } = category;
      if (!name || !description) throw new Error("Missing fields");
      await waitFor(() => {
        expect(screen.findAllByText(name)).toBeInTheDocument();
        expect(screen.findAllByText(description)).toBeInTheDocument();
      });
    });
  });

  it("renders title and subtitle when provided", async () => {
    const wrapper = render(<MockedCategoriesGrid />);
    await waitFor(() => {
      expect(wrapper.getByText(title)).toBeInTheDocument();
      expect(wrapper.getByText(subtitle)).toBeInTheDocument();
    });
  });
});
