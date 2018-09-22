const queuesPatient = [
  {
    id: "1234567890123",
    patientName: "Mrs. Ridwan Dunlap"
  },
  {
    id: "1234567890101",
    patientName: "Miss. Aleeza Sharp"
  },
  {
    id: "1234567890107",
    patientName: "Mr. Eloisa Bernal"
  }
]

const queuesMdr = [
  {
    id: "1",
    patientName: "Miss. Aleeza Sharp"
  },
  {
    id: "2",
    patientName: "Miss. Aleeza Sharp"
  },
  {
    id: "3",
    patientName: "Miss. Aleeza Sharp"
  }
]


export const addQueue = (id,name) => {
  if (queuesPatient.length <= 10){
      queuesPatient.push({
        id: id,
        patientName: name
      })
      return true
  }else{
    return false
  }
}

// type == "patient" , "mdr"
export const getQueue = (type) => {
  let arr = type === "patient" ? queuesPatient : queuesMdr
  let queues = arr.map((q, i) => {
    let qShow = "";
    let index = i + 1
    if (index > 0 && index < 10) {
      qShow = "00" + index;
    } else if (index > 9 && index < 100) {
      qShow = "0" + index;
    } else {
      qShow = index;
    }
    return {
      index: i,
      queueId: qShow,
      id: q.id,
      patientName: q.patientName
    }
  })
  return queues;
}












// import {defaultAccount, contract, web3 } from "./../Lib/Web3";

// export const addQueue = ( empPosition, hn , citizenId, title, firstname, lastname, statusQueue, visitNumber ) => {
//   contract.addQueue(
//     empPosition,
//     web3.fromAscii(hn), 
//     web3.fromAscii(citizenId),
//     web3.fromAscii(title),
//     web3.fromAscii(firstname),
//     web3.fromAscii(lastname),
//     statusQueue,
//     web3.fromAscii(visitNumber),
//     defaultAccount
//   );
// };

// export const getQueues = (empPosition) => {
//   let qAmount = 0;
//   let qList = [];
//   switch (empPosition) {
//     case 2: // พยาบาล
//       qAmount = contract.countQueuesForNurses().toString();
//       break;
//     case 3: // หมอ
//       qAmount = contract.countQueuesForDocters().toString();
//       break;
//     case 4: // เภสัธ
//       qAmount = contract.countQueuesForPharmacys().toString();
//       break;
//   }
//   if(qAmount != 0){
//     for(let i=0;i<qAmount;i++){
//         let tmp = contract.getQueues(i, empPosition);
//         let status = contract.getStatusQueues(i, empPosition);
//         let queueId = +tmp[0].toString() + 1;
//         let qShow = ''
//         if(queueId>0 && queueId<10){
//           qShow = "00" + queueId;
//         }else if (queueId > 9 && queueId<100) {
//           qShow = "0" + queueId;
//         }else{
//           qShow = queueId;
//         }
//         let objQ = {
//             key:i,
//             queueId : qShow,
//             hospitalNumber : web3.toAscii(tmp[1]),
//             citizenId : web3.toAscii(tmp[2]),
//             title: web3.toAscii(tmp[3]),
//             firstname: web3.toAscii(tmp[4]),
//             lastname: web3.toAscii(tmp[5]),
//             visitNumber: web3.toAscii(tmp[6]),
//             status : status
//         }
//         if (status) {
//             qList.push(objQ);
//         }
//     }
//   }
//   return qList;
// };

// export const updateStatusQueue = ( empPosition, index, statusQueue ) => {
//     contract.updateStatusQueue(empPosition, +index, statusQueue, defaultAccount);
//     return true;
// }

// export const removeQueues = () => {
//     contract.removeQueues(defaultAccount);
// }

// export const doctorQLength = () => {
//   let length = contract.countQueuesForDocters().toString();
//   return +length;
// }