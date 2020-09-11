const handler = async (event, context, cb) => {
  console.log(JSON.stringify(event));
  cb(null, event);
}

module.exports = { handler };
