const handler = async (event, context, cb) => {
  console.log('WOW');
  cb(null, event);
}

module.exports = { handler };
