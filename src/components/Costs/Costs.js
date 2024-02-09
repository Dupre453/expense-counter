
import '../../style/Costs.css'
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import React, {useState} from 'react'
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

  const Costs = (props) => {

  const [selectedYear, setSelectedYear] =  useState('2024')

  const yearChange = (year) => {
   setSelectedYear(year)
  }
  const filteredCosts = props.costs.filter(cost=>{
  return cost.date.getFullYear().toString() === selectedYear
})


  return (
    <div>
      <CostsFilter year={selectedYear} onChangeYear={yearChange}/>
      <CostsDiagram costs={filteredCosts}/>
      <Card className='costs'>
        <CostList costs={filteredCosts}/>
      </Card>
    </div>
  )
}

export default Costs
