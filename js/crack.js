const request = $request;
const url = "https://api.revenuecat.com/v1/product_entitlement_mapping";
const options = { url: url, headers: request.headers };

$httpClient.get(options, function (error, response, body) {
    if (error) {
        console.log("Request failed:", error);
        return $done({ body: JSON.stringify({ error: "Request failed" }) });
    }

    const responseData = JSON.parse(body);
    console.log("Response Data:", responseData);

    let formattedResponse = {
        request_date_ms: Date.now(),
        request_date: new Date().toISOString(),
        subscriber: {
            entitlement: {},
            first_seen: "2024-01-01T01:01:01Z",
            original_application_version: "9692",
            last_seen: "2024-01-01T01:01:01Z",
            other_purchases: {},
            management_url: null,
            subscriptions: {},
            entitlements: {},
            original_purchase_date: "2024-01-01T01:01:01Z",
            original_app_user_id: "70B24288-83C4-4035-B001-573285B21AE2",
            non_subscriptions: {},
        },
    };

    const entitlementMapping = responseData["product_entitlement_mapping"];

    for (const [productID, productData] of Object.entries(entitlementMapping)) {
        const productIdentifier = productData["product_identifier"];
        const entitlements = productData["entitlements"];

        for (const entitlement of entitlements) {
            formattedResponse.subscriber.entitlements[entitlement] = {
                purchase_date: "2024-01-01T01:01:01Z",
                original_purchase_date: "2024-01-01T01:01:01Z",
                expires_date: "9692-01-01T01:01:01Z",
                product_identifier: productIdentifier,
            };

            formattedResponse.subscriber.subscriptions[productIdentifier] = {
                expires_date: "9692-01-01T01:01:01Z",
                original_purchase_date: "2024-01-01T01:01:01Z",
                purchase_date: "2024-01-01T01:01:01Z",
            };
        }
    }

    const responseBody = JSON.stringify(formattedResponse);
    console.log("Formatted Response:", formattedResponse);
    $done({ body: responseBody });
});
