import axios from 'axios';

export const login = async(email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post('http://18.184.124.193/api/v1/login', { email, password} );
            console.log(response.data);
        } catch(e) {
            console.log(e);
        }
        

    }
}