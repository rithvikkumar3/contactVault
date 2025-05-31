import express from "express";
import {
  getContact,
  createContact,
  getContacts,
  updateContact,
  deleteContact,
} from "../controllers/contactController.js";
import validateToken from "../middleware/validateTokenHandler.js";

const router = express.Router();

// Apply token validation middleware to all routes
router.use(validateToken);

// Routes for /api/contacts
router.route("/")
  .get(getContacts)
  .post(createContact);

router.route("/:id")
  .get(getContact)
  .put(updateContact)
  .delete(deleteContact);

export default router;
