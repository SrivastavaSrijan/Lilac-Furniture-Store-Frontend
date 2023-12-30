import { en, Faker } from '@faker-js/faker';

import {
  aBanner,
  aCategory,
  aProduct,
  aProductWhereInput,
  ProductsWhereDocument,
} from '@/lib/graphql';

const faker = new Faker({ locale: [en] });

const generateBanners = () =>
  aBanner({
    id: faker.string.uuid(),
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.sentence(),
  });

export const mockBanners = Array.from({ length: 5 }, generateBanners);
const generateCategory = (_: any, index: number) =>
  aCategory({
    id: index.toString(),
    name: faker.commerce.department(),
    description: faker.lorem.sentence(),
  });

const generateProduct = (categoryId: string) =>
  aProduct({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    category: aCategory({ id: categoryId }),
  });

export const mockCategories = Array.from({ length: 4 }, generateCategory);
const products = mockCategories.map((category) =>
  Array.from({ length: 9 }, () => generateProduct(category.id)),
);

const getWhereInput = (categoryId: string) =>
  aProductWhereInput({ category: { id: { equals: categoryId } } });

const mocks = mockCategories.map((category) => ({
  request: {
    query: ProductsWhereDocument,
    variables: {
      where: getWhereInput(category.id),
      take: 9,
      includeDesc: false,
    },
  },
  result: {
    data: { products: products[parseInt(category.id, 10)] },
  },
}));

export default mocks;
