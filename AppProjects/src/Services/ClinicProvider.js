export const ClinicProvider = {
    clinic: undefined,
    rememberClinic: false,
    setClinic : (clinic) => {
        this.clinic = clinic
    },
    getClinic: () => {
        return this.clinic
    },
    setRememberClinic: (rememberClinic) => {
        this.rememberClinic = rememberClinic
    },
    getRememberClinic: (rememberClinic) => {
        return this.rememberClinic 
    }
}