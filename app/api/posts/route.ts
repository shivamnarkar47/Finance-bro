
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

// Initialize Prisma Client
const prisma = new PrismaClient();

export async function POST(req) {
  try {
    // Get form data
    const formData = await req.formData();
    const title = formData.get('title');
    const description = formData.get('description');
    const author_name = formData.get('author_name');
    const author_role = formData.get('author_role');
    const published = formData.get('published') === 'true'; // convert string to boolean
    const contact = formData.get('contact');
    const imageFile = formData.get('image');

    // Handle file saving
    let imageUrl = null;
    if (imageFile) {
      const fileData = await imageFile.arrayBuffer();
      const buffer = Buffer.from(fileData);
      const uploadPath = path.join(process.cwd(), 'public/uploads', `${uuidv4()}_${imageFile.name}`);
      await fs.writeFile(uploadPath, buffer);
      imageUrl = `/uploads/${path.basename(uploadPath)}`;
    }

    // Create a new post in the database
    const newPost = await prisma.post.create({
      data: {
        title,
        description,
        author_name,
        author_role,
        published,
        contact,
        image: imageUrl,
      },
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}




// GET request to fetch all posts
export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return new Response(JSON.stringify(posts), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch posts' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
