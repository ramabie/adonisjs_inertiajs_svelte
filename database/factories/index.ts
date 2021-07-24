import Factory from '@ioc:Adonis/Lucid/Factory'
import Post from 'App/Models/Post'
import User from 'App/Models/User'

export const UserFactory = Factory.define(User, ({ faker }) => {
  return {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
  }
}).build()

export const PostFactory = Factory.define(Post, ({ faker }) => {
  return {
    title: faker.name.title(),
    content: faker.lorem.paragraphs(),
    slug: faker.lorem.slug(),
  }
}).build()
