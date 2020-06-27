export const decodeBase64 = (imageString) => {
  let matches = imageString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);

  let response = {};
  response.type = matches[1];
  response.data = new Buffer(matches[2], "base64");
  return response;
};
