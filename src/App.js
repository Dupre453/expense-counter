import React, {useState} from "react";
import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";

const INITIAL_COSTS = [
  {
    id: 'a1',
    date: new Date(2023, 11, 18),
    description: 'Холодильник',
    amount: 66.999
  },
  {
    id: 'a2',
    date: new Date(2022, 12, 10),
    description: 'Брюки',
    amount: 4.999
  },
  {
    id: 'a3',
    date: new Date(2021, 6, 2),
    description: 'Наушники',
    amount: 10.999
  }
]

const App = () => {
 const [costs, setCosts] = useState(INITIAL_COSTS)

const addCost = (cost) => {
   setCosts(prevCosts => {
     return [cost, ...prevCosts]
   })
}

  return (
<div>
  <NewCost onAddCost={addCost}/>
  <Costs costs={costs} />
</div>
  )
}

export default App;
