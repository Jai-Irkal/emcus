import { sql } from "@/src/lib/neon";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ blogId: string }> }
) {
    const { blogId } = await params;

    const comments = await sql`
        SELECT *
        FROM comments
        WHERE blog_id = ${Number(blogId)}
        ORDER BY created_at DESC
    `;

    return Response.json(comments);
}

export async function POST(
    request: Request,
    { params }: { params: Promise<{ blogId: string }> }
) {
    try {
        const { blogId } = await params;

        const body = await request.json();

        const { name, email, comment } = body;

        if (!name || !email || !comment) {
            return Response.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        const [newComment] = await sql`
    INSERT INTO comments (
        blog_id,
        name,
        email,
        comment,
        created_at
    )
    VALUES (
        ${Number(blogId)},
        ${name},
        ${email},
        ${comment},
        NOW()
    )
    RETURNING *
`;

        return Response.json(newComment);
    } catch (error: any) {
        return Response.json(
            {
                error: error.message,
            },
            {
                status: 500,
            }
        );
    }
}