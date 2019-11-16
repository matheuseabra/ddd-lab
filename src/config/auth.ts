const port: number = Number(process.env.REDIS_PORT);
const redisConnection: string = String(process.env.REDIS_URL);

const authConfig = {
  secret: process.env.APP_SECRET,
  tokenExpiryTime: 300,
  redisHost: process.env.REDIS_HOST,
  redisPort: port || 6379,
  redisConnectionString: redisConnection
};

export default authConfig;
