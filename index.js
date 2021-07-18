import Database, { seeders } from "./setup";

/* eslint-disable no-console */

Database.connection
  .sync({
    force: process.env.NODE_ENV === "REST", // * ENABLED FORCE
    alter: false, // * DISABLED ALTER MODE
  })
  .then(async () => {
    await seeders(Database); // * SEEDING DATA

    console.log(
      "✔️ ",
      `Database ${
        process.env.NODE_ENV === "REST" ? "rested" : "initialized"
      } successfully`
    );
  })
  .catch((err) => {
    console.error(
      "❌ ",
      err.errors
        .reduce((accumulator, error) => {
          accumulator.push(error.message);
          return accumulator;
        }, [])
        .join(" and ")
    );
  });
