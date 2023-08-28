export const getProfile = () => {
  return (Promise = (resolve, reject) => {
    try {
      resolve(JSON.parse(localStorage.getItem("profile")));
    } catch (ex) {
      reject(ex);
    }
  });
};

export const storeProfile = (profile) => {
  return new Promise((resolve, reject) => {
    try {
      var data = JSON.stringify(profile);
      localStorage.setItem("profile", data);
      resolve(data);
    } catch (ex) {
      reject(ex);
    }
  });
};

export const clearProfile = () => {
  return (Promise = (resolve, reject) => {
    try {
      localStorage.removeItem("profile");
      resolve("Cleared");
    } catch (ex) {
      reject(ex);
    }
  });
};

export const checkAuthentication = () => {
  return (Promise = (resolve, reject) => {
    try {
      const itemKey = "profile";
      const itemExists = localStorage.getItem(itemKey) !== null;

      if (itemExists) {
        resolve({ isAuthenticated: true });
      } else {
        resolve({ isAuthenticated: false });
      }
    } catch (ex) {
      reject(ex);
    }
  });
};
