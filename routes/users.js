const { Router } = require("express");
const User = require("../module/User");
const router = Router();

router.get("/", async (req, res) => {
  const Users = await User.find({});
  res.send(Users);
});

router.post("/", async (req, res) => {
  const { name, age } = req.body;
  if (name && age) {
    await User.create({ name, age });
  }
  res.send("saqlandi!");
});

router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send("o'chirildi!");
});

router.put("/", async (req, res) => {
  const { name, age, id } = req.body;
  await User.findByIdAndUpdate(id, { name, age });
  res.send("o'zgartirildi");
});

module.exports = router;
