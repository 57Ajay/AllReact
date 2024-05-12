import { useMemo, Fragment} from 'react'

 const Assignment3=()=> {
    const items = useMemo(()=>[
        {name : "Chocolates", value: 10},
        {name : "Chips", value: 20},
        {name : "Onions", value: 30},
        {name : "Tomato", value: 30}
    ], []);

    const totalValue = useMemo(() => {
        return items.reduce((total, item) => total + item.value, 0);
    }, [items]);<br />

  return (
    <Fragment>
        <h1>Assignment3</h1>
        <ul>
            {items.map((item)=>{
                return <li key={item.name}>{item.name} - Price:${item.value}</li>
            })}
        </ul>
        Total Value: {totalValue}
    </Fragment>
  )
}

export default Assignment3;
