import React, { useEffect, useState } from 'react'
import Base from '../components/Base'
import { CartState } from '../context/Context'
import { AiFillDelete } from "react-icons/ai";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { myAxios } from '../services/helper';

const Cart = () => {
    let num = 0;
    const { state, dispatch } = CartState();
    

    let Token = JSON.parse(localStorage.getItem("data"));
    const headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + Token.token,
    };
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {

                let res = (await myAxios.get(`apiCart/getAllScrapMaterial/${Token.userDto.id}`, { headers }))
                console.log(res.data);
                
                dispatch({
                    type: "GET_ALL_FROM_CART_DATABASE",
                    payload: res.data
                })
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }

        fetchData();
    }, [dispatch])


    console.log(state.cart)

    useEffect(()=>{
       handleClick()
    },[dispatch])
    
    const handleClick = async (prod_id) => {
        setLoading(true);
        try {
            await myAxios.delete(`apiCart/deleteScrapMaterialFormCart/${prod_id}`, { headers })
            let res = (await myAxios.get(`apiCart/getAllScrapMaterial/${Token.userDto.id}`, { headers }))
            console.log(res.data);
            dispatch({
                type: "REMOVE_FROM_CART",
                payload: res.data,
            })
        } catch (error) {
            console.error(error.message);
        }

        setLoading(false);
    }

    console.log(state.cart);
    return (
        <>

            <Base></Base>
            <div className="container mt-5 mb-5">
                <h3 className="d-flex justify-content-center fg-default-1">Cart</h3>
            </div>
            {
                state.cart &&
                    // pratik &&
                    state.cart.length === 0 ?
                    //pratik.length===0?
                    (
                        <div className="container col-4">
                            <Link to="/scrapMaterial">
                                <div className="form-group d-grid mt-2 me-2 ms-2 mb-5">
                                    <Button className="btn " >
                                        Please Add Scrap-Material
                                    </Button>
                                </div>
                            </Link>
                        </div>
                    ) :

                    (
                        <div className="container col-6">
                            <table className="table table-bordered fs-4" >
                                <thead >
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                {state.cart.map(prod => (
                                    //pratik.map(prod => (

                                        <tbody key={prod.id}>
                                            <tr>
                                                <th scope="row">{prod.id}</th>
                                                <td>{prod.name}</td>
                                                <td>{prod.price}</td>
                                                <td> <AiFillDelete
                                                    fontSize="20px"
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() =>
                                                        //dispatch({
                                                        //  type: "REMOVE_FROM_CART",
                                                        //  payload: prod,
                                                        // })
                                                        handleClick(prod.id)
                                                    }

                                                />
                                                </td>
                                            </tr>

                                        </tbody>
                                    ))}
                            </table>
                            <div className="form-group d-grid mt-2 me-2 ms-2 mb-5">
                                <Button>Process To Checkout</Button>
                            </div>
                        </div>
                    )}

        </>

    )
}

export default Cart