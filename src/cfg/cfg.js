export const cfg = {
  API: {
    HOST:
      process.env.NODE_ENV === 'production'
        ? 'https://api-shop-arnoldas.vercel.app'
        : 'http://localhost:3000',
  },
};
