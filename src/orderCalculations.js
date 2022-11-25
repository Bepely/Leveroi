const leveroi = (o, c) => {

    const amount = o.amount
    const leverage = o.leverage
    const price_open = o.price
    const fee = o.fee
    const value = o.value

    const price_close = c.price


    //bid is a volume of an order after aquiring of all coefs 
    const bid = () => {
        //Long order Bid calculation
        if (close.long) {
            return 
        } else {

        }
    }

    //margin is a profits - fees, that have a fixed point of 2 123.00
    const margin = () => {
        if(close.long){
           return Number((((1/price_close)-(1/price_open))*(price_close * -1)*(value-feeCoef(open.value)*2))).toFixed(2)
        }else{
           return Number((((1/price_open)-(1/price_close))*(price_open *-1)*(price_close-feeCoef(value)*2))).toFixed(2)
        }
    }

    const total = () => {

    }

    const marginPercent = () => {

    }

    //feeCoef returns the amount of fee, from an exact number
    const feeCoef = (c) =>{
        return((c/100)*fee)
    }


}

export default leveroi