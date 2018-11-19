export const ClinicProvider = {
    clinic: 'SIT', // 'SIT' , 'KMUTT'
    rememberClinic: false,
    setClinic : (clinic) => {
        this.clinic = clinic
    },
    getClinic: () => {
        if(this.clinic == undefined){
            this.clinic = 'SIT'
        }
        console.log("this.clinic", this.clinic)
        return this.clinic
    },
    setRememberClinic: (rememberClinic) => {
        console.log("setRememberClinic", rememberClinic)
        this.rememberClinic = rememberClinic
    },
    getRememberClinic: () => {
        console.log("this.rememberClinic", this.rememberClinic)
        return this.rememberClinic 
    }
}