import { AppDataSource } from '../data-source';
import { Product } from '../../entities/entities';

const initialProducts = [
  { name: 'Keyboard', price: 100, stock: 20 },
  { name: 'Mouse', price: 50, stock: 40 },
  { name: 'Monitor', price: 300, stock: 10 },
];

export const seedProducts = async () => {
  const productRepo = AppDataSource.getRepository(Product);

  for (const data of initialProducts) {
    const exists = await productRepo.findOneBy({ name: data.name });

    if (!exists) {
      const product = productRepo.create(data);
      await productRepo.save(product);
      console.log(`✅ Product "${data.name}" created`);
    } else {
      console.log('ℹ️ Product already exists:', exists.name);
    }
  }
};
