export const fetchRequest = async ( username, email, password) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            }),
        });
        const data = await response.json();
        return data.user.username;
        // stateChange(data.user.username);
        // console.log(data);
    } catch (error) {
        console.log(error)
    }
};
export const LoginRequest = async ( username, password) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}login`, {
            method: "GET",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });
        if (response.status === 200) {
            const data = await response.json();
            return username
            // setUser(data.user.username);
            // console.log(data);
        }
        
    } catch (error) {
        console.log(error)
    }
};
