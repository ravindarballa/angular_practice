const express = require("express");
const app = express();
const cors = require("cors");

const port = 3000;
const url = "https://jsonplaceholder.typicode.com/users";
app.use(cors());
app.use(express.json());
let localUsers = [];
async function fetchUsers() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    localUsers = [...data];
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
}
fetchUsers();
app.get("/api/users", async (req, res) => {
  return res.json(localUsers);
});
app.post("/api/users", (req, res) => {
  const maxId = localUsers.reduce(
    (max, user) => (user.id > max ? user.id : max),
    0,
  );

  const newUser = { id: maxId + 1, ...req.body };
  localUsers.push(newUser);
  res.status(201).json(newUser);
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
