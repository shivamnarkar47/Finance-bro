'use client'
import { ScrollShadow } from "@nextui-org/scroll-shadow"
import PostCard from "./PostCard"
import { useEffect, useState } from "react"
type PostCardProps = {
  title: string,
  description: string,
  author_name: string,
  author_role: string,
  image: string,
  upvotes: number,
  contact: string,

}

const Feed = () => {
  const [posts, setPosts] = useState<PostCardProps[]>();
  const [loading, setLoading] = useState(false)
  if (loading) return <p>Loading...</p>;

  useEffect(() => {
    const fetchPosts = async () => {

      try {
        const response = await fetch('/api/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="h-[93vh] w-full px-10">
      <ScrollShadow className="w-full h-full ">

        {posts?.map((d: PostCardProps) => (
          <PostCard author_role={d.author_role} title={d.title} contact={d.contact} description={d.description} author={d.author_name} image={d.image} upvotes={d.upvotes} />
        ))
        }
      </ScrollShadow>
    </div>
  )
}

export default Feed
