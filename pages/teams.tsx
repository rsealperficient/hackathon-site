import React, { ReactElement } from 'react';
import Auth from '../layouts/Auth';
import NextPageWithLayout from '../layouts/NextPageWithLayout';
import Image from 'next/image';
import Head from 'next/head';
import Landing from '../layouts/Landing';
import TeamCard from '../components/Cards/TeamCard';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { getTeamsList, Team } from '../api/sheets';

interface IProps {
    teams: Team[]
};

const Teams = (props: IProps) => {
    return (
        <>
            <Head>
                <title>Sitecore/Opti Hackathon: Teams</title>
                <meta name="description" content="Generated by create next app" />
            </Head>

            <div className="container mx-auto px-4 h-full">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-14 rounded-lg mt-16">
                    <div className="py-10">
                        <h1 className="text-4xl text-center text-gray-700 dark:text-gray-50 font-extrabold">
                            Sitecore/Opti Hackathon Registered Teams
                        </h1>
                    </div>
                </div>
                <div className="pb-10 dark:bg-gray-600">
                    <div className="sm:px-4 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {props.teams?.length > 0
                            ? props.teams.map((team: any) =>
                                <>
                                    <TeamCard key={team} header={team.teamName}>
                                        <ul>
                                            <li>{team.teamLeader}</li>
                                            <li dangerouslySetInnerHTML={{ __html: team.teamMember1 }}></li>
                                            <li dangerouslySetInnerHTML={{ __html: team.teamMember2 }}></li>
                                        </ul>
                                    </TeamCard>
                                </>
                            ) : null}
                    </div>
                </div>
            </div>
        </>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const teams = await getTeamsList();
    return {
        props: {
            teams: teams
        },
        revalidate: 1,
    };
}

Teams.getLayout = function getLayout(page: ReactElement) {
    return (
        <Landing>{page}</Landing>
    )
}

export default Teams;