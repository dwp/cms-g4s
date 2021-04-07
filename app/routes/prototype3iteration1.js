
const express = require('express');
const router = express.Router()


router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// Routes start

// your-options
router.post('/prototype3iteration1/your-options', function(req, res) {
  if (req.body['choice'] === 'make-own-arrangement') {
    res.redirect('your-options');
  } else if (req.body['choice'] === 'use-cms'){
    res.redirect('where-do-you-live');
  } else {
    res.redirect('get-more-information');
  }
});


// get-more-information
router.post('/prototype3iteration1/get-more-information', function(req, res) {
  if (req.body['more-info-choice'] === 'more-info-make-own-arrangement') {
    res.redirect('get-more-information');
  } else {
    res.redirect('where-do-you-live');
  }
});


// where-do-you-live
router.post('/prototype3iteration1/where-do-you-live', function(req, res) {
  if (req.body['where-do-you-live'] === 'lives-in-gb') {
    res.redirect('where-does-the-other-parent-live');
  } else if (req.body['where-do-you-live'] === 'lives-in-northern-ireland'){
    res.redirect('contact-child-maintenance-choices');
  } else {
    res.redirect('you-need-to-call');
  }
});


// where-does-the-other-parent-live

router.post('/prototype3iteration1/where-does-the-other-parent-live', function(req, res) {
  if (req.body['where-does-the-other-parent-live'] === 'op-lives-in-uk') {
    res.redirect('will-you-be-paying-or-receiving');
  } else {
    res.redirect('you-need-to-call');
  }
});


// will-you-be-paying-or-receiving

router.post('/prototype3iteration1/will-you-be-paying-or-receiving', function(req, res) {
  if (req.body['will-you-be-paying-or-receiving'] === 'paying') {
    res.redirect('you-need-to-call');
  } else {
    res.redirect('have-you-had-a-court-decision');
  }
});


// have-you-had-a-court-decision

router.post('/prototype3iteration1/have-you-had-a-court-decision', function(req, res) {
  if (req.body['have-you-had-a-court-decision'] === 'yes') {
    res.redirect('you-need-to-call');
  } else {
    res.redirect('how-do-you-want-to-apply');
  }
});


// how-do-you-want-to-apply

router.post('/prototype3iteration1/how-do-you-want-to-apply', function(req, res) {
  if (req.body['how-do-you-want-to-apply'] === 'online') {
    res.redirect('eligibility-for-online-application');
  } else {
    res.redirect('apply-by-phone');
  }
});


// Routes end

module.exports = router;
