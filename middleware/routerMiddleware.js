const routerMiddleware = (req, res, next) => {
    // Router-specific functionality
    console.log('Router middleware executed');
    next();
  };
  
  module.exports = {
    routerMiddleware,
  };
  