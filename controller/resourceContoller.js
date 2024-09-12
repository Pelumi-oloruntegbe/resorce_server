const RESOURCE = require('../models/resource');


const getAllResources = async(req, res) => {
    try {
        const resources = await RESOURCE.find({}).sort("-createdAt");
        res.status(200).json({ success: true, numOfResources: resources.length, resources})
    } catch (error) {
        console.log(error);
        
    }
}


const getSingleResource = async (req, res) => {
    const { resourceId } = req.params;
    try {
        const resource = await RESOURCE.findById({_id: resourceId});
        res.status(200).json({ success: true, resource})
    } catch (error) {
        console.log(error);
        
    }
}


const createResource = async (req, res) => {
    const { name, email } = req.body
    if(!name || !email) {
        res.status(400).json({ message: "Please provide all fields"});
    }
       try {
        const resource = await RESOURCE.create(req.body)
        res.status(201).json({ success: true, resource})
       } catch (error) {
        console.log(error);
       } 
}


const updateResource = async (req, res) => {
    const { resourceId } = req.params;
    try {
        const resource = await RESOURCE.findByIdAndUpdate({_id: resourceId}, req.body, {runValidators: true, new: true});
        res.status(200).json({ success: true, resource });
    } catch (error) {
        console.log(error);
        
    }
}


const deleteResource = async (req, res) => {
    const { resourceId } = req.params
    await RESOURCE.findByIdAndDelete({_id: resourceId });
    res.status(200).json({ success: true, message: "Resource deleted!"});
}


module.exports = { getAllResources, getSingleResource, createResource, updateResource, deleteResource};