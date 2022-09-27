const jsonMiddleWare = async ({ next }) => {
  const response = await next();
  // set Content-Type JSON header
  response.headers.set("Content-Type", "application/json");
  return response;
};

export const onRequest = [jsonMiddleWare];
