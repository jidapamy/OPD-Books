export const UserProvider = {
    user : undefined,
    setUserLogin : (user) => {
        this.user = user
        console.log('setUserLogin', this.user)
    },
    getUserLogin : () => {
        console.log('getUserLogin' , this.user)
        return this.user
    }
}