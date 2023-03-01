module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "containers-us-west-195.railway.app"),
      port: env.int("DATABASE_PORT", 6943),
      database: env("DATABASE_NAME", "railway"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "5Jr2NRZyayj427EjNH5s"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});