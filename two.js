/**
        Problem 2: 
Group products by category

        Asset:
const products = [
  { id: 1, title: "T-Shirt", category: "fashion" },
  { id: 2, title: "Jeans", category: "fashion" },
  { id: 3, title: "Keyboard", category: "electronics" },
  { id: 4, title: "Mouse", category: "electronics" },
  { id: 5, title: "Book", category: "education" }
];

                    Task:
Object ব্যবহার করে category অনুযায়ী গ্রুপ বানাও:

// Expected:
{
  fashion: ["T-Shirt", "Jeans"],
  electronics: ["Keyboard", "Mouse"],
  education: ["Book"]
}
 */

/**
// ============ SINIOR DEVELOPER CODE =======================
const products = [
  { id: 1, title: "T-Shirt", category: "fashion" },
  { id: 2, title: "Jeans", category: "fashion" },
  { id: 3, title: "Keyboard", category: "electronics" },
  { id: 4, title: "Mouse", category: "electronics" },
  { id: 5, title: "Book", category: "education" },
];

const result = {};

for (let i = 0; i < products.length; i++) {
  const category = products[i].category;

  // If the category doesn't exist, create it and initialize as an empty array.
  result[category] = result[category] || [];

  result[category].push(products[i].title);
}

console.log("result: ", result);

 */

// ============ MY CODE =======================
const products = [
  { id: 1, title: "T-Shirt", category: "fashion" },
  { id: 2, title: "Jeans", category: "fashion" },
  { id: 3, title: "Keyboard", category: "electronics" },
  { id: 4, title: "Mouse", category: "electronics" },
  { id: 5, title: "Book", category: "education" },
];

const result = {};

for (let i = 0; i < products.length; i++) {
  const category = products[i].category;
  console.log("category: ", category);

  if (!result[category]) {
    result[category] = [];
  }
  result[category].push(products[i].title);
}

console.log("result: ", result);

/**


//========= ⭐ Score (Out of 100) ===========
    
                    90/100

Why 90?

✔️ কোড ঠিকভাবে কাজ করছে।

✔️ Imperative method সুন্দরভাবে ব্যাবহার করা হয়েছে।

✔️ Code clean, no redundant logic, neat.

❌ তেমন কোনো significant problem নাই।

❌ শুধু একটুখানি optimization করা যায় — আর কিছু ছোট বিষয় থাকতে পারে।

 */
