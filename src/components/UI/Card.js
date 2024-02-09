//одинаковый интерфейс Costs & costItem
import '../../style/Card.css'

const Card = (props) => {
  const classes = 'card ' + props.className //получаем дефолтный класс и протаскиваем остальные классы
  return <div className={classes}>{props.children}</div>

}
export default Card;
