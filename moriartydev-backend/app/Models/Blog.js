'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Blog extends Model {
  static get table() {
    return 'blog';
  }
}

module.exports = Blog
