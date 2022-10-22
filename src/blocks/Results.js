import React from 'react'
import Pair from "../reusable/Pair"

const Results = ({close, open}) => {

  let longResults = {
        margin: 0,
        marginPercent: 0,
        total: 0
  }

    let shortResults = {
        margin: 0,
        marginPercent: 0,
        total: 0
    }

    longResults.margin = Number((((1/close.closePrice)-(1/open.price))*(close.closePrice * -1)*open.value)).toFixed(2)
    longResults.total = (Number(longResults.margin) + Number(open.amount)).toFixed(2)
    longResults.marginPercent = (longResults.margin*100/open.amount).toFixed(2)

    shortResults.margin = Number((((1/open.price)-(1/close.closePrice))*(open.value * -1)*close.closePrice)).toFixed(2)
    shortResults.total = (Number(shortResults.margin) + Number(open.amount)).toFixed(2)
    shortResults.marginPercent = (shortResults.margin*100/open.amount).toFixed(2)
  return (
    <div className=''>

      
          {close.long === true 
            ? 
            <div>
              <div>
                <h4>PNL  LONG</h4>
                <h4>{longResults.margin}</h4>
                <h5>{longResults.marginPercent}%</h5>
              </div>
              <div>
                <h4>Total : {longResults.total}</h4>
              </div>
            </div>
            :
            <div>
              <div>
                <h4>PNL  SHORT</h4>
                <h4>{shortResults.margin}</h4>
                <h5>{shortResults.marginPercent}%</h5>
              </div>
              <div>
                <h4>Total : {shortResults.total}</h4>
              </div>
            </div>

          }
       </div>
                        
    
                    
  )
}

export default Results