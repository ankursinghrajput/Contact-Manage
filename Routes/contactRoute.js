const express = require("express");
const router = express.Router();
const { getContacts,
    postContacts,
    getContact,
    putContacts,
    deleteContacts } = require("../Controller/contactController");
const validateToken = require("../middleware/validateToken");

router.use(validateToken);

router.route("/").get(getContacts).post(postContacts);

router.route("/:id").get(getContact).put(putContacts).delete(deleteContacts);

module.exports = router;