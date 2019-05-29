export default {
  BASE_URL: process.env.BASE_URL,
  isServer: typeof window === 'undefined',
  environment: process.env.NODE_ENV || 'development',
};
