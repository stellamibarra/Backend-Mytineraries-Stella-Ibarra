import user from '../models/user.js';

console.log(user)

export const getUsers = async (req, res) => {
    //obtener todos los usuarios
  try {
    const user = await user.find(req.params);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
export const getUser = async (req, res) => {
    //obtener un usuario por id
  try {
    const user = await user.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
export const createUser = async (req, res) => {
    //crear un usuario
  const user = req.body;
  const newUser = new user(user);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}
export const updateUser = async (req, res) => {
    //actualizar un usuario
  const user = req.body;
  const updatedUser = new user(user);
  try {
    await user.findByIdAndUpdate(req.params.id, updatedUser);
    res.status(201).json(updatedUser);
  } catch (error) {
    res.status(409).json({ message: error.message });

  }
}
export const deleteUser = async (req, res) => {
    //borrar un usuario
  try {
    await user.findByIdAndDelete(req.params.id);
    res.status(201).json('User deleted');
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}
export const createUsers = async (req, res) => {
    //crear todos los usuarios
  const users = req.body;
  try {
    await user.insertMany(users);
    res.status(201).json('Users created');
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}
