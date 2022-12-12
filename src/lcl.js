

    //The purpose of a leveroi calculations library(LCL) is to provide
    //Leveroi App with all of the formula computations. 

    //LCL aproaches a problem of different ways of calculations and parameters. 
    //User can preload a Binance preset or Crypto.com preset or even to choose custom

    //So LCL will provide leveroi with a set of premade calculation functions

    //All LCL functions get 2 values. Open and Close. 
    //-----------------------------------------------------------\\
    //---OPEN: AMOUNT, FEE, INITIALISED, LEVERAGE, PRICE, VALUE--\\
    //---CLOSE: PRICE, LONG, MAX, MIN----------------------------\\
    //-----------------------------------------------------------\\


    //margin is a profits - fees
    export const margin = (open, close) => {
       let _margin
         if(close.long === false){
           _margin = fixCoef(((((1/open.price)-(1/close.price))*-(open.amount * open.leverage))*close.price)-(feeCoef(Number(open.amount * open.leverage), open.fee)*2))
        }else{
           _margin = fixCoef(((((1/open.price)-(1/close.price))*(open.amount * open.leverage))*close.price)-(feeCoef(Number(open.amount * open.leverage), open.fee)*2))
        }

        if (open.fee === 0) {
            return _margin
        } else {
            return fixCoef((_margin - feeCoef(_margin, open.fee)))
        }
    }
    // total is returning amount + margin
    export const total = (open, close) => {
           return fixCoef((Number(margin(open,close) + open.amount)))
    }
    // margin percent in a percent of margin to initial amount
    export const marginPercent = (open, close) => {
       return fixCoef(margin(open, close)*100/open.amount)
    }

    // liquidation returns a liquidation price of an order
    export const liquidation = (open, close) => {

        let _liq
        if(close.long){
             _liq =  Number(open.price - ((open.price - ((open.fee * open.leverage)/100)) / open.leverage))
            }else{
             _liq = Number(open.price + ((open.price - ((open.fee * open.leverage)/100)) / open.leverage))
            }
        
        return fixCoef(_liq)
    }



    //---------------------------------------------\\
    //--------------Rely-----Functions-------------\\
    //---------------------------------------------\\
    //----Functions that do not need open and  ----\\
    //----close orders to be inputed, but they ----\\
    //----rely on specific parameters, as fees ----\\
    //---------------------------------------------\\

    
    //feeCoef returns the amount of fee, from an exact number
    export const feeCoef = (target, fee) =>{
        

        const total = target - (target * (1 - fee/100));
        
        return total;
        
    }

    export const fixCoef = (target) => {

            target = Number(target)
        
            if(target > 10000){return Number(target.toFixed(1))}
            else if(target > 100){return Number(target.toFixed(2))}
            else if(target > 10){return Number(target.toFixed(3))}
            else if(target > 0) {return Number(target.toFixed(4))}
            else if(target > -100){return Number(target.toFixed(2))}
            else{return Number(target.toFixed(1))}
        
    }



    //---------------------------------------------\\
    //-------------Input-----Functions-------------\\
    //---------------------------------------------\\
    //----Functions that interacts with user   ----\\
    //----   input elements, depends on its    ----\\
    //----output and change the state of an app ---\\
    //---------------------------------------------\\


    export const changeClosePrice = (close, setClose, value) => {
        console.log(value);
        if(value){
            let x = fixCoef(value)       
            setClose(close => ({...close, price:x}))
            value = null
            if(x > close.max)
            {setClose(close => ({...close, max:x}))}
            else if (x < close.min) 
            {setClose(close => ({...close, min:x}))}
        }else{}}

    export const changeMin = (close, setClose, value) => {
        if(value){
            let x = fixCoef(value)       
            if(x >= close.max){console.log("preventMoreOne");}
            else if(x <= 0 || x === null){} 
            else{setClose(close => ({...close, min:x}))}
            value = null
        }else{}}

    export const changeMax = (close, setClose, value) => {
        if(value){
            let x = fixCoef(value)       
            if(x <= 0 || x === null){}
            else if(x <= close.min){console.log("preventLessOne");}
            else{setClose(close => ({...close, max:x}))} 
            value = null
        }else{}}