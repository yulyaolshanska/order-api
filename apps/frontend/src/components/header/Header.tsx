import React from "react";
import { NavLink, Link } from "react-router-dom";

import { AppPath } from "../../constants/enums/enums";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link
          data-test-id="header-logo"
          to={AppPath.HOME}
          className={styles.headerLogo}
        >
          Order App
        </Link>
        <nav data-test-id="header-nav" className={styles.headerNav}>
          <ul className={styles.navHeaderList}>
            <li className={styles.navHeaderItem} title="Orders">
              <NavLink
                data-test-id="header-orders-link"
                to={AppPath.HOME}
                className={({ isActive }) =>
                  `${styles.navHeaderInner} ${isActive ? styles.active : ""}`
                }
              >
                Orders
              </NavLink>
            </li>
            <li className={styles.navHeaderItem} title="Create Order">
              <NavLink
                data-test-id="header-create-order-link"
                to={AppPath.CREATE_ORDER}
                className={({ isActive }) =>
                  `${styles.navHeaderInner} ${isActive ? styles.active : ""}`
                }
              >
                Create Order
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { Header };
