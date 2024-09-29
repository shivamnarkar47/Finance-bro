import CommunityCard from "./CommunityCard";
import { Divider, ScrollShadow } from "@nextui-org/react";

const Communities = () => {
  const communities = [
    {
      name: "StockSavvy",
      description: "A community for stock market enthusiasts to share insights, discuss trends, and explore investment strategies.",
      followers: 500,
      following: 300
    },
    {
      name: "CryptoConnect",
      description: "Join us to learn about cryptocurrencies, blockchain technology, and decentralized finance (DeFi).",
      followers: 1000,
      following: 600
    },
    {
      name: "WealthBuilders",
      description: "Empowering individuals with knowledge about personal finance, savings tips, and wealth creation strategies.",
      followers: 800,
      following: 400
    },
    {
      name: "Trader's Den",
      description: "Dive into the world of trading with discussions on forex, commodities, and options trading strategies.",
      followers: 1200,
      following: 700
    },
    {
      name: "RealEstateInvest",
      description: "Explore opportunities in real estate investment, property management tips, and market insights.",
      followers: 600,
      following: 350
    }
  ]
  return (
    <div className="w-full h-full z-10">
      <div className="p-4">
        <h1 className="pt-4 text-2xl font-bold text-foreground ">Join new Communities</h1>
        <Divider className="my-4" />
        <ScrollShadow className="w-full h-[80vh] ">

          {communities.map((c, idx) => (
            <CommunityCard name={c.name} desc={c.description} followers={c.followers} following={c.following} />

          ))
          }
        </ScrollShadow>
      </div>
    </div>
  )
}

export default Communities
