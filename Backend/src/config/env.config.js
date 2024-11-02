const dotenv = require("dotenv");

dotenv.config();

try {
  const env = envalid.cleanEnv(process.env, {
    DB_USERNAME: envalid.str({ desc: 'Database username' }),
    DB_PASSWORD: envalid.str({ desc: 'Database password' }),
    DB_NAME: envalid.str({ desc: 'Database name' }),
    PORT: envalid.port({ default: 3000, desc: 'Port for the server to run on' }),
  }, {
    strict: true,
  });

  console.log('Environment variables loaded successfully:', env);

  module.exports = env;
} catch (error) {
  console.error('Error loading environment variables:', error.message);
  process.exit(1); // Exit the process with an error code
}
