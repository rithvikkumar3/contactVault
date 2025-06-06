import asyncHandler from "express-async-handler";
import Contact from "../models/contactModel.js";

// @desc    Get all contacts
// @route   GET /api/contacts
// @access  Private
export const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});

// @desc    Create new contact
// @route   POST /api/contacts
// @access  Private
export const createContact = asyncHandler(async (req, res) => {
  console.log("The req body is:", req.body);
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user.id,
  });

  res.status(201).json(contact);
});

// @desc    Get a single contact
// @route   GET /api/contacts/:id
// @access  Private
export const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  res.status(200).json(contact);
});

// @desc    Update a contact
// @route   PUT /api/contacts/:id
// @access  Private
export const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("You don't have permission to update this contact");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedContact);
});

// @desc    Delete a contact
// @route   DELETE /api/contacts/:id
// @access  Private
export const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("You don't have permission to delete this contact");
  }

  await contact.deleteOne();

  res.status(200).json({
    message: "Contact deleted successfully",
    contact,
  });
});
