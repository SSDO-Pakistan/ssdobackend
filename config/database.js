module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "containers-us-west-136.railway.app"),
      port: env.int("DATABASE_PORT", 5809),
      database: env("DATABASE_NAME", "railway"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "4bc436FaC4gFFa4c2CGGca5C64DGB3cc"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});

////////////////
