"use client";

import { createContext, useContext, useEffect, useState } from "react";

type LandingPageProvidersProps = {
  children?: any;
};

export type ValueWishList = {
  title: string;
  id: number;
  backdrop_path: string;
  overview: string;
  original_name?: string;
  name?: string;
  original_language: string;
  adult: boolean;
  first_air_date?: string;
  poster_path: string;
  release_date: string;
  type?: string;
  status: boolean;
};

const DEFAULT_CONTEXT = {
  onWishList: () => {},
  onCheckWatchList: () => {
    return [];
  },
  onGetDataById: () => {
    return false;
  },
  localWhishList: [],
};

type LandingPageContextProps = {
  onWishList: (values: ValueWishList) => void;
  onCheckWatchList: any;
  onGetDataById: (values: number) => boolean;
  localWhishList: ValueWishList[];
};

const LandingPageContext = createContext<LandingPageContextProps>(DEFAULT_CONTEXT);

const useLandingPageContext = () => useContext(LandingPageContext);

const LandingPageProvider: React.FC<LandingPageProvidersProps> = ({ children }) => {
  const KEY_STORAGE = "WISH_LIST";
  const [localWhishList, setLocalWishList] = useState<ValueWishList[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storage = localStorage.getItem(KEY_STORAGE);
      if (storage) {
        const wishList = JSON.parse(storage);
        setLocalWishList(wishList);
      }
    }
  }, []);

  const updateLocalStorage = (newWishList: ValueWishList[]): void => {
    localStorage.setItem(KEY_STORAGE, JSON.stringify(newWishList));
    setLocalWishList(newWishList);
  };

  const onWishList = (values: ValueWishList): void => {
    const updatedWishList = values.status
      ? [...localWhishList, values]
      : localWhishList.filter((item) => item.id !== values.id);
    updateLocalStorage(updatedWishList);
  };

  const onGetDataById = (id: number): boolean => {
    return localWhishList.some((item) => item.id === id);
  };

  const mergeDataWithWatchList = (listSeriesAndMovie: ValueWishList[]): ValueWishList[] => {
    if (listSeriesAndMovie && listSeriesAndMovie.length > 0 && localWhishList?.length > 0) {
      return listSeriesAndMovie.map((item) => {
        const localItem = localWhishList.find((local) => local.id === item.id);
        return localItem ? { ...item, ...localItem } : item;
      });
    }
    return listSeriesAndMovie;
  };

  const props = {
    onWishList: onWishList,
    localWhishList: localWhishList,
    onGetDataById: onGetDataById,
    onCheckWatchList: mergeDataWithWatchList,
  };
  return <LandingPageContext.Provider value={{ ...props }}>{children}</LandingPageContext.Provider>;
};

export { LandingPageProvider, useLandingPageContext };
