import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({ inertia, request }: HttpContextContract) {
    //

    const page = request.input('page', 1)
    const limit = 10

    const users = await User.query()
      .select('id', 'first_name', 'last_name', 'email')
      .paginate(page, limit)

    // Changes the baseURL for the pagination links
    users.baseUrl('/users')

    return inertia.render('Users/UserIndex', { users })
  }

  public async create({ inertia }: HttpContextContract) {
    //
    return inertia.render('Users/UserCreate')
  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
