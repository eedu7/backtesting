import { NextResponse } from "next/server";

import { symbolsPairs } from "@/db/schema";

import { db } from "@/utils/drizzle";

export async function GET() {
    const result = await db.query.symbolsPairs.findMany();

    return NextResponse.json(result);
}

export async function POST(request: Request) {
    const body = await request.json();

    db.insert(symbolsPairs).values({
        name: body.name,
    });

    return NextResponse.json({
        message: "Symbol Pair Created",
    });
}
