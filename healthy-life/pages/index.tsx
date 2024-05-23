// pages/index.tsx

import axios from 'axios';
import Link from 'next/link';
import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { useGoals } from '../context/GoalContext';
import { fetchUnsplashImages } from '../utils/fetchUnplashImages';
import { shortTitles } from '../utils/goalTitles';

interface Goal {
  code: string;
  title: string;
  description: string;
  uri: string;
}

export interface HomeProps {
  goals: Goal[];
  images: string[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get('https://unstats.un.org/SDGAPI/v1/sdg/Goal/List');
  const goals: Goal[] = res.data;

  // Fetch Unsplash images
  const images = await fetchUnsplashImages(goals.length);

  return {
    props: {
      goals,
      images,
    },
  };
};

const Home: React.FC<HomeProps> = ({ goals = [], images = [] }) => {
  const { setGoals } = useGoals();

  useEffect(() => {
    setGoals(goals);
  }, [goals, setGoals]);

  return (
    <div>
      <h2 className="text-3xl font-bold my-8 text-center ">THE GOALS</h2>
      <div
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1530&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-white text-4xl font-base  md:text-center md:pt-24 pt-8 px-6 leading-10">17 GOALS TO TRANSFORM OUR WORLD</h1>
      </div>
      <div className="container mx-auto p-4 mt-[-80px] ">

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-12">
          {goals.map((goal, index) => (
            <Link key={goal.code} href={`/goal/${goal.code}`}>
              <div
                className="relative flex items-center justify-center h-32 border-none rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: `url(${images[index]})`,
                }}
              >
                <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                <h2 className="relative text-white font-bold md:text-lg text-md z-10 text-center">{goal.code}: {shortTitles[goal.code]}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
