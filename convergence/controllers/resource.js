const { Resource } = require('../models/resource');

exports.getAllPublic = (req, res, next) => {
    Resource.find({ type: 'public' }).then(resources => {
        res.status(200).json({
            message: "resources fetched successfully",
            resource: {
                resources
            }
        });
    });
}

exports.getAllPrivate = (req, res, next) => {
    Resource.find({ type: 'private' }).then(resources => {
        res.status(200).json({
            message: "resources fetched successfully",
            resource: {
                resources
            }
        });
    });
};

exports.addResource = (req, res, next) => {
    const resource = new Resource({
        _id: req.params.resourceId,
        type: req.body.type,
    });

    console.log(resource)
    resource.save().then(resource => {
        res.status(201).json({
            message: "Resource added successfully",
            resource: {
                resource
            }
        });
    });
}

exports.updateResource = (req, res, next) => {
    const resource = new Resource({
        _id: req.params.resourceId,
        type: req.body.type
    });
    Resource.updateOne({ _id: req.params.resourceId }, resource).then(result => {
        res.status(200).json({
            message: "Update successful!",
            result: result
        });
    });
}


exports.deleteResource = (req, res, next) => {
    Resource.deleteOne({ _id: req.params.resourceId }).then(
        result => {
            console.log(result);
            if (result.n > 0) {
                res.status(200).json({ message: "Deletion successful!" });
            } else {
                res.status(401).json({ message: "Not authorized!" });
            }
        }
    );
}


exports.getAdminResource = (req, res, next) => {
    Resource.find({ $or: [{ "type": 'private' }, { "type": 'admin' }] }).then(resources => {
        res.status(200).json({
            message: "resources fetched successfully",
            resource: {
                resources
            }
        });
    });
}