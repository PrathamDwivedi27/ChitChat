import CreateChat from "@/components/groupChat/CreateChat";
import DashNav from "@/components/dashboard/DashNav";
import React from "react";
import { authOptions, CustomSession } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { fetchChatGroups } from "@/fetch/groupFetch";
import GroupChatCard from "@/components/groupChat/GroupChatCard";

export default async function dashboard() {
  const session: CustomSession | null = await getServerSession(authOptions);
  const groups: Array<GroupChatType> | [] = await fetchChatGroups(
    session?.user?.token!
  );

  return (
    <div>
      <DashNav
        name={session?.user?.name!}
        image={session?.user?.image ?? undefined}
      />
      <div className="container">
        {/* Create Chat Button with Margin */}
        <div className="mt-6 text-right mx-40">
          <CreateChat user={session?.user!} />
        </div>

        {/* Group Chat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 px-7">
          {groups.length > 0 &&
            groups.map((item, index) => (
                <GroupChatCard key={index} group={item} user={session?.user!} />
            ))}
        </div>
      </div>
    </div>
  );
}
