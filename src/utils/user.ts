export const clearUser = () => {
  localStorage.clear();
  sessionStorage.clear();
};

export const setUser = async <T>(islocalStorage: boolean, data: T) => {
  const user = JSON.stringify(data);
  if (islocalStorage) {
    localStorage.setItem("userData", user);
  } else {
    sessionStorage.setItem("userData", user);
  }
};

export const getUser = () => {
  const user = JSON.parse(localStorage.getItem("userData") as string);
  return user;
};
