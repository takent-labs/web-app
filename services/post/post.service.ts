import { Post } from "@/types";
import { cookies } from "next/headers";

/**
 * Obtiene todos los posts de los usuarioos
 * @returns Array de posts
 */
export const getAllPosts = async (): Promise<Post[]> => {

    const cookieStore = await cookies();
    const token = cookieStore.get("token");

    const response = await fetch(`${process.env.NEXTJS_API_URL}/posts`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${token?.value}`,
        },
    });

    if (!response.ok) {
        throw new Error("Error al obtener los posts");
    }

    const data = await response.json();

    return data;
}