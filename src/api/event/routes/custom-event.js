"use strict";

/**
 * custom router.
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/events/me",
      handler: "event.me",
      config: {},
    },
    {
      method: "POST",
      path: "/events",
      handler: "event.create",
      config: {},
    },
  ],
};
