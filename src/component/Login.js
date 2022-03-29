import React,{useState, useReducer} from "react";
import { Utils } from "./utils";


    function loginReducer(state, action){

        switch(action.type){


            case "login": {
                return{
                    ...state,
                    isLoading: true,
                    error: ""
                }
            }

            
            case "success":{
                return{
                    ...state,
                    isLoggedIn: true,
                }
            }
          
            case "error":{
                return{
                    ...state,
                    error: "Incorrect username or password",
                    isLoading: false,
                    username: '',
                    password: ''
                }
            }


            case "logout":{
                return{
                    ...state,
                    isLoggedIn: false,
                }
            }

            case "field":{
                return{
                    ...state,
                    [action.field]: action.value,
                }
            }



            default: break;
        }

        return state;
    }


   const initialState = {
        username:"",
        password:"",
        isLoading:false,
        error: "",
        isLoggedIn:false
    }

function Login (){

    const [state, dispatch] = useReducer(loginReducer, initialState)

 const {    username,
            password,

            isLoading,
            error,

            isLoggedIn} = state

     
    const onSubmit = async e =>{
        
        e.preventDefault()
        dispatch({type:'login'})

        try{
            await Utils({username, password})

            dispatch({type: 'success'})
          
        } catch(error){

            dispatch({type: 'error'})

        }

    }


    return(

        <div className="App">
            <div className="login-container">
                {isLoggedIn ? (
                <>
                <p>Hello {username}</p>
                <button onClick={()=>dispatch({type: 'logout'})} className="submit">Log out</button>
                </>):(


               
                <form className="form" onSubmit={onSubmit}>
                {error && <p className="error">{error}</p>}
                    <p>Please Login!</p>

                    {/* input field for the username */}

                    <input 
                            type="email" 
                            placeholder="email" 
                            value={username} 
                            onChange={(e)=> dispatch({type: 'field', field: 'username', value: e.target.value})}
                    />
 
                        {/* input field for the password  */}

                    <input 
                            type="password" 
                            placeholder="password" 
                            autoComplete="new-password" 
                            value={password} 
                            onChange={(e)=>dispatch({type: 'field', field: 'password', value: e.target.value})}
                     />
                    <button className="submit" type="submit" disabled={isLoading}>{isLoading ?"Logging in.." : "Login"}</button>
                </form>
                 )}


            </div>
        </div>

    )
}

export default Login