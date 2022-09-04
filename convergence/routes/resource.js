const {Resource} = require('../models/resource');
const express = require('express');
const router = express.Router();
const checkAuth = require("../helpers/jwt");
const resourceController = require("../controllers/resource")

// GET API which will fetch all the public resources without any authentication
// resource/public/all
// Should list all public type resources.
router.get("/public/all", resourceController.getAllPublic);

 // resource/private/all
 // Should list all private type resources for authenticated users.
  router.get( "/private/all", checkAuth, resourceController.getAllPrivate);
  
  // resource/private/{resourceId}
  // Should add the specified resource for authenticated users.
  router.post("/private/:resourceId", checkAuth, resourceController.addResource);

 // resource/private/{resourceId}
 //  Should update the specified resource for authenticated users.
  router.put("/private/:resourceId", checkAuth, resourceController.updateResource);

  // resource/private/{resourceId}
  // Should delete the specified resource for authenticated users.
  router.delete("/private/:resourceId", checkAuth, resourceController.deleteResource);

  // resource/only-admin/all
 // Should list all private type and admin type resources for authenticated
 // admin users.
 router.get("/only-admin/all", checkAuth, resourceController.getAdminResource)

  
  module.exports = router;