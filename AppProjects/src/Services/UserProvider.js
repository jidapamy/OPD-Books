export const UserProvider = {
    user : undefined,
    setUserLogin : (user) => {
        this.user = user
    },
    getUserLogin : () => {
        return this.user
    }
}