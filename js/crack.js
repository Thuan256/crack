function _0x3f12() {
    const _0x1b4d1b = [
        "70B24288-83C4-4035-B001-573285B21AE2",
        "get",
        "subscriptions",
        "849108LHHoyn",
        "2024-01-01T01:01:01Z",
        "entitlements",
        "9692-01-01T01:01:01Z",
        "9692",
        "stringify",
        "subscriber",
        "6888322aKhQnY",
        "590IPLWil",
        "log",
        "523575QzObdK",
        "parse",
        "891984cvQdcK",
        "116FWbNdc",
        "3493930XYbicF",
        "https://api.revenuecat.com/v1/product_entitlement_mapping",
        "54069XsSVzg",
        "headers",
        "6WdyCOt",
        "product_identifier",
        "2149312nSWieu",
    ];
    _0x3f12 = function () {
        return _0x1b4d1b;
    };
    return _0x3f12();
}
const _0xf59718 = _0x5464;
(function (_0xb521a0, _0x35b4b9) {
    const _0x5f363b = _0x5464,
        _0x3e2431 = _0xb521a0();
    while (!![]) {
        try {
            const _0x3a8f22 =
                -parseInt(_0x5f363b(0xd8)) / 0x1 +
                -parseInt(_0x5f363b(0xd4)) / 0x2 +
                (-parseInt(_0x5f363b(0xd0)) / 0x3) * (parseInt(_0x5f363b(0xe5)) / 0x4) +
                (-parseInt(_0x5f363b(0xe6)) / 0x5) * (-parseInt(_0x5f363b(0xd2)) / 0x6) +
                -parseInt(_0x5f363b(0xdf)) / 0x7 +
                -parseInt(_0x5f363b(0xe4)) / 0x8 +
                (-parseInt(_0x5f363b(0xe2)) / 0x9) * (-parseInt(_0x5f363b(0xe0)) / 0xa);
            if (_0x3a8f22 === _0x35b4b9) break;
            else _0x3e2431["push"](_0x3e2431["shift"]());
        } catch (_0x2c6cc5) {
            _0x3e2431["push"](_0x3e2431["shift"]());
        }
    }
})(_0x3f12, 0x8fd50);
function _0x5464(_0x3f884b, _0x566155) {
    const _0x3f1273 = _0x3f12();
    return (
        (_0x5464 = function (_0x546443, _0x2a2739) {
            _0x546443 = _0x546443 - 0xd0;
            let _0x343c81 = _0x3f1273[_0x546443];
            return _0x343c81;
        }),
        _0x5464(_0x3f884b, _0x566155)
    );
}
var request = $request;
const options = { url: _0xf59718(0xe7), headers: request[_0xf59718(0xd1)] };
$httpClient[_0xf59718(0xd6)](options, function (_0x233f0a, _0x56be6d, _0x33c099) {
    const _0x5214dc = _0xf59718,
        _0x3a1163 = JSON[_0x5214dc(0xe3)](_0x33c099);
    console[_0x5214dc(0xe1)](_0x33c099);
    let _0x1491e = {
        request_date_ms: 0x18cc289d0c8,
        request_date: _0x5214dc(0xd9),
        subscriber: {
            entitlement: {},
            first_seen: _0x5214dc(0xd9),
            original_application_version: _0x5214dc(0xdc),
            last_seen: _0x5214dc(0xd9),
            other_purchases: {},
            management_url: null,
            subscriptions: {},
            entitlements: {},
            original_purchase_date: _0x5214dc(0xd9),
            original_app_user_id: _0x5214dc(0xd5),
            non_subscriptions: {},
        },
    };
    const _0x5c8861 = _0x3a1163["product_entitlement_mapping"];
    for (const [_0x3eb345, _0x351bd8] of Object["entries"](_0x5c8861)) {
        const _0x1383ce = _0x351bd8[_0x5214dc(0xd3)],
            _0x3f0f98 = _0x351bd8[_0x5214dc(0xda)];
        for (const _0x5bb4c9 of _0x3f0f98) {
            (_0x1491e[_0x5214dc(0xde)][_0x5214dc(0xda)][_0x5bb4c9] = {
                purchase_date: _0x5214dc(0xd9),
                original_purchase_date: "2024-01-01T01:01:01Z",
                expires_date: _0x5214dc(0xdb),
                product_identifier: _0x1383ce,
            }),
                (_0x1491e[_0x5214dc(0xde)][_0x5214dc(0xd7)][_0x1383ce] = {
                    expires_date: "9692-01-01T01:01:01Z",
                    original_purchase_date: _0x5214dc(0xd9),
                    purchase_date: _0x5214dc(0xd9),
                });
        }
    }
    (body = JSON[_0x5214dc(0xdd)](_0x1491e)), console[_0x5214dc(0xe1)](_0x1491e), $done({ body: body });
});

// const request = $request;
// const url = "https://api.revenuecat.com/v1/product_entitlement_mapping";
// const options = { url: url, headers: request.headers };

// $httpClient.get(options, function (error, response, body) {
//     if (error) {
//         console.log("Request failed:", error);
//         return $done({ body: JSON.stringify({ error: "Request failed" }) });
//     }

//     const responseData = JSON.parse(body);
//     console.log("Response Data:", responseData);

//     let formattedResponse = {
//         request_date_ms: Date.now(),
//         request_date: new Date().toISOString(),
//         subscriber: {
//             entitlement: {},
//             first_seen: "2024-01-01T01:01:01Z",
//             original_application_version: "9692",
//             last_seen: "2024-01-01T01:01:01Z",
//             other_purchases: {},
//             management_url: null,
//             subscriptions: {},
//             entitlements: {},
//             original_purchase_date: "2024-01-01T01:01:01Z",
//             original_app_user_id: "70B24288-83C4-4035-B001-573285B21AE2",
//             non_subscriptions: {},
//         },
//     };

//     const entitlementMapping = responseData["product_entitlement_mapping"];

//     for (const [productID, productData] of Object.entries(entitlementMapping)) {
//         const productIdentifier = productData["product_identifier"];
//         const entitlements = productData["entitlements"];

//         for (const entitlement of entitlements) {
//             formattedResponse.subscriber.entitlements[entitlement] = {
//                 purchase_date: "2024-01-01T01:01:01Z",
//                 original_purchase_date: "2024-01-01T01:01:01Z",
//                 expires_date: "9692-01-01T01:01:01Z",
//                 product_identifier: productIdentifier,
//             };

//             formattedResponse.subscriber.subscriptions[productIdentifier] = {
//                 expires_date: "9692-01-01T01:01:01Z",
//                 original_purchase_date: "2024-01-01T01:01:01Z",
//                 purchase_date: "2024-01-01T01:01:01Z",
//             };
//         }
//     }

//     const responseBody = JSON.stringify(formattedResponse);
//     console.log("Formatted Response:", formattedResponse);
//     $done({ body: responseBody });
// });
