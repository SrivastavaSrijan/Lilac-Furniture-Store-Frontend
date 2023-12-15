export const NavbarConstants = {
  pages: [
    { title: 'Home', href: '/' },
    { title: 'Explore', href: '/explore/1' },
    { title: 'Shop', href: '/shop' },
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
    get cart() {
      return `${this.root}cart/ldrgejbwlmtpeeiorxk7.jpg`;
    },
    get orders() {
      return `${this.root}orders/lazzn3sv6nsnmicl7bzl.jpg`;
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
      path: '/404',
      title: 'Page Not Found | Lilac',
    },
    index: {
      title:
        'Mid-Century Modern Furniture for Elegant & Contemporary Living Spaces - Lilac',
      path: '/',
    },
    sign_up: {
      path: '/welcome?state=sign-up',
      title:
        'Join Lilac - Create Your Account for Exclusive Mid-Century Furniture Access',
    },
    sign_in: {
      path: '/welcome?state=sign-in',
      title: 'Log In to Lilac - Access Your Mid-Century Modern Furniture World',
    },
    forgot_password: {
      path: '/welcome?state=forgot-password',
      title: 'Reset Your Lilac Account Password - Quick & Secure',
    },
    request_password: {
      path: '/welcome?state=forgot-password',
      title: 'Forgot Password - Recover Your Lilac Account Access',
    },
    explore: {
      path: '/explore/[page].tsx',
      title: 'Explore Categories at Lilac - Your Mid-Century Modern Haven',
      description:
        'Dive into the world of mid-century modern design with Lilac. Explore various furniture categories to find pieces that resonate with your style and enhance your home.',
    },
    shop: {
      path: '/shop',
      title: 'Shop at Lilac - Find Your Perfect Mid-Century Modern Piece',
      description:
        'Browse our extensive selection of mid-century modern furniture at Lilac. Discover unique, elegant pieces that elevate your living space with style and sophistication.',
    },
    category: {
      path: '/category/[slug].tsx',
      title: "Discover [name] - Lilac's Mid-Century Modern Collection",
      description:
        'Explore our [name] collection at Lilac. Each piece combines timeless design with modern comfort, perfect for adding a touch of mid-century elegance to your home.',
    },
    products: {
      path: '/products/[id].tsx',
      title: '[name] - A Mid-Century Modern Masterpiece at Lilac',
      description:
        '[name] embodies the essence of mid-century modern design. Experience unparalleled style and comfort with this exquisite piece from Lilac.',
    },
    welcome: {
      path: '/welcome',
      title: 'Welcome to Lilac - Mid-Century Modern Furniture',
    },
    cart: {
      path: '/cart',
      title: 'Cart - View Your Cart on Lilac',
      description:
        "You're one step away from making a mid-century modern statement in your home. Securely complete your purchase at Lilac and get ready to transform your space.",
    },
    checkout: {
      path: '/cart',
      title: 'Checkout - Finalize Your Purchase on Lilac',
      description:
        'Finalize your purchase by adding your address details, order delivery location and entering your payment details. ',
    },
    orders: {
      path: '/orders',
      title: 'My Orders - View your existing orders ',
      description:
        'Dive into the world of mid-century modern design with Lilac. Explore various furniture categories to find pieces that resonate with your style and enhance your home.',
    },
    default: {
      path: '/',
      title:
        'Mid-Century Modern Furniture for Elegant & Contemporary Living Spaces - Lilac',
      description:
        'Discover timeless elegance and modern comfort at Lilac, your destination for mid-century modern furniture. Explore a curated collection of beautifully crafted pieces that blend pastel sophistication with a touch of nostalgia. Redefine your living spaces with our exquisite designs. Welcome to Lilac, where classic meets contemporary.',
    },
  },
};

export const MessagesMap = {
  required: 'This field is required',
  invalid: 'This field is invalid',
  error: 'Something went wrong!',
  success: 'Success!',
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
