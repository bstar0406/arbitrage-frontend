import React from 'react'

const FlashLoanBot = () => {
  const [token, setToken] = React.useState<string>()
  const [loan, setLoan] = React.useState<number>(0)
  const [tFee, setTFee] = React.useState<number>(0)
  const [lFee, setLFee] = React.useState<number>(0)
  const [dFee, setDFee] = React.useState<number>(0)

  const [isDeposit, setIsDeposit] = React.useState<Boolean>(false)
  const [isArbitrage, setIsArbitrage] = React.useState<Boolean>(false)

  const [result, setResult] =React.useState<string>('')
  const [commands, setCommands] =React.useState<Array<string>>([])
  const [intervalval, setIntervalval] = React.useState<NodeJS.Timer>()
  const [step, setStep] = React.useState<number>(0)
  const [end, setEnd] = React.useState<boolean>(false)
  React.useEffect(()=>{
    let temp = commands;
    temp.push(result)
    setCommands(temp)
    if(result.indexOf('success')!==-1)setEnd(true);
  },[result, commands])

  React.useEffect(()=>{
    if(isArbitrage && step===1){
      let count = 0;
      let increment = setInterval(() => {
        count++;

        if(Math.round(Math.random()*10) === 4){
          console.log(count.toString() + "success!")
          setResult(count.toString() + "success!")

          clearInterval(increment)
        }else{
          console.log(count.toString() + "fail")
          setResult(count.toString() + "fail")
        }
        
       }, 1000)
       setIntervalval(increment)
    }
  },[isArbitrage, step])
  const setTokenAddress = (e: any) => {
    setToken(e.target.value)
  }
  const deposit = () => {
    if (loan >= 0.25) {
      setIsDeposit(true)
      setStep(1)
    } else {
      alert('Please enter loan amount more than 0.25ETH')
    }
  }
  const arbitrage = () => {
    setIsArbitrage(true)
  }
  const loanChange = (e: any) => {
    setLoan(e.target.value)
    const val = e.target.value
    setTFee(val * 0.007)
    setLFee(val * 0.004)
    setDFee(val * 0.002)
  }

  const reset = () =>{
    setStep(0)
    setCommands([])
    setResult('')
    setEnd(false)
    setIsArbitrage(false)
  }
  return (
    <div className="page d-flex justify-content-end">
      <div className="loan-box">
        {step === 0 && (
          <div className="step1">
            <div className="row justify-content-center font-23 mb-5">
              Description
            </div>
            <div className="">
              <div className="mb-4">
                <div className="font-15 mb-2">Token Address</div>
                <select
                  className="form-control"
                  onClick={(e) => setTokenAddress(e)}
                >
                  <option value="1">Ether</option>
                  <option value="2">BNB</option>
                  <option value="3">DAI</option>
                  <option value="4">USDC</option>
                </select>
              </div>
              <div className="mb-2">
                <div className="font-15 mb-2">Loan Amount</div>
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) => loanChange(e)}
                />
              </div>
              <div className="flex flex-column">
                <div className="font-12">Loan Fee: {tFee.toFixed(2)}</div>
                <div className="font-12">
                  Transaction Fee: {lFee.toFixed(2)}
                </div>
                <div className="font-12">Dapp Fee: {dFee.toFixed(2)}</div>
                <div className="font-12">
                  Total Fee: {(tFee + lFee + dFee).toFixed(2)}
                </div>
              </div>
            </div>
            <div
              className="row justify-content-start mt-5"
              onClick={() => deposit()}
            >
              <button className="btn btn-success next-btn">
                Deposit ETH for Fee
              </button>
            </div>
            {/* <div className="row justify-content-start mt-3" onClick={()=>arbitrage()}>
          <button className="btn btn-danger next-btn">Arbistrage</button>
        </div> */}
          </div>
        )}
        {step === 1 && (
          <div>
            <div
              className="row justify-content-start mt-3"
            >
              <div className="row justify-content-center font-23 mb-5">
                Please start Arbistrage with {loan}ETH
              </div>
              {!end && <button className="btn btn-danger next-btn" onClick={()=>arbitrage()}>
                {isArbitrage ? 'Searching...' : 'Arbitrage'}
              </button>}
              {end && <button className="btn btn-success next-btn" onClick={()=>reset()}>
                Back
              </button>}
              <div className="mt-5 font-result">
                Result per second:
              </div>
              <div className="command font-command">
                {commands.map((item:string, index:number)=>{
                  return (<div key={index} className={item.indexOf('success')>-1?'font-success':''} >{item}</div>)  
                }
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FlashLoanBot
