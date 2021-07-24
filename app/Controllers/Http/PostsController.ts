import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostsController {
  public async index({ inertia, request }: HttpContextContract) {
    //
    const page = request.input('page')
    const limit = 5

    const posts = await Post.query().select('title', 'content', 'slug').paginate(page, limit)

    return inertia.render('Posts/PostIndex', { posts })
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
