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
  }
}));
