// Locket Gold - Static response giả lập
// Made By Cam

const staticResponse = {
    subscriber: {
        entitlements: {
            Gold: {
                grace_period_expires_date: null,
                purchase_date: "2024-08-16T01:04:17Z",
                product_identifier: "com.mocgarden.premium.yearly",
                expires_date: "2098-08-16T01:04:17Z",
            },
        },
        subscriptions: {
            "com.mocgarden.premium.yearly": {
                is_sandbox: false,
                ownership_type: "PURCHASED",
                billing_issues_detected_at: null,
                period_type: "normal",
                expires_date: "2098-08-16T01:04:17Z",
                grace_period_expires_date: null,
                unsubscribe_detected_at: null,
                original_purchase_date: "2024-08-16T01:04:18Z",
                purchase_date: "2024-08-16T01:04:17Z",
                store: "app_store",
            },
        },
    },
};

$done({ body: JSON.stringify(staticResponse) });
