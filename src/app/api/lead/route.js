import { NextResponse } from "next/server";

export async function POST(request) {
	try {
		const body = await request.json();
		const { name, email, phone } = body;

		if (!name || !email || !phone) {
			return NextResponse.json(
				{ success: false, message: "name, email, and phone are required" },
				{ status: 400 }
			);
		}

		return NextResponse.json(
			{
				success: true,
				message: "Lead received successfully",
				data: { name, email, phone },
			},
			{ status: 200 }
		);
	} catch {
		return NextResponse.json(
			{ success: false, message: "Invalid JSON payload" },
			{ status: 400 }
		);
	}
}
