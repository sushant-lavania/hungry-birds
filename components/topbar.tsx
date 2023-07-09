import React from 'react'
import Image from 'next/image'
import { useSession , signOut} from 'next-auth/react';

export default function TopBar() {
    const { data: session } = useSession();
  return (


        
    <div className="navbar bg-[#5F503C] mb-5
        ">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Hungry Birds</a>
  </div>
  <div className="flex items-center justify-center">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
       
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <div className="h-10 w-10">
            <Image
                    src={session?.user?.image as string}
                    alt='User profile picture'
                    width={300}
                    height={300}
                />
        </div>
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><button className='text-neutral' onClick={()=>signOut()}>Logout</button></li>
      </ul>
    </div>
  </div>
</div>
  )
}
