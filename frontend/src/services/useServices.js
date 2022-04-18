import useHttp from "../components/customHooks/useHttp";

export default function useServices() {

  const { loading, error, request, clearError } = useHttp();

  const getAllProducts = async () => {
    try {
      const response = await request('/api/get-foods');
      return response;
    } catch (e) {
      console.log(e);
    }
  }

  return { loading, error, clearError, getAllProducts };
}
