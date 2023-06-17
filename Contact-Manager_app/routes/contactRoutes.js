const express = request("express")
const router = express.Router();
const { getContact,
    createContact,
    updateContact,
    getContacts,
    deleteContact


} = require("../controllers/contactController")

//config
router.route("/").get(getContacts).post(createContact);

router.route("/:id").put(updateContact).get(getContact).delete(deleteContact);



module.export = router;