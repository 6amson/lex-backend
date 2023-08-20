const User = require('../models/authModel')


module.exports.query_post = async (req, res) => {
    const { email, fullname } = req.body;

    try {
        const user = await User.create({ email, fullname });
        res.status(201).send(user);
    } catch (err) {
        res.status(400).send(err);
    }

}

module.exports.query_get = async (req, res) => {
    const { date } = req.body;

    if (!date) {
        return res.status(400).json({ error: 'Date is required in the request body.' });
    }

    try {
       

        var timeStamp = new Date(date * 1000).toISOString();

        const docs = await User.find({ createdAt: { $gt: new Date(timeStamp) } }).exec();

        res.json({ timeStamp, Docs: docs });

    } catch (err) {
        throw Error(`Error occured, ${err}`);
    }

}