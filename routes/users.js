const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.send("User New Form");
});

router.post("/", (req, res) => {
  res.send("Create User");
});

//common method(reduces code)
router
  .route("/:id")
    .get((req, res) => {
      console.log(req.user)
    res.send(`Get user with id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Put user with id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user with id ${req.params.id}`);
  });

//normal method
// router.get("/:id", (req, res) => {
//    res.send(`Get user with id ${req.params.id}`)
// })

// router.put("/:id", (req, res) => {
//     res.send(`Put user with id ${req.params.id}`)
// })

// router.delete("/:id", (req, res) => {
//     res.send(`Delete user with id ${req.params.id}`)
//  })

const users = [{ name: "arman" }, { name: "Abhishek" }];

router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

module.exports = router;
