import StockListItem from './StockListItem.jsx';
import styles from "../styles/Stocklist.module.css";

const StockList = (stocks) => {

  return (
    <>
  <table className={styles.stocklist}>
  <tbody>
    {stocks && stocks.stockprops.length > 0 && stocks.stockprops.map((stockObj, index) => (
        <StockListItem stockObj={stockObj} />
  ))}
  </tbody>
  </table>
  </>
  );
};
export default StockList;