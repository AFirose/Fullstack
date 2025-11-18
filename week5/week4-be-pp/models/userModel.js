// models/userModel.js

let users = [
  {
    id: 1,
    name: "Matti Seppänen",
    email: "matti@example.com",
    password: "M@45mtg$",
    phone_number: "+358401234567",
    gender: "Male",
    date_of_birth: "2000-01-15",
    membership_status: "Active"
  },
  {
    id: 2,
    name: "Anna Korhonen",
    email: "anna@example.com",
    password: "An#98xyz!",
    phone_number: "+358401234568",
    gender: "Female",
    date_of_birth: "1998-05-22",
    membership_status: "Active"
  }
];

// CRUD functions
function getAllUsers() { return users; }
function getUserById(id) { return users.find(u => u.id == id); }
function createUser(newUser) {
  const maxId = Math.max(...users.map(u => u.id), 0);
  newUser.id = maxId + 1;
  users.push(newUser);
  return newUser;
}
function updateUser(id, updatedData) {
  const idx = users.findIndex(u => u.id == id);
  if (idx === -1) return null;
  users[idx] = { ...users[idx], ...updatedData };
  return users[idx];
}
function deleteUser(id) {
  users = users.filter(u => u.id != id);
}

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
