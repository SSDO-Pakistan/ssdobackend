module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "containers-us-west-136.railway.app"),
      port: env.int("DATABASE_PORT", 5809),
      database: env("DATABASE_NAME", "railway"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "OW9Sw52MYJQl9z93el9V"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});