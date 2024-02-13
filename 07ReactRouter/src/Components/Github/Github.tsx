import React from 'react';
import { useLoaderData } from 'react-router-dom';

interface GithubData {
  followers: number;
  avatar_url: string;
  name:string;
}

function Github() {
  const data = useLoaderData() as GithubData;

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-wrap'>
      Name:{data.name}
      Github followers: {data.followers}

      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/shikhar010100');
  const data = await response.json();

  // Ensure that the fetched data matches the GithubData interface
  const githubData: GithubData = {
    followers: data.followers,
    name:data.name,
    avatar_url: data.avatar_url,
  };

  return githubData;
};
