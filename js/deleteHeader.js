// const headers = $request.headers;

// const key = "X-RevenueCat-ETag";
// const lkey = key.toLocaleLowerCase();

// if (lkey in headers) headers[lkey] = "";
// else headers[key] = "";

// $done({ headers });


const version = "V1.0.2";

function setHeaderValue(headers, key, value) {
    const lowerCaseKey = key.toLowerCase();
    if (lowerCaseKey in headers) {
        headers[lowerCaseKey] = value;
    } else {
        headers[key] = value;
    }
}

const modifiedHeaders = $request.headers;
setHeaderValue(modifiedHeaders, "X-RevenueCat-ETag", "");
$done({ headers: modifiedHeaders });

// const version = "V1.0.2";

// function setHeaderValue(e, a, d) {
//     var r = a.toLowerCase();
//     r in e ? (e[r] = d) : (e[a] = d);
// }
// var modifiedHeaders = $request.headers;

// setHeaderValue(modifiedHeaders, "X-RevenueCat-ETag", ""), $done({ headers: modifiedHeaders });
