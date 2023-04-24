function newYak(req, res) {
  res.render("yaks/new", {
    title: "Post Yak",
  })
}

export {
  newYak as new
}