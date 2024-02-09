import CostForm from "./CostForm";
import'../../style/NewCost.css'
import React,{useState} from "react";

const NewCost = (props) => {

 const [isFormVisible, setIsFormVisible] = useState(false)

  const saveCostData = (inputCostData) => {
    const costData = {
      ...inputCostData,
    id: Math.random().toString()
    }
   props.onAddCost(costData)
    setIsFormVisible(false)
  }

  const inputCostData = () => {
   setIsFormVisible(true)
  }

  const cancelCost = () => {
   setIsFormVisible(false)
  }

  return (
    <div className='new-cost'>
      {!isFormVisible && <button onClick={inputCostData}>Добавить расход</button>}
      { isFormVisible && <CostForm onSaveCostData=  //функция, которая будет происходить в компоненете costform
       {saveCostData} onCancel={cancelCost}
      />}
    </div>
  )
}

export default NewCost;
