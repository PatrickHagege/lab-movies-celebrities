const router = require("express").Router();
const Celebrity = require("./../models/Celebrity.model");
const Movie = require("./../models/Movie.model");

// all your routes here

router.get("/celebrities/create", (req, res, next) => {
    res.render('celebrities/new-celebrity.hbs');
})

router.post('/celebrities/create', (req, res, next) => {
    Celebrity.create(req.body)
        .then((newCelebrity) => {
            // console.log("NewCelebrity: ", newCelebrity);
            res.redirect("/celebrities");
        })
        .catch((e) => {
            res.redirect('/celebrities/create')
            next(e)
        });
});

router.get("/celebrities", async (req, res, next) => {
    try {
        res.render("celebrities/celebrities.hbs", {// why not /celebrities/celebrities.hbs like in line 9 ???
            celebrities: await Celebrity.find()
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;