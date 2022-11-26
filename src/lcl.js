

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


    //margin is a profits - fees, that have a fixed point of 2 123.00
    export const margin = (open, close) => {
       let _margin
         if(close.long === false){
           _margin = Number(((((1/open.price)-(1/close.price))*(-open.value))*close.price).toFixed(2))
        }else{
           _margin = Number(((((1/open.price)-(1/close.price))*(open.value))*close.price).toFixed(2))
        }

        if (open.fee === 0) {
            return _margin
        } else {
            return Number((_margin - feeCoef(_margin, open.fee)*2).toFixed(2))
        }
    }
    // total is returning amount + margin
    export const total = (open, close) => {
           return Number(Number(margin(open,close) + open.amount).toFixed(2))
    }
    // margin percent in a percent of margin to initial amount
    export const marginPercent = (open, close) => {
       return Number(margin(open, close)*100/open.amount).toFixed(2)
    }

    // liquidation returns a liquidation price of an order
    export const liquidation = (open, close) => {
        let _liq
        if(close.long){
             _liq =  Number(((open.price-((open.price/open.leverage)-(open.value)*(open.fee/100)))).toFixed(2))
            }else{
             _liq = Number(((open.price-((open.value)*(open.fee/100))+(open.price/open.leverage))).toFixed(2))
            }
        return _liq
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
        return((target/100)*fee)
    }