// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ProfileProps } from '@/components/ui/profile/profile'
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProfileProps[]>
) {
  res.status(200).json([
    {
      id: "1",
      fullName: "Jane Doe",
      location: "3 miles away",
      description: "I'm a part-time dog walker in the North York area. Let me know if you need someone to walk your dog!",
    },
    {
      id: "2",
      fullName: "John Snow",
      location: "5 miles away",
      description: "Snow is coming. I can walk your dog before it arrives.",
      available: true,
    },
    {
      id: "3",
      fullName: "Dany Targaryen",
      location: "10 miles away",
      description: "Hi there! I'm Dany and I'm friendly with dogs!",
    },
    {
      id: "4",
      fullName: "Tyrion Lannister",
      location: "15 miles away",
      description: "Tell me if you need someone to walk your dog. I'm available!",
    },
    {
      id: "5",
      fullName: "Arya Stark",
      location: "20 miles away",
      description: "What is dead may never die. But I can walk your dog!",
      available: true,
    }
  ])
}
