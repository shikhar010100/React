import { ChangeEvent, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import '../styles/shipping.scss'
import { useNavigate } from "react-router-dom";

const Shipping = () => {
    const [shippingInfo, setShippingInfo] = useState({
        address: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
    })
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setShippingInfo((prev)=>({...prev,[e.target.name]:e.target.value}));
    }
    const navigate = useNavigate();
    return (
        <div className="shipping">
            <button className="backButton" onClick={()=>navigate("/cart")}><BiArrowBack /></button>
            <form action="">
                <p>SHIPPING ADDRESS</p>
                <div>
                    <input type="text" required name="address" placeholder="Address" value={shippingInfo.address} onChange={changeHandler} />
                    <input type="text" required name="city" placeholder="City" value={shippingInfo.city} onChange={changeHandler} />
                    <input type="text" required name="state" placeholder="State" value={shippingInfo.state} onChange={changeHandler} />
                    <select name="" id="" required >
                        <option value="">Choose Country</option>
                        <option value="india">India</option>
                    </select>
                    <input type="text" required name="pincode" placeholder="Pin Code" value={shippingInfo.pincode} onChange={changeHandler} />
                    <button>PAY NOW</button>
                </div>
            </form>
        </div>
    )
}
export default Shipping;