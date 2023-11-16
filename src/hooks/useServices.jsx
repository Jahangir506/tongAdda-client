import { useQuery } from "@tanstack/react-query";

export const useServices = () => {

    const { data: services, isLoading } = useQuery({
        queryKey: ["services"],
        queryFn: async () => {
          const data = await fetch("http://localhost:5007/services");
          return await data.json();
        },
      });

    return {services, isLoading}
}