export default function useApi() {
  async function getUsers() {
    return new Promise((resolve, reject) => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  return { getUsers };
}
