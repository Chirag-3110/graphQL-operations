import react ,{useEffect, useState} from 'react'
import './App.css'
import { API } from 'aws-amplify';
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';
const orderArray=[];
function App() {    
    const [orderNum,setOrderNum]=useState(null);
    const [orderDesc,setOrderDesc]=useState(null);
    const [usermail,setUserMail]=useState("takchirag123@gmail.com")
    const [orders,setOrders]=useState([]);
    const date = new Date();
    const currentDate=date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
    const currentTime=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    const orderDetails = {
        orderNum: orderNum,
        description: orderDesc,
        // orderDate:currentDate,
        // orderTime:currentime
    };
    const userorderDetails={
        userID:usermail,
        orderID:orderNum
    }

    useEffect(()=>{
        getData();
        console.log(currentDate,currentTime);
    },[])    
    const addOrder=async()=>{
        try{
            if(orderNum==null || orderDesc==null){
                alert("Please Enter all fields");
            }else{
                const orderdata=await API.graphql({ query: mutations.createOrder, variables: {input: orderDetails}});
                const bothdata=await API.graphql({ query: mutations.createUserOrderMapping, variables: {input: userorderDetails}});
                alert("Data Added");
            }
        } catch (error) {
            console.log("Error is ",error);
        }
    }
    const getData=async()=>{
        try {
            const list=await API.graphql({query:queries.getUser, variables: { email: 'takchirag123@gmail.com' }});
            const listorder=list.data.getUser.orders.items;
            for(var i=0;i<listorder.length;i++){
                const relatedorder=await API.graphql({query:queries.getOrder,variables:{orderNum:listorder[i].orderID}})
                const orderDetails=relatedorder.data.getOrder
                console.log(orderDetails);
                orderArray.push(orderDetails);
                // setOrders([...orders,orders.push(orderDetails)]);
            }
            setOrders(orderArray);
            console.log("Order State is ",orders);
        } catch (error) {
            console.log("Error is ",error);
        }
    }
    return(
        <div>
            <h1>Fileds</h1>
            <input type='number' placeholder='Enter order number' onChange={(ordernum)=>setOrderNum(ordernum.target.value)} />
            <input type='text' placeholder='Enter description' onChange={(desc)=>setOrderDesc(desc.target.value)} />
            {/* <div > */}
                {orders.map((items,index) => (
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
                ))}
            {/* </div> */}
            <p onClick={()=>getData()} >get data</p>
            <p onClick={()=>addOrder()} >add order</p>
        </div>
    )
}

export default App;
