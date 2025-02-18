const headers = $request.headers;

const key = "X-RevenueCat-ETag";
const lkey = key.toLocaleLowerCase();

if (lkey in headers) headers[lkey] = "";
else headers[key] = "";

$done({ headers });
