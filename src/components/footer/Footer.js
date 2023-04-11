import styles from "./footer.module.css";
import Logo from "../../shared/assets/logo1.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["top-wrapper"]}>
        <div className={styles["logo-wrapper"]}>
          <img src={Logo} alt={"Rabbit Mart"} />
        </div>
        <div className={styles["pages-wrapper"]}>
          <div className={styles["pages"]}>
            <div className={styles["page-title"]}>Shopping</div>
            <div className={styles["pages-list"]}>
              <Link to={"/orders"}>Track Order</Link>
              <Link to={"/shipping"}>Track Shipping</Link>
              <Link to={"/cart"}>Shopping Cart</Link>
            </div>
          </div>
          <div className={styles["pages"]}>
            <div className={styles["page-title"]}>Products</div>
            <div className={styles["pages-list"]}>
              <Link to={"/products?category=Fruits%20and%20Vegetables"}>
                Fruits & Vegetables
              </Link>
              <Link to={"/products?category=Beverages"}>Beverages</Link>
              <Link to={"/products"}>All Products</Link>
            </div>
          </div>
          {/* <div className={styles["pages"]}>
            <div className={styles["page-title"]}>Development</div>
            <div className={styles["pages-list"]}>
              <a
                href={"https://github.com/skittlesaur/rabbitmart"}
                target={"_blank"}
                rel={"noreferrer"}
              >
                GitHub Repository
              </a>
            </div>
          </div> */}
        </div>
      </div>
      <div className={styles["credits"]}>
        {" "}
        Copyright © 2023
        <span
          style={{
            marginLeft: "1em",
            marginRight: "1em",
            color: "green",
            fontWeight: "bold",
          }}
        >
          <Link to="https://naturalganic.shop/">Naturalganic</Link>
        </span>
        All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
