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

  const onSetValueLove = (newWishList: any): void => {
    setLocalWishList(newWishList);
    localStorage.setItem(KEY_STORAGE, JSON.stringify(newWishList));
  };

  const onWishList = (values: ValueWishList): void => {
    const localData = localStorage.getItem(KEY_STORAGE) || "[]";
    const wishListDataFromStorage = JSON.parse(localData) || [];
    const currentLove: ValueWishList[] = wishListDataFromStorage;
    if (currentLove.length > 0) {
      if (!values?.status) {
        const result = currentLove?.filter((item: ValueWishList) => values?.id !== item?.id);
        onSetValueLove(result);
      } else {
        onSetValueLove([...currentLove, values]);
      }
    } else {
      onSetValueLove([...currentLove, values]);
    }
  };

  const onGetDataById = (id: number): boolean => {
    const haveSameData = localWhishList?.find((item: ValueWishList) => id === item?.id) || false;
    if (haveSameData) {
      return true;
    }
    return false;
  };

  const mergeDataWithWatchList = (listSeriesAndMovie: ValueWishList[]): ValueWishList[] => {
    const currentLocal = localWhishList || [];
    if (currentLocal.length > 0 && listSeriesAndMovie && listSeriesAndMovie.length > 0) {
      return listSeriesAndMovie.map((item) => {
        const item2 = currentLocal.find((i2) => i2.id === item.id);
        return item2 ? { ...item, ...item2 } : item;
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
