import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {

        const body = await request.json()

        const res = await fetch(`${process.env.NESTJS_API_URL}/auth/sign-up`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        const data = await res.json();

        if (!res.ok) {
            return NextResponse.json(data, { status: res.status });
        }

        const token = data.access_token;

        const cookieStore = await cookies();

        cookieStore.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            //TODO cambiar en producción
            maxAge: 60,
            path: "/",
        })

        return NextResponse.json({
            message: "Usuario registrado exitosamente",
            user: data.user
        }, { status: 201 });

    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
    }
}