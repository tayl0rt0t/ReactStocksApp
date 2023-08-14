
import Symbol from "../components/symbol";
import Price from "../components/price";
import Change from "../components/change";
import { Link } from 'react-router-dom'


export default function Stocks(props) {
  const { name, symbol, price, change } = props;

  return (
    
      <div className="flex justify-between ml-8 mt-10 flex-wrap">
        <h3>
          {/* filter? */}
          {name}
          <hr />
        </h3>
        <Symbol symbol={symbol} />
        <Price price={price} />
        <Change className="ml-14" change={change} />
      </div>
    
  );
}
