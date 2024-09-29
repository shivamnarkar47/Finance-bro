"use client"
import { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";

type CommunityCardProps = {
  name : string,
  desc : string,
  following : number,
  followers : number,
  image?: string,
}

const CommunityCard = ({name,desc,following,followers,image}:CommunityCardProps) => {
  const [isJoined, setIsJoin] = useState(false);
  return (
    <Card className="max-w-full text-foreground bg-background p-3 my-3">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src={image != undefined ? image : "https://nextui.org/avatars/avatar-1.png"}/>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{name}</h4>
          </div>
        </div>
        <Button
          className={isJoined ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={isJoined ? "bordered" : "solid"}
          onPress={() => setIsJoin(!isJoined)}
        >
          {isJoined ? "Exit" : "Join"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          {desc}
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">{following}</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">{followers}</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>

  )
}

export default CommunityCard
