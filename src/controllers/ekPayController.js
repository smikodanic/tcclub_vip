const ekPayHandler = (req, res) => {
    // Render the EJS file for the new page
    res.render('wallet/ekpay');
};

const usdtHandler = (req, res) => {
    // Render the EJS file for the new page
    res.render('wallet/usdt');
};

module.exports = {
    ekPayHandler,
    usdtHandler,
};
