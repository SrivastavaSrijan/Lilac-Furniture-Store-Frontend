export const NavbarConstants = {
  pages: ['Home', 'Shop', 'About', 'Contact'],
  user: ['Profile', 'Log Out'],
};

export const AssetsConfig = {
  root: '/assets',
  brand: {
    get root() {
      return `${AssetsConfig.root}/brand`;
    },
    get logo() {
      return `${this.root}/logo.png`;
    },
    get preview() {
      return `${this.root}/preview.jpg`;
    },
    get favicon() {
      return `${this.root}/favicon.ico`;
    },
  },
};

export const AppConfig = {
  name: 'Lilac',
  pages: {
    index: {
      title: 'Home Page',
    },
    category: {
      path: '/category/[id].tsx',
    },
    products: {
      path: '/products/[id].tsx',
    },
    default: {
      description:
        'Discover timeless elegance and modern comfort at Lilac, your destination for mid-century modern furniture. Explore a curated collection of beautifully crafted pieces that blend pastel sophistication with a touch of nostalgia. Redefine your living spaces with our exquisite designs. Welcome to Lilac, where classic meets contemporary.',
    },
    image: AssetsConfig.brand.preview,
  },
};
