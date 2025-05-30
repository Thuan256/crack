const mapping = {
    "%E8%BD%A6%E7%A5%A8%E7%A5%A8": ["vip+watch_vip"],
    Locket: ["Gold"],
};

const headers = $request.headers["User-Agent"] || $request.headers["user-agent"];
const obj = JSON.parse($response.body);

obj.Attention = "Cảm ơn bạn đã sử dụng dịch vụ của MOC Garden!";

const now = new Date();
const year = now.getFullYear();
const month = `${now.getMonth() + 1}`.padStart(2, "0");
const day = `${now.getDate()}`.padStart(2, "0");

const mocgarden = {
    is_sandbox: !1,
    ownership_type: "PURCHASED",
    billing_issues_detected_at: null,
    period_type: "normal",
    expires_date: `${year + 74}-${month}-${day}T01:04:17Z`,
    grace_period_expires_date: null,
    unsubscribe_detected_at: null,
    original_purchase_date: `${year}-${month}-${day}T01:04:18Z`,
    purchase_date: `${year}-${month}-${day}T01:04:17Z`,
    store: "app_store",
};
const mthunz = {
    grace_period_expires_date: null,
    purchase_date: `${year}-${month}-${day}T01:04:17Z`,
    product_identifier: "com.mocgarden.premium.yearly",
    expires_date: `${year + 74}-${month}-${day}T01:04:17Z`,
};

const match = Object.keys(mapping).find((e) => headers.includes(e));

if (match) {
    const [e, s] = mapping[match];

    if (s) {
        mthunz.product_identifier = s;
        obj.subscriber.subscriptions[s] = mocgarden;
    } else {
        obj.subscriber.subscriptions["com.mocgarden.premium.yearly"] = mocgarden;
        obj.subscriber.entitlements[e] = mthunz;
    }
} else {
    obj.subscriber.subscriptions["com.mocgarden.premium.yearly"] = mocgarden;
    obj.subscriber.entitlements.pro = mthunz;
}

$done({ body: JSON.stringify(obj) });
