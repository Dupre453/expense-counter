
import '../../style/CostsFilter.css'


const CostsFilter = (props) => {

  const yearChange = (event) => {
props.onChangeYear(event.target.value)
  }

 return(
   <div className='costs-filter'>
     <div className='costs-filter__control'>
       <label>Выбор расходов по году</label>
       <select value={props.year} onChange={yearChange}>
         <option value="2024">2024</option>
         <option value="2023">2023</option>
         <option value="2022">2022</option>
         <option value="2021">2021</option>
         <option value="2020">2020</option>
       </select>
     </div>
   </div>
 )
}

export default CostsFilter

