"use client";

import {
  FundProjectionScreenOutlined,
  HolderOutlined,
  HomeOutlined,
  SearchOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import SidebarStyles from "./Sidebar.styles";
import { ISidebarProps } from "./Sidebar.types";

const Sidebar = (props: ISidebarProps) => {
  const currentPath = usePathname();
  const [isNavHover, setIsNavHover] = useState<boolean>(false);
  return (
    <div>
      <SidebarStyles $isNavHover={isNavHover}>
        {isNavHover && <div className="aside-shadow"></div>}
        <div className="disney-logo">
          <Link className="disney-logo--img" href="/">
            <Image
              sizes="100vh"
              priority
              alt="original-data"
              fill
              style={{ objectFit: "contain" }}
              src="/logo.jpg"
            />
          </Link>
        </div>
        <nav
          onMouseEnter={() => {
            setIsNavHover(true);
          }}
          onMouseLeave={() => {
            setIsNavHover(false);
          }}
        >
          <ul>
            <li>
              <Link className="profile" href="/">
                <Image alt="original-data" width={20} height={20} src="/profile.png" />
                <span className="nav--title">My Space</span>
              </Link>
            </li>
            <li className={`${currentPath === "/explore" ? "active" : ""}`}>
              <Link href="/explore">
                <SearchOutlined />
                <span className="nav--title">Search</span>
              </Link>
            </li>
            <li className={`${currentPath === "/" ? "active" : ""}`}>
              <Link href="/">
                <HomeOutlined />
                <span className="nav--title">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <FundProjectionScreenOutlined />
                <span className="nav--title">Series</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <WalletOutlined />
                <span className="nav--title">Movie</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <HolderOutlined />
                <span className="nav--title">Originals</span>
              </Link>
            </li>
          </ul>
        </nav>
      </SidebarStyles>
    </div>
  );
};

export default Sidebar;
