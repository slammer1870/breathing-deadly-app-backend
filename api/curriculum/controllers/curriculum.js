"use strict";
const { sanitizeEntity } = require("strapi-utils");
const finder = require("strapi-utils/lib/finder");

module.exports = {

  /*async find(ctx) {
    const { user } = ctx.state; //Magic user

    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.order.search({
        ...ctx.query,
        user: user.id,
      });
    } else {
      entities = await strapi.services.order.find({
        ...ctx.query,
        user: user.id,
      });
    }

    return entities.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models.order })
    );
  },*/
  /**
   * Returns one order, as long as it belongs to the user
   * @param {any} ctx
   */

  /*async findOne(ctx) {
    const { id } = ctx.params;
    const { user } = ctx.state;

    const entity = await strapi.services.order.findOne({ id, user: user.id });
    return sanitizeEntity(entity, { model: strapi.models.order });
  },*/
  /**
   * Returns one order, as long as it belongs to the user
   * @param {any} ctx
   */

  async create(ctx) {
    const { timeslot, name } = ctx.request.body;

    const { user } = ctx.state;

    //Create the curriculum
    const newCurriculum = await strapi.services.curriculum.create({
      user: user.id,
      timeslot: timeslot.id,
      name: name
    });

    return { id: newCurriculum.id };
  }
};
