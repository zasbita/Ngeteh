module.exports = {
  username: process.env.HTTP_USERNAME,
  password: process.env.HTTP_PASSWORD,
  manifestFormat: "importmap",
  locations: {
    react: process.env.REACT_IMPORT_MAP_URL,
  },
  cacheControl: "no-store",
};