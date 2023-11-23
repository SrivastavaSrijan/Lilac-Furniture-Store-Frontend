export const NavbarConstants = {
  pages: [
    { title: 'Home', href: '/' },
    { title: 'Explore', href: '/explore/1' },
    { title: 'Contact', href: 'contact' },
  ],
  user: ['Profile', 'Log Out'],
};

export const AssetsConfig = {
  root: '/assets',
  get error() {
    return `${AssetsConfig.root}/error.png`;
  },
  cloudinary: {
    root: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1699532885/assets/images/`,
    get login() {
      return `${this.root}login/insecvbbdqfejdxk3l4o.jpg`;
    },
    get shop() {
      return `${this.root}sho/lezjsoebnyfiugzhdpsa.jpg`;
    },
  },
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
    '404': {
      title: 'Page Not Found | Lilac',
    },
    index: {
      title:
        'Lilac: Mid-Century Modern Furniture for Elegant & Contemporary Living Spaces',
      path: '/',
    },
    welcome: {
      path: '/welcome',
      title: {
        'sign-up':
          'Join Lilac: Create Your Account for Exclusive Mid-Century Furniture Access',
        'sign-in':
          'Log In to Lilac: Access Your Mid-Century Modern Furniture World',
        'forgot-password': 'Reset Your Lilac Account Password - Quick & Secure',
        'request-password':
          'Forgot Password - Recover Your Lilac Account Access',
      },
    },
    explore: {
      path: '/explore/[page].tsx',
    },
    category: {
      path: '/category/[slug].tsx',
    },
    products: {
      path: '/products/[id].tsx',
    },
    checkout: {
      path: '/checkout',
    },
    default: {
      description:
        'Discover timeless elegance and modern comfort at Lilac, your destination for mid-century modern furniture. Explore a curated collection of beautifully crafted pieces that blend pastel sophistication with a touch of nostalgia. Redefine your living spaces with our exquisite designs. Welcome to Lilac, where classic meets contemporary.',
    },
    image: AssetsConfig.brand.preview,
  },
};

export const MessagesMap = {
  required: 'This field is required',
  invalid: 'This field is invalid',
  error: 'Something went wrong!',
  user: {
    notFound: `Couldn't find a user with that email/password entered is incorrect`,
    reset: {
      redeemedFailure: 'Link expired or invalid, please request a new one',
      requestedSuccess:
        'Sent an email at your registered email ID. Please click on the link to reset your password.',
      requestedFailure: `Unable to send an email/user does not exist.`,
      redeemedSuccess: 'Password changed successfully. Please sign in.',
    },
  },
};
