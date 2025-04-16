import { seedUser } from "./seedUser";
import { seedProducts } from "./seedProducts";
import { AppDataSource } from "../data-source";

export const seedAll = async () => {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
    console.log("📦 Database connection established");
  }
  await seedUser();
  await seedProducts();

  console.log("🌱 Seeding complete");
  process.exit(0);
};

seedAll().catch((err) => {
  console.error("❌ Seeding failed:", err);
  process.exit(1);
});
