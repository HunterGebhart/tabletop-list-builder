"use client";                        // runs in the browser

import { useEffect } from "react";

export default function CreateUser({ user_id }) {
  useEffect(() => {
    // fire once when component mounts (or when user_id changes)
    fetch("/api/insert_user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id }),   // 3️⃣ correct payload
    })
      .then((res) => res.json())
      .then((data) => console.log("Inserted user:", data))
      .catch((err) => console.error("Insert error:", err));
  }, [user_id]);

  // no UI to show
  return null;
}
