import react ,{useEffect, useState} from 'react'
import './App.css'
import { API } from 'aws-amplify';
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';
import {AiOutlineSearch} from 'react-icons/ai';
const orderArray=[];
function App() {    
    // const [orderNum,setOrderNum]=useState(null);
    // const [orderDesc,setOrderDesc]=useState(null);
    // const [usermail,setUserMail]=useState("takchirag123@gmail.com")
    // const [orders,setOrders]=useState([]);

    // const [search,setSearch]=useState("");
    // const [searchResult,setSearchResult]=useState([]);    



    const date = new Date();
    const currentDate=date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
    const currentTime=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    // const orderDetails = {
    //     orderNum: orderNum,
    //     description: orderDesc,
    //     // orderDate:currentDate,
    //     // orderTime:currentime
    // };
    // const userorderDetails={
    //     userID:usermail,
    //     orderID:orderNum
    // }

    // useEffect(()=>{
    //     getData();
    //     console.log(currentDate,currentTime);
    // },[])   
     
    // const addOrder=async()=>{
    //     try{
    //         if(orderNum==null || orderDesc==null){
    //             alert("Please Enter all fields");
    //         }else{
    //             const orderdata=await API.graphql({ query: mutations.createOrder, variables: {input: orderDetails}});
    //             const bothdata=await API.graphql({ query: mutations.createUserOrderMapping, variables: {input: userorderDetails}});
    //             alert("Data Added");
    //         }
    //     } catch (error) {
    //         console.log("Error is ",error);
    //     }
    // }
    // const getData=async()=>{
    //     try {
    //         const list=await API.graphql({query:queries.getUser, variables: { email: 'takchirag828@gmail.com' }});
    //         const listorder=list.data.getUser.orders.items;
    //         for(var i=0;i<listorder.length;i++){
    //             const relatedorder=await API.graphql({query:queries.getOrder,variables:{orderNum:listorder[i].orderID}})
    //             const orderDetails=relatedorder.data.getOrder
    //             console.log(orderDetails);
    //             orderArray.push(orderDetails);
    //             // setOrders([...orders,orders.push(orderDetails)]);
    //         }
    //         setOrders(orderArray);
    //         console.log("Order State is ",orders);
    //     } catch (error) {
    //         console.log("Error is ",error);
    //     }
    // }
    // const searchData=(searchItem)=>{
    //     // console.log(search)
    //     setSearch(searchItem);
    //     // console.log(search);
    //     if(search!=""){
    //         const searchedOrders=orders.filter((filteredOrders)=>{
    //             return Object.values(filteredOrders)
    //             .join(" ")
    //             .toLowerCase()
    //             .includes(searchItem.toLowerCase());
    //         });
    //         setSearchResult(searchedOrders);
    //         // console.log(searchResult);
    //     }else{
    //         setSearchResult(orders);
    //         // console.log(searchResult);
    //     }

    // }

    const [name,setName]=useState(null);
    const [email,setEmail]=useState(null);
    const [mail,setMail]=useState(null);
    const [deletionMail,setDeletionMail]=useState(null);
    const [updatedName,setUpdateName]=useState();
    const userDetails = {
        email:email,
        name:name,
        isAdmin:false
    };
    // function for adding order
    const addUser=async()=>{
        try {
            const userData = await API.graphql({query: mutations.createUser, variables: {input: userDetails}})
            console.log("Response is ",userData.data.createUser);
        } catch (error) {
            console.log("error is ",error);
        }
    }
    // function for query the list of data
    const listUsers=async()=>{
        try {
            const list=await API.graphql({query:queries.listUsers});
            console.log("List is ",list.data.listUsers.items);
        } catch (error) {
            console.log("error is ",error);
        }
    }
    // function for getting selected order
    const getSelectedUser=async()=>{
        try {
            const userData=await API.graphql({query:queries.getUser,variables:{email:mail}});
            console.log(userData.data.getUser);
        } catch (error) {
            console.log("error is ",error);
        }
    }

    // function for deleting user
    const deletedMail={
        email:deletionMail
    }
    const deleteUser=async()=>{
        
        try {
            const deletedUser=await API.graphql({query:mutations.deleteUser,variables:{input:deletedMail}});
            console.log("Deleted User is ",deletedUser.data.deleteUser);
        } catch (error) {
            console.log("Error is ",error);
        }
    }

    // function for update the user
    const updatedData={
        email:email,
        name:updatedName,
        isAdmin:true
    }
    const updateUser=async()=>{
        try {
            const updatedUser=await API.graphql({query:mutations.updateUser,variables:{input:updatedData}});
            console.log("Update user is ",updatedUser.data.updateUser);
        } catch (error) {
            console.log("Error is ",error);
        }
    }
    return(
        <div className='App'>
            <h1>Fileds</h1>
            <input type='text' placeholder='Enter Name' onChange={(name)=>setName(name.target.value)} />
            <input type='text' placeholder='Enter Email' onChange={(email)=>setEmail(email.target.value)} />
            <button onClick={()=>addUser()}>Add Data</button>
            <button onClick={()=>listUsers()}>Get Data</button>
            <input type='text' placeholder='Enter Email for selected user' onChange={(usermail)=>setMail(usermail.target.value)} />
            <button onClick={()=>getSelectedUser()}>Get selected Data</button>
            <input type='text' placeholder='Enter Email for deleting the user' onChange={(deletionMail)=>setDeletionMail(deletionMail.target.value)} />
            <button onClick={()=>deleteUser()}>Delete user</button>
            <input type='text' placeholder='Enter Email for updateing the user' onChange={(email)=>setEmail(email.target.value)} />
            <input type='text' placeholder='Enter update name' onChange={(updatedName)=>setUpdateName(updatedName.target.value)} />
            <button onClick={()=>updateUser()}>Update user</button>
            {/* <div >
                {
                    searchResult.length>0 ?
                    searchResult.map((items,index) => (
                        <div key={index} className="cardBody" >
                            <div className='orderDiv '>
                                <p style={{fontWeight:"bold"}}>{items.orderNum} </p>
                                <p style={{fontWeight:"bold"}}>Time</p>
                            </div> 
                            <div className='orderDiv '>
                                <p style={{fontWeight:"bold"}}>{items.description} </p>
                                <p style={{fontWeight:"bold"}}>Date</p>
                            </div>  
                        </div>
                    )) :
                    orders.map((items,index) => (
                        <div key={index} className="cardBody" >
                            <div className='orderDiv '>
                                <p style={{fontWeight:"bold"}}>{items.orderNum} </p>
                                <p style={{fontWeight:"bold"}}>Time</p>
                            </div> 
                            <div className='orderDiv '>
                                <p style={{fontWeight:"bold"}}>{items.description} </p>
                                <p style={{fontWeight:"bold"}}>Date</p>
                            </div>  
                        </div>
                    ))
                }
            </div> */}
            {/* <p onClick={()=>getData()} >get data</p>
            <p onClick={()=>addOrder()} >add order</p> */}
            {/* <div className="app2">
                <div className='input-element-wrapper'>
                    <input placeholder="Enter Search" className="InputBox" 
                        type="text"
                        
                    />
                    <button className='passwordButton'  >
                        <AiOutlineSearch/>
                    </button>
                </div>
            </div> */}
        </div>
    )
}

export default App;
