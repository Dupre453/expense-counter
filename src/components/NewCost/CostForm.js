
import React, {useState} from 'react'
import '../../style/CostForm.css'

const CostForm = (props) => {

  const [inputName, setInputName] = useState('')
  const [inputAmount, setInputAmount] = useState('')
  const [inputDate, setInputDate] = useState('')


  const nameChange = (event) => {
   setInputName(event.target.value)
  }

  const amountChange = (event) => {
    setInputAmount(event.target.value)

  }

  const dateChange = (event) => {
    setInputDate(event.target.value)

  }
/////////
  const submit = (event) => {
    event.preventDefault()

    const costDate = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate)
    }

    props.onSaveCostData(costDate)  //вызов функции
    setInputName('')
    setInputAmount('')
    setInputDate('')
  }

  return (
    <form onSubmit={submit}>
      <div className='new-cost__controls'>
        <div className="new-cost__control">
          <label>Название</label>
          <input
            value={inputName}
            onChange={nameChange}
            type="text"
          />
        </div>

        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            value={inputAmount}
            onChange={amountChange}
            type="number"
            min='0.01'
            step='0.01'/>
        </div>

        <div className="new-cost__control">
          <label>Дата</label>
          <input
            value={inputDate}
            onChange={dateChange}
            type="date"
            min='2019-01-01'
            step='2024-12-31'/>
        </div>

        <div className='new-cost__actions'>
          <button
            type='submit'>
            Добавить расход
          </button>
          <button type='button' onClick={props.onCancel}>
            Отмена
          </button>
        </div>

      </div>
    </form>
  )
}


export default CostForm
