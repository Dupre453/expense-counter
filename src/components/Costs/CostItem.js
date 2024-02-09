import '../../style/CostItem.css'
import CostDate from "./CostDate";
import Card from "../UI/Card";

const CostItem = (props) => {
    return (
      <li>
        <Card className='cost-item'>
            <CostDate date={props.date}/>
            <div className='cost-item-description'>
                <h2>{props.description}</h2>
                 <div className='cost-item-border'></div>
                <div className='cost-item-price'>
                    {props.amount} ₽
                </div>
            </div>
        </Card>
      </li>
    )
}

export default CostItem
