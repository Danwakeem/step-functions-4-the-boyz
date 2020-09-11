const handler = async (event, context, cb) => {
  console.log('Hello there');
  console.log(JSON.stringify(event));
  console.log(JSON.stringify(context));
  cb(null, event);
}

module.exports = { handler };
