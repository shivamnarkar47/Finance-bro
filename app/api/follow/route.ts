
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
const prisma = new PrismaClient();

export async function POST(req: NextApiRequest, res: NextApiResponse) {

  const { followerId, followingId, isFollowed } = req.body;
  try {
    try {
      if (isFollowed) {
        // Unfollow the user
        await prisma.follow.deleteMany({
          where: {
            followerId,
            followingId,
          },
        });
        return res.status(200).json({ message: 'Unfollowed successfully' });
      } else {
        // Follow the user
        await prisma.follow.create({
          data: {
            followerId,
            followingId,
          },
        });
        return res.status(200).json({ message: 'Followed successfully' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'An error occurred while processing the request.' });
    }
  } catch (e) {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
