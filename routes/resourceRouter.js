const router = require('express').Router();
const { getAllResources, getSingleResource, createResource, updateResource, deleteResource } = require('../controller/resourceContoller');


router.route('/').get(getAllResources).post(createResource);
router.route('/:resourceId').get(getSingleResource).patch(updateResource).delete(deleteResource);


module.exports = router;