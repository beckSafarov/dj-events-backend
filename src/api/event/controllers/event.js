'use strict';
/**
 * event controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::event.event', ({ strapi }) => ({
  async me(context) {
    const user = context.state.user
    if (!user) {
      return context.badRequest(null, [
        { messages: [{ id: "No authorization header was found" }] }
      ])
    }
    const data = await strapi.db.query("api::event.event").findMany({
      where: {user: {id: user.id}},
      populate: {user: true, image: true}
    })
    if (!data) return context.notFound()

    return await this.sanitizeOutput(data, context)
  },
  async create(ctx) {
    let entity;
    ctx.request.body.data.user = ctx.state.user;
    entity = await strapi.service("api::event.event").create(ctx.request.body);
    console.log(entity)
    return entity;
  },
}));
