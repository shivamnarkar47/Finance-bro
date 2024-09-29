import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/libs/prisma'

// POST /api/post
// Required fields in body: title, authorEmail
// Optional fields in body: content
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { title, content, author_name, author_role, image,upvote,downvote,published  } = req.body
  const result = await prisma.post.create({
    data: {
      title: title,
      description: content,
      author_name: author_name,
      author_role: author_role,
      image: image,
      upvotes:upvote,
      downvotes:downvote,
      published:published
    },
  })
    
  return res.status(201).json(result)

}
