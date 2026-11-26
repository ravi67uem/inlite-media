import { seedDatabase } from './src/seed.js';

console.log('Running Inlite Media seeder...');
seedDatabase()
  .then(() => {
    console.log('SUCCESS: All 5 clients, 5 users, and 19 pipeline items seeded into MongoDB!');
    process.exit(0);
  })
  .catch((err) => {
    console.error('ERROR SEEDING:', err);
    process.exit(1);
  });
