module.exports = function flashAndRedirect(type, message, path, {
  session,
  response
} = {}) {
  session.flash({
    notification: {
      type,
      message,
    }
  });

  return response.redirect(path);
}