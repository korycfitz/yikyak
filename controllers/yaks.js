import { Yak } from '../models/yak.js'

function newYak(req, res) {
  res.render("yaks/new", {
    title: "Add Yak",
  })
}

function create(req, res) {
  if (req.body.likes) {
    req.body.likes = req.body.likes.split(', ')
  }
  Yak.create(req.body)
  .then(yak => {
    res.redirect('/yaks/new')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/yaks/new')
  })
}
// going to use this later on
// function createFact(req, res) {
//   // find the profile 
//   Profile.findById(req.user.profile._id)
//   .then(profile => {
//     // push the req.body form data into the facts array
//     profile.facts.push(req.body)
//     profile.save()
//     .then(() => {
//       res.redirect('/profiles')
//     })
//     .catch(err => {
//       console.log(err)
//       res.redirect('/profiles')
//     })
//   })
//   .catch(err => {
//     console.log(err)
//     res.redirect('/profiles')
//   })
// }
//going to use this after we create profile

export {
  newYak as new,
  create,
  createFact,
}