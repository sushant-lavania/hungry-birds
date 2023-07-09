import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useSession, signIn, signOut } from "next-auth/react"
import Feed from '@/components/feed';
import Landing from '@/components/Landing';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession();
  if (!session?.user) {
    return (
      <div>
        <Landing/>
      </div>
    )
  }
  return (
      <div>
        <Feed/>
      </div>

  )
}


