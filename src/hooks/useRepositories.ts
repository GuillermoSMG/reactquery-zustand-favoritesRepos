import api from '../api/github';
import { useQuery, QueryFunctionContext } from '@tanstack/react-query';
import { Repository } from './types';

const fetchRepos = async (ctx: QueryFunctionContext) => {
  const [_, user] = ctx.queryKey;
  const { data } = await api.get<Repository[]>(`/users/${user}/repos`);
  return data;
};

export const useFetchRepositories = (user: string, filter: boolean) => {
  return useQuery(['repos', user], fetchRepos, { enabled: !!filter });
};
