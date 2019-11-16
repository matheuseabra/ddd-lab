import redis from 'redis';
import { authConfig, isProduction } from '../../../../config';

const host = authConfig.redisHost;
const port = authConfig.redisPort;

const redisConnection: any = isProduction
  ? redis.createClient(authConfig.redisConnectionString)
  : redis.createClient(port, host);

redisConnection.on('connect', () =>
  console.log(`[Redis]: Connected to redis server at ${host}:${port}`)
);
