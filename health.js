module.exports = (req, res) => {
  res.status(200).json({
    status: 'OK',
    service: 'Hôm nay ăn gì? - BE API',
    timestamp: new Date().toISOString()
  });
};
