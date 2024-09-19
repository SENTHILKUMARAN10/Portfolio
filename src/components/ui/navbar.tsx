import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FloatingDockDemo } from '@/provider/dock'


type Props = {}

const Navbar = async (props: Props) => {
  return (
    <header className="fixed right-0 left-0 bottom-0 py-1 px-1 bg-black/80 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-center">
    
    <FloatingDockDemo></FloatingDockDemo>
    </header>
  )
}

export default Navbar
