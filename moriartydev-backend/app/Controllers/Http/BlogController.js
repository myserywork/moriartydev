'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Blog = use('App/Models/Blog');

/**
 * Resourceful controller for interacting with blogs
 */
class BlogController {
  /**
   * Show a list of all blogs.
   * GET blogs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    return await Blog.query().where('active', true).orderBy('id', 'desc').fetch();
  }

  /**
   * Create/save a new blog.
   * POST blogs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const post = request.only(['title', 'author', 'content']);

    return await Blog.create(post);
  }

  /**
   * Display a single blog.
   * GET blogs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return await Blog.findOrFail(params.id);
  }

  /**
   * Update blog details.
   * PUT or PATCH blogs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const editedPost = request.only(['title', 'author', 'content']);

    await Blog.findOrFail(params.id);

    await Blog.query().where({ id: params.id }).update({ editedPost });
  }

  /**
   * Delete a blog with id.
   * DELETE blogs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    await Blog.query().where({ id: params.id }).update({ active: false });
  }
}

module.exports = BlogController
