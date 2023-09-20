
import { useAuth0 } from "@auth0/auth0-react";

function useAuthData() {
  const { user } = useAuth0();
  console.log(user);
  return {
    userId: user?.sub,
  };
}

export default useAuthData;