import { v4 as uuidv4 } from 'uuid';

import { AppDataSource } from '../data-source';
import { User } from '../../entities/entities';

export const seedUser = async () => {
  const userRepo = AppDataSource.getRepository(User);

  const exists = await userRepo.findOneBy({ id: '123e4567-e89b-12d3-a456-426614174000' });
  if (!exists) {
    const user = userRepo.create({
      id: '123e4567-e89b-12d3-a456-426614174000',
      name: 'User',
      balance: 1000,
      email: 'user@example.com',
    });

    await userRepo.save(user);
    console.log('✅ Default user created');
  } else {
    console.log('ℹ️ Default user already exists');
  }
};
