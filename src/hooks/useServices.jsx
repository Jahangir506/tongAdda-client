import { useQuery } from "@tanstack/react-query";

export const useServices = () => {

    const { data: services, isLoading } = useQuery({
        queryKey: ["services"],
        queryFn: async () => {
          const data = await fetch("https://tong-adda-server.vercel.app/services");
          return await data.json();
        },
      });

    return {services, isLoading}
}