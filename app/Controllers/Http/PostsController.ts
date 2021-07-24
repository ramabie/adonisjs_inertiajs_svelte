import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostsController {
  public async index({ inertia, request }: HttpContextContract) {
    // public async index({ view, request }: HttpContextContract) {
    //
    const page = request.input('page')
    const limit = 3

    const posts = await Post.query().select('title', 'content', 'slug').paginate(page, limit)

    return inertia.render('Posts/PostIndex', { posts })
    // return view.render('posts/post_index', { posts })
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
