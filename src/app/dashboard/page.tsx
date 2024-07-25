import { getServerSession } from 'next-auth';
import React from 'react';
import ButtonLogout from './_components/buttom';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
    const session = await getServerSession()
    // console.log(session)
    //   if(!session){
    //     redirect('/')
    //   }
    return (
        <div>
            <h1>Dashboard Page</h1>

            <div>
                <h2>{session?.user?.name}</h2>
                <p>{session?.user?.email}</p>
                <br />
                <ButtonLogout />
            </div>
        </div>
    );
};

