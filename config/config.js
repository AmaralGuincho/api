export default {
  database: (process.env.NODE_ENV === 'test') ? 'agdemo' : 'amaralguincho',
  username: 'root',
  password: 'password',
  params: {
    dialect: 'mysql',
    host: '127.0.0.1',
    // MySQL Port
    port: '3306',
  },
  databaseUrl() {
    return process.env.DATABASE_URL || `mysql://${this.username}:${this.password}@${this.params.host}:${this.params.port}/${this.database}`;
  },
  // API PORT
  port: process.env.PORT || 3000,
};
