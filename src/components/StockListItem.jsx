import styles from "../styles/StockListItem.module.css";

const StockListItem = ({ stockObj }) => {

    const UNITS = {
        "G": "Gramm",
        "U": "Stück"
      }

    return (
    <tr key={stockObj.stockid} className={styles.item}>
        <td className={styles.itemname}>{stockObj.itemname}</td>
        <td className={styles.quantity}><input className={styles.inputquantity} type = "number" defaultValue = {stockObj.quantity}></input></td>
        <td className={styles.unit}>{UNITS[stockObj.unit]}</td>
    </tr>
    );
  };
  export default StockListItem;