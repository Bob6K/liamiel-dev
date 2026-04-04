"use server";

import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const SIGNUPS_FILE = path.join(DATA_DIR, "signups.json");

export async function submitEmail(formData: FormData) {
  const email = formData.get("email") as string;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  try {
    await fs.mkdir(DATA_DIR, { recursive: true });

    let signups: { email: string; timestamp: string }[] = [];
    try {
      const data = await fs.readFile(SIGNUPS_FILE, "utf-8");
      signups = JSON.parse(data);
    } catch {
      // File doesn't exist yet
    }

    if (signups.some((s) => s.email === email)) {
      return { error: "This email is already signed up." };
    }

    signups.push({ email, timestamp: new Date().toISOString() });
    await fs.writeFile(SIGNUPS_FILE, JSON.stringify(signups, null, 2));

    return { success: true };
  } catch {
    return { error: "Something went wrong. Please try again." };
  }
}
