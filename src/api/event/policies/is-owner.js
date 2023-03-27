module.exports = async (policyContext, config, {
  strapi
}) => {
  const ctx = policyContext
  if (!ctx.state.isAuthenticated) return false
  if (!ctx.params.id) return true
  const service = strapi.service(`api::event.event`)
  const {
    results: [content]
  } = await service.find({
    filters: {
      id: {
        $eq: ctx.params.id
      },
      user: {
        id: {
          $eq: ctx.state.user.id
        }
      }
    },
    publicationState: 'preview'
  })

  return !!content
};