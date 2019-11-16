import authConfig from './auth';

const isProduction = process.env.NODE_ENV === 'production';

export { isProduction, authConfig };
