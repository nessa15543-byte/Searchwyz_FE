const baseUrl = "http://localhost:5000/api"
const Routes = {
    register : "/auth/register",
    login: "/auth/login",
    refresh: "/auth/refresh",
    getme: "/auth/getme",
    logout: "/auth/logout",
    forgotPassword:"/auth/forgotPassword",
    verifyOtp: "auth/verifyOtp",
    resetPassword:"auth/resetPassword",
    logoutAll: "auth/logoutAll",
}
async function register(data) {
    try{
        if (!data) throw new error ("user data is required");
        const res = await fetch(`${baseUrl}${Routes.register}`,{
            method: "POST",
            headers:{
                'content- type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const result = await res.json();
        if(!res.ok){
            throw new error(result.error);
        }
    }catch(error){
        return {error: error.message}
    }
    
}
async function login(data) {
    try{
        if(!data) throw new error('user data is required')
        const res = await fetch(`${baseUrl}${Routes.login}`,{
            method:"POST",
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(data),
    })
    const result =await res.json();
    if(!res.ok){
        throw new Error(result.error)
    }
    }catch(error){
        return {error: error.message}
    }
    
}
async function logout() {
    try{
        const res = await fetch(`${baseUrl}${Routes.logout}`,{
            method: "POST"
        })
    }catch(error){
        return {error: error.message}
    }
}
