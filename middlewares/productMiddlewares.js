module.exports = (err, _req, res, _next) => {
    if (err.code) {
        const statusByErrorCode = {
            BAD_REQUEST: 400,
           NOT_FOUND: 404,
        };

        const status = statusByErrorCode[err.code] || 500;
        
        return res.status(status).json(err);
    }

    return res.status(500).json({ message: 'internal server error' });
};