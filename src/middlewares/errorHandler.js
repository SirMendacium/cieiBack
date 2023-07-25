function errorHandler(err, req, res, next) {
  if (err.name === "SequelizeValidationError") {
    const errors = Object.values(err.errors).map((error) => error.message);
    return res.status(400).json({ errors });
  }

  const status = err.status || 500;

  let message = "";

  if (status === 500) {
    console.error(err);
    message = "Internal server error";
  } else {
    message = err.message || "Algo salio mal";
  }

  res.status(status).json({
    message,
  });
}

module.exports = errorHandler;
