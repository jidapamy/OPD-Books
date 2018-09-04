const loopCheckTransactionComplete = () => {
    let check = false
    while (check === false) {
      check = await contract.haveCitizenId(web3.fromAscii(patient.citizenId));
      console.log("loop", check);
      if (check) {
        console.log("SUCCESS")
        return { status: true, message: "SUCCESS" };
      }
    }
}