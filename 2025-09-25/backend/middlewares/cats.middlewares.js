const catsRouteMiddleware = (req, res, next) => {
  console.log("Cats route - Time:", new Date().toISOString());
  next();
};

const catsGetRouteMiddleware = (req, res, next) => {
  console.log("GET /cats middleware");
  next();
};

module.exports = { catsRouteMiddleware, catsGetRouteMiddleware };
