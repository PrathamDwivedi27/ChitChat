import DashNav from '@/components/dashboard/DashNav'
import React from 'react'
import { authOptions, CustomSession } from '../api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import CreateChat from '@/components/groupChat/CreateChat'
import { fetchChatGroups } from '@/fetch/groupFetch'

const dashboard = async () => {
    const session:CustomSession |null=await getServerSession(authOptions);
    const groups:Array<GroupChatType> | []=await fetchChatGroups(session?.user?.token!);

  return (
    
    <div>
      {/* <p>{JSON.stringify(session)}</p> */}
      <DashNav name={session?.user?.name ?? ''} image={session?.user?.image ?? ''}/>
      <div className="container">
        <div className="flex justify-end mt-10">
          <CreateChat user={session?.user!} />
        </div>
        </div>
    </div>
  )
}

export default dashboard
