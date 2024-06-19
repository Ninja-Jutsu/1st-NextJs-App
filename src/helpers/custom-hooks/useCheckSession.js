import { useUserLoggedInContext } from '../../context-providers/UserLoggedInProvider'

export function useCheckSession() {
  const { isLoggedIn, setIsLoggedIn } = useUserLoggedInContext()

  React.useEffect(() => {
    if (session) {
      setIsLoggedIn(true)
    }
  }, [session])
}
