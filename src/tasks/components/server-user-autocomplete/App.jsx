import React from "react";

const USERS = [
  { id: 1, name: "Alice Johnson" },
  { id: 2, name: "Bob Smith" },
  { id: 3, name: "Charlie Brown" },
  { id: 4, name: "David Wilson" },
  { id: 5, name: "Emma Willy" },
];

const fetchUsers = (query) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const normalized = query.toLowerCase().trim();

      resolve(
        USERS.filter((user) =>
          user.name.toLowerCase().includes(normalized)
        )
      );
    }, 1000);
  });
};

const Autocomplete = () => {
  return (
    <div>
      <input />
      <ul></ul>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <h2>User search</h2>
      <Autocomplete />
    </div>
  );
}
