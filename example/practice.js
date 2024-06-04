// メニューアイテムとその価格
const menuItems = {
  "burger": 500,
  "fries": 200,
  "salad": 300,
  "pizza": 800,
  "soda": 150
};

// 注文リスト
let orders = [];

// 注文を追加する関数
function addOrder(item, quantity) {
  if (item in menuItems) {
    orders.push({ item: item, quantity: quantity });
    console.log(`Added ${quantity} ${item}(s) to the order.`);
  } else {
    console.log(`Sorry, ${item} is not on the menu.`);
  }
}

// 合計金額を計算する関数
function calculateTotal() {
  let total = 0;
  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];
    total += menuItems[order.item] * order.quantity;
  }
  return total;
}

// 割引を適用する関数（1000円以上で10%オフ、3000円以上で20%オフ）
function applyDiscount(total) {
  if (total >= 3000) {
    return total * 0.8;  // 20% off
  } else if (total >= 1000) {
    return total * 0.9;  // 10% off
  }
  return total;
}

// 注文の要約を表示する関数
function displayOrderSummary() {
  console.log("Order Summary:");
  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];
    console.log(`- ${order.item} x ${order.quantity}`);
  }
  let total = calculateTotal();
  let discountedTotal = applyDiscount(total);
  console.log(`Total: ¥${total}`);
  console.log(`After discount: ¥${discountedTotal}`);
}

// テスト用のコード
addOrder("burger", 2);
addOrder("fries", 1);
addOrder("soda", 2);
addOrder("pizza", 1);
addOrder("cake", 1);  // メニューにない項目

displayOrderSummary();