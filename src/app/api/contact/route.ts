import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const CONTACTS_FILE = path.join(process.cwd(), "src/lib/data/contacts.json");

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { name, email, message } = data;

        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        let contacts = [];
        if (fs.existsSync(CONTACTS_FILE)) {
            const fileContent = fs.readFileSync(CONTACTS_FILE, "utf-8");
            contacts = JSON.parse(fileContent);
        }

        const newContact = {
            id: Date.now(),
            name,
            email,
            message,
            createdAt: new Date().toISOString(),
        };

        contacts.push(newContact);
        fs.writeFileSync(CONTACTS_FILE, JSON.stringify(contacts, null, 2));

        return NextResponse.json({ message: "Success" });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
