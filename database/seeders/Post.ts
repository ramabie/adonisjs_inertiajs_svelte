import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { PostFactory } from 'Database/factories'

export default class PostSeeder extends BaseSeeder {
  public async run() {
    await PostFactory.createMany(10000000)
  }
}
