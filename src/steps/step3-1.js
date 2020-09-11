const handler = async (event, context, cb) => {
  console.log('NEWWWW');
  cb(null, event);
}

module.exports = { handler };
