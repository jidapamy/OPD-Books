import {defaultAccount, contract, web3 } from "./../Lib/Web3";

export const addQueue = ( empPosition, hn , citizenId, title, firstname, lastname, statusQueue, visitNumber ) => {
  console.log("addQ", empPosition);
  console.log(empPosition,hn, citizenId, title, firstname, lastname, statusQueue, visitNumber);
  console.log(
      empPosition, 
      web3.fromAscii(hn), 
      web3.fromAscii(citizenId), 
      web3.fromAscii(title), 
      web3.fromAscii(firstname), 
      web3.fromAscii(lastname),
      statusQueue, 
      web3.fromAscii(visitNumber)
    );
  contract.addQueue(
    empPosition,
    web3.fromAscii(hn), 
    web3.fromAscii(citizenId),
    web3.fromAscii(title),
    web3.fromAscii(firstname),
    web3.fromAscii(lastname),
    statusQueue,
    web3.fromAscii(visitNumber),
    defaultAccount
  );
};

export const getQueues = (empPosition) => {
  console.log("getQ", empPosition);
  let qAmount = 0;
  let qList = [];
  switch (empPosition) {
    case 2: // พยาบาล
      qAmount = contract.countQueuesForNurses().toString();
      break;
    case 3: // หมอ
      qAmount = contract.countQueuesForDocters().toString();
      break;
    case 4: // เภสัธ
      qAmount = contract.countQueuesForPharmacys().toString();
      break;
  }
  if(qAmount != 0){
    console.log('qAmount', qAmount);
    for(let i=0;i<qAmount;i++){
        let tmp = contract.getQueues(i, empPosition);
        let status = contract.getStatusQueues(i, empPosition);
        let objQ = {
            queueId : tmp[0].toString(),
            hospitalNumber : web3.toAscii(tmp[1]),
            citizenId : web3.toAscii(tmp[2]),
            title: web3.toAscii(tmp[3]),
            firstname: web3.toAscii(tmp[4]),
            lastname: web3.toAscii(tmp[5]),
            visitNumber: web3.toAscii(tmp[6]),
            status : status
        }
        if (status) {
            console.log(objQ);
            qList.push(objQ);
        }
    }
  }
  console.log("Q ", qList);
  return qList;
};

export const updateStatusQueue = ( empPosition, index, statusQueue ) => {
    console.log("updateQ", empPosition , +index, statusQueue );
    contract.updateStatusQueue(empPosition, +index, statusQueue);
    return getQueues(empPosition);
}
// function updateStatusQueue( uint _empPosition , uint _index ,bool _statusQueue ) public {