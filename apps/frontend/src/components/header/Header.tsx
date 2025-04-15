import React from "react";
import { Link } from "react-router-dom";

import { AppPath } from "../../constants/enums/enums";
import styles from "./header.module.css";

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
            <li className={styles.navHeaderItem} title="Create Order">
              <Link
                data-test-id="header-create-order-link"
                to={AppPath.CREATE_ORDER}
                className={styles.navHeaderInner}
              >
                Create Order
              </Link>
            </li>
            <li className={styles.navHeaderItem} title="Orders">
              <Link
                data-test-id="header-orders-link"
                to={AppPath.ORDERS}
                className={styles.navHeaderInner}
              >
                Orders
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { Header };
