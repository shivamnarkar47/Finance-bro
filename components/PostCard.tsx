import { Card, CardHeader, CardBody, Image, CardFooter, Button, ScrollShadow } from "@nextui-org/react";
import { ArrowUp, Mail, MessageCircle } from "lucide-react";
interface PostCardProps {
  title: string,
  description: string,
  author_name: string,
  author_role: string,
  image: string,
  upvotes: number,
  contact: string,

}
const PostCard = ({ title, description, author_name, author_role, image, upvotes, contact }: PostCardProps) => {
  return (
    <Card className="py-2 my-4 w-full text-foreground bg-background/60 hover:bg-background/90 group border transition border-foreground/20"
      isBlurred isPressable  >
      <CardHeader className=" px-4 flex-col items-start">
        <h4 className="font-bold text-3xl tracking-tighter">{title}</h4>
        <p className="text-foreground-800">By {author_name}, {author_role}</p>

      </CardHeader>
      <CardBody className="w-full py-2 flex items-start overflow-auto h-full">
        <Image
          alt="Card background"
          className="object-cover w-full"
          src={image}
        // width={270}
        />
      </CardBody>
      <CardFooter className="flex gap-1">
        <Button variant="light" className="flex"><ArrowUp /> {upvotes}</Button>
        <Button className="flex" variant="light"><MessageCircle /> </Button>

      </CardFooter>
    </Card>
  )
}

export default PostCard
