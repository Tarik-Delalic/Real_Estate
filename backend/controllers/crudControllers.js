const getRequest = (req, res, next) => {
    res.status(200).json({ message: 'Successfully connected to backend!!!' })
};

module.exports = { getRequest };