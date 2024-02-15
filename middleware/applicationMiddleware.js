const commonMiddleware = (req, res, next) => {
    // Common functionality across routes
    console.log('Common middleware executed');
    next();
  };
  
  module.exports = {
    commonMiddleware,
  };
  