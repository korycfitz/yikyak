import { Yak } from '../models/yak.js'

function newYak(req, res) {
  res.render("yaks/new", {
    title: "Post Yak",
  })
}

function create(req, res) {
  if (req.body.likes) {
    req.body.likes = req.body.likes.split(', ')
  }
  //link author to user profile
  req.body.author = req.user.profile._id
  Yak.create(req.body)
  .then(yak => {
    console.log(req.body)
    res.redirect('/yaks')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/yaks/new')
  })
}

function index(req, res) {
  Yak.find({})
  .then(yaks => {
    res.render('yaks/index', {
      yaks: yaks,
      title: 'All Yaks'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/yaks/new')
  })
}

function show(req, res) {
  Yak.findById(req.params.yakId)
  .then(yak => {
    res.render('yaks/show', { 
      title: 'Add Comment', 
      yak: yak
    })    
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function deleteYak(req, res) {
  Yak.findByIdAndDelete(req.params.yakId)
  .then(yak => {
    res.redirect("/yaks")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/yaks")
  })
}

function edit(req, res) {
  Yak.findById(req.params.yakId)
  .then(yak => {
    res.render("yaks/edit", {
      yak,
      title: "Edit Yak"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function update(req, res) {
  if (req.body.likes) {
    req.body.likes = req.body.likes.split(', ')
  }
  Yak.findByIdAndUpdate(req.params.yakId, req.body, {new: true})
  .then(yak => {
    res.redirect(`/yaks/${yak._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
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
  index,
  show,
  deleteYak as delete,
  edit,
  update,
}