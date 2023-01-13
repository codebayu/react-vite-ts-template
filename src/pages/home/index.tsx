import axios, { AxiosError } from 'axios';
import { useQuery } from 'react-query';

interface ISuperheroes {
  id: string;
  name: string;
  alterEgo: string;
}

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

export const Home = () => {
  // const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
  //   'super-heroes',
  //   fetchSuperHeroes,
  //   { cacheTime: 5000 }
  // );

  // console.log({isLoading, isFetching});

  // if (isLoading) {
  //   return <h2>Loading....</h2>;
  // }

  // if (isError) {
  //   return <h2>{error.message}</h2>;
  // }

  return (
    <>
      <h1>Home</h1>
      {/* {data?.data.map((item: ISuperheroes) => (
        <h3 key={item?.id}>{item?.name}</h3>
      ))} */}
      <button>Refetch Manually</button>
    </>
  );
};
