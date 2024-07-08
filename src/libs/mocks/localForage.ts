let store: any = {};

const mockLocalForage = {
  getItem: async (key: any) => store[key],
  setItem: async (key: any, value: any) => {
    store[key] = value;
    return value;
  },
  clear: async () => {
    store = {};
  },
};

export default mockLocalForage;
