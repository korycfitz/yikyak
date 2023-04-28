import { Yak } from '../models/yak.js'

function newYak(req, res) {
  res.render("yaks/new", {
    title: "Post Yak",
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  //once I have the likes model, I will need to split the entries, but for now, I will delete it after becuase it will be empty
  if (req.body.likes) {
    req.body.likes = req.body.likes.split(', ')
  }
  if (req.body.comments) {
    req.body.comments = req.body.comments.split(', ')
  }
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Yak.create(req.body)
  .then(yak => {
    res.redirect('/yaks')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/yaks/new')
  })
}

function index(req, res) {
  Yak.find({})
  .populate('owner')
  .then(yaks => {
    res.render('yaks/index', {
      yaks: yaks,
      title: 'All Yaks'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/yaks')
  })
}

function show(req, res) {
  Yak.findById(req.params.yakId)
  .then(yak => {
    res.render('yaks/show', { 
      title: 'All Yaks', 
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
      title: "Post Yak"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function update(req, res) {
  //Yaks will be able to have likes, in the future, but will delete key because it is empty
  if (req.body.likes) {
    req.body.likes = req.body.likes.split(', ')
  }
  if (req.body.comments) {
    req.body.likes = req.body.comments.split(', ')
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

function createComment(req, res) {
  if (req.body.likes) {
    req.body.likes = req.body.likes.split(', ')
  }
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Yak.findById(req.params.yakId)
  .then(yak => {
    yak.comments.push(req.body)
    yak.save()
    .then(() => {
      res.redirect(`/yaks/${yak._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  newYak as new,
  create,
  index,
  show,
  deleteYak as delete,
  edit,
  update,
  createComment,
}