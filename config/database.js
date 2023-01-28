module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "containers-us-west-195.railway.app"),
      port: env.int("DATABASE_PORT", 6943),
      database: env("DATABASE_NAME", "railway"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "H5ufd625PTRbG15w4Rcj"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
