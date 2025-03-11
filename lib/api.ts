export const fetchUserData = async (username: string) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('User does not exist');
    }
    throw new Error('Error fetching user data');
  }
  return response.json();
};
