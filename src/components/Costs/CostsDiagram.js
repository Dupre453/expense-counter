import Diagram from "../diagram/Diagram";


const CostsDiagram = (props) => {

  const diagramDataSets = [
    {label: 'янв',  value: 0},
    {label: 'фев',  value: 0},
    {label: 'март', value: 0},
    {label: 'апр',  value: 0},
    {label: 'май',  value: 0},
    {label: 'июнь', value: 0},
    {label: 'июль', value: 0},
    {label: 'авг',  value: 0},
    {label: 'сен',  value: 0},
    {label: 'окт',  value: 0},
    {label: 'нояб', value: 0},
    {label: 'дек',  value: 0},
  ]

  for (const cost of props.costs) {
    const costMonth = cost.date.getMonth()
    diagramDataSets[costMonth].value += cost.amount
  }

return <Diagram dataSets={diagramDataSets}/>

 }
 export default CostsDiagram
