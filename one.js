/**
      Problem 1: 
Count unique users by role

      Asset:
const users = [{
    id: 1,
    name: "Ayan",
    role: "admin"
}, {
    id: 2,
    name: "Noman",
    role: "editor"
}, {
    id: 3,
    name: "Farhan",
    role: "admin"
}, {
    id: 4,
    name: "Zara",
    role: "viewer"
}, {
    id: 5,
    name: "Lima",
    role: "editor"
}];

                Task:
Array loop না করে, শুধু Object ব্যবহার করে বের করো:

// Expected Output: 
{ admin: 2, editor: 2, viewer: 1 }

 */

/**

// ============ SINIOR DEVELOPER CODE =======================
const users = [
  { id: 1, name: "Ayan", role: "admin" },
  { id: 2, name: "Noman", role: "editor" },
  { id: 3, name: "Farhan", role: "admin" },
  { id: 4, name: "Zara", role: "viewer" },
  { id: 5, name: "Lima", role: "editor" },
];

const result = {};

for (let i = 0; i < users.length; i++) {
  const role = users[i].role;

  if (!result[role]) {
    result[role] = 0;
  }

  result[role]++;
}

console.clear();
console.log("result: ", result);

 */

// ============ MY CODE =======================
const users = [
  {
    id: 1,
    name: "Ayan",
    role: "admin",
  },
  {
    id: 2,
    name: "Noman",
    role: "editor",
  },
  {
    id: 3,
    name: "Farhan",
    role: "admin",
  },
  {
    id: 4,
    name: "Zara",
    role: "viewer",
  },
  {
    id: 5,
    name: "Lima",
    role: "editor",
  },
];

const result = {
  admin: 0,
  editor: 0,
  viewer: 0,
};

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
  if (users[i].role === "admin") {
    result.admin++;
    console.log("admin");
  }
  if (users[i].role === "editor") {
    result.editor++;
  }
  if (users[i].role === "viewer") {
    result.viewer++;
  }
}

console.log("result: ", result);

/**
//========= ⭐ Score (Out of 100) ===========

                    85 / 100

Why 85?

✔️ Logic ঠিক

✔️ Output ঠিক

✔️ কোড readable

✔️ Imperative way intentionally maintained

❌ Redundant checks আছে

❌ Hardcoding roles

❌ Slightly repetitive structure

❌ Roles dynamic হলে break করবে
 */
