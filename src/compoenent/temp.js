const { useQuery } = require("@tanstack/react-query")

const fetchUserData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  return response.json()
}

const { isFetched, isLoading, data, isError, isFetching } = useQuery([], fetchUserData)




    
