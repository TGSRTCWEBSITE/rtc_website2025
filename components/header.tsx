import { useRouter } from "next/router";
import Link from "next/link";
import type { NextPage } from "next";
import styles from "./header.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HOSPITAL_WEBSITE, MENU, RESERVATIONS_KALABHAVAN_BOOKING_LINK,RESERVATIONS_KALABHAVAN_BOOKING} from "../constants";
import { HeaderConfig, Sublinks, headerData } from "../constants/Header";

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;
  const isSublinkActive = (sublink: string) => router.pathname === sublink;

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerConfig, setHeaderConfig] = useState<HeaderConfig[]>(headerData);
  const [isRotated, setIsRotated] = useState(false);

  // scroll floating header

  const flotingHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 100) {
        if (window.scrollY > lastScrollY) {
          // Scroll Down
          setShowHeader(false);
        } else {
          // Scroll Up
          setShowHeader(true);
        }
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", flotingHeader);

      return () => {
        window.removeEventListener("scroll", flotingHeader);
      };
    }
  }, [lastScrollY]);

  // Mobile tab toggle menu bar

  const [isHamburgerMenu, SetHamburgerMenu] = useState(false);
  const toggleHamburgerMenu = () => {
    if (!isHamburgerMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    SetHamburgerMenu(true);
  };

  const closeHamburgerMenu = () => {
    SetHamburgerMenu(false);
    document.body.style.overflow = "unset";
  };

  const toggleDropDownMenu = (headerOption: HeaderConfig) => {
    const newData = headerConfig.map((each: HeaderConfig) => {
      if (each.displayName === headerOption.displayName) {
        each.dropDown = each.dropDown == 1 ? 0 : 1
      } else {
        each.dropDown = 0;
      }
      return each;
    });
    setHeaderConfig(newData);
    setIsRotated(!isRotated);
  };

  const resetData = () => {
    setHeaderConfig(prev => {
      return prev.map((each) => {
        if (each.isNavLink === false) each.dropDown = 0
        return each
      })
    })
  }

  return (
    console.log("build check"),
    <header
      className={`${styles.header} ${className} ${showHeader ? "" : styles.headerHidden}`}
    >
      <>
        <Link href="/" className={styles.headerTabLink}>
          <div className={styles.tsrtcLogo}>
            <img
              className={styles.tsrtcLogoIcon}
              loading="lazy"
              alt="tsrtc-logo"
              src="tsrtc-logo-compressed-image@5x.webp"
            />
            <div className={styles.tsrtcHeaderTextLogo}>
              <img
                className={styles.icon}
                loading="lazy"
                alt="tsrtc-header-text-logo"
                src="/header-text-logo.png"
              />
              <img
                className={styles.telanganaStateRoadTransport}
                loading="lazy"
                alt="tsrtc-logo"
                src="/telangana-state-road-transport-corporation1.png"
              />
            </div>
          </div>

          <div className={styles.tsrtcMobileLogoIconSection}>
            <img
              className={styles.tsrtcMobileLogoIcon}
              loading="lazy"
              alt="tsrtc-mobile-logo"
              src="/tsrtc-mobile-logo@2x.png"
            />
          </div>
        </Link>
      </>

      <div className={styles.tabContainer}>
        {headerData.map(({ displayName, isNavLink, link, subLinks }) => (
          <div className={styles.headerTabLink} key={displayName}>
            {isNavLink ? (
              <Link
                href={link}
                className={isActive(link) ? styles.activeTab : styles.navTabs}
              >
                <span className={styles.reservations}>{displayName}</span>
              </Link>
            ) : (
              <>
                <span
                  className={
                    subLinks?.some(({ sublink }) => isSublinkActive(sublink))
                      ? styles.activeTab
                      : styles.navTabs
                  }
                >
                  <span className={styles.reservations}>{displayName}</span>
                </span>
                {/* redirected to new tab if sublink displayName is "HOSPITAL WEBSITE" for web view */}
                {subLinks && (
                  <ul className={styles.dropdownMenu}>
                    {subLinks.map(({ sublinkDisplayName, sublink }, index) => {
                      if (sublinkDisplayName === HOSPITAL_WEBSITE || 
                          sublinkDisplayName === RESERVATIONS_KALABHAVAN_BOOKING) {
                        return (
                          <li className={styles.headerListItemLink} key={index}>
                            <Link
                              href={sublink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.listItem}
                            >
                              <span className={styles.dropdownItem}>
                                {sublinkDisplayName}
                              </span>
                            </Link>
                          </li>
                        );
                      } else {
                        return (
                          <li className={styles.headerListItemLink} key={index}>
                            <Link href={sublink} className={styles.listItem}>
                              <span className={styles.dropdownItem}>
                                {sublinkDisplayName}
                              </span>
                            </Link>
                          </li>
                        );
                      }
                    })}
                  </ul>
                )}
              </>
            )}
          </div>
        ))}
      </div>
      {/* -------------- */}
      <div className={styles.headerMobileIconSection}>
        <img
          className={styles.headerMobileIcon}
          loading="lazy"
          alt="tsrtc-mobile-header-icon"
          src="/header-mobile-icon.svg"
          onClick={toggleHamburgerMenu}
        />

        {isHamburgerMenu && (
          <>
            <div className={styles.slideMenu}>
              <div className={styles.menuLabel}>
                <div className={styles.menu}>{MENU}</div>
                <div
                  className={styles.closeIconSection}
                  onClick={closeHamburgerMenu}
                >
                  <Image
                    className={styles.closeIcon}
                    loading="lazy"
                    alt="close-menu-icon"
                    src="/close-button.png"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <div className={styles.menuList}>
                {headerConfig.map(
                  (headerOption: HeaderConfig, index: number) => {
                    if (headerOption.isNavLink === true && headerOption.link) {
                      return (
                        <div className={styles.headerTabMobile} key={index}>
                          <div className={styles.headerTabLink}>
                            <Link
                              href={headerOption.link}
                              className={styles.navTabs}
                              onClick={() => {
                                closeHamburgerMenu();
                                resetData();
                              }}
                            >
                              <span
                                className={
                                  isActive(headerOption.link)
                                    ? styles.currentPage
                                    : styles.reservations
                                }
                              >
                                {headerOption.displayName}
                              </span>
                            </Link>
                          </div>
                          <div className={styles.whiteLine}></div>
                        </div>
                      );
                    } else {
                      return (
                        <div className={styles.headerTabMobile} key={index}>
                          <div
                            className={styles.headerTabLink}
                            onClick={() => toggleDropDownMenu(headerOption)}
                          >
                            <div className={styles.navTabs}>
                              <span
                                className={
                                  headerOption?.subLinks?.some(({ sublink }) =>
                                    isSublinkActive(sublink)
                                  )
                                    ? styles.currentPage
                                    : styles.reservations
                                }
                              >
                                {headerOption.displayName}
                              </span>
                              <span>
                                <Image
                                  className={`${styles.toggleIcon} ${headerOption.dropDown ? styles.rotated : ""
                                    }`}
                                  loading="lazy"
                                  alt="toggle-icon"
                                  src="/toggle.png"
                                  width={24}
                                  height={24}
                                />
                              </span>
                            </div>
                            {headerOption.dropDown == 1 && (
                              <ul className={styles.dropdownMenu}>
                                {headerOption.subLinks?.map(
                                  (sLink: Sublinks, subIndex: number) => {
                                    {
                                      /* redirected to new tab if sublink displayName is "HOSPITAL WEBSITE"  for mobile view*/
                                    }
                                    if (sLink.sublinkDisplayName === HOSPITAL_WEBSITE ||
                                        sLink.sublinkDisplayName === RESERVATIONS_KALABHAVAN_BOOKING
                                    ) {
                                      return (
                                        <li
                                          className={styles.headerListItemLink}
                                          key={subIndex}
                                        >
                                          <Link
                                            href={sLink.sublink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.listItem}
                                            onClick={() => closeHamburgerMenu()}
                                          >
                                            <span
                                              className={
                                                isSublinkActive(sLink.sublink)
                                                  ? styles.currentTab
                                                  : styles.dropdownItem
                                              }
                                            >
                                              {sLink.sublinkDisplayName}
                                            </span>
                                          </Link>
                                        </li>
                                      );
                                    } else {
                                      return (
                                        <li
                                          className={styles.headerListItemLink}
                                          key={subIndex}
                                        >
                                          <Link
                                            href={sLink.sublink}
                                            className={styles.listItem}
                                            onClick={() => closeHamburgerMenu()}
                                          >
                                            <span
                                              className={
                                                isSublinkActive(sLink.sublink)
                                                  ? styles.currentTab
                                                  : styles.dropdownItem
                                              }
                                            >
                                              {sLink.sublinkDisplayName}
                                            </span>
                                          </Link>
                                        </li>
                                      );
                                    }
                                  }
                                )}
                              </ul>
                            )}
                          </div>
                          <div className={styles.whiteLine}></div>
                        </div>
                      );
                    }
                  }
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
