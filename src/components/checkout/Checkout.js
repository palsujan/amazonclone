import React, { useEffect, useState } from 'react';
import Styles from './Checkout.module.scss';
import commerce from '../../lib/commerce';

const Checkout = ({cart}) => {
    const [generatedToken, setToken] = useState();
    const [countriesList, setCountriesList] = useState([])
    const [subdivisionList, setsubdivisionList] = useState([])
    const [shippingOptions, setShippingOptions] = useState([])

    const [country, setCountry] = useState(null)
    const [subdivision, setSubdivision] = useState(null)
    const [shipping, setShipping] = useState([])
   

    const getShippingCountry = async(tokenID)=>{
        const {countries} = await commerce.services.localeListShippingCountries(tokenID);
        setCountriesList(Object.entries(countries))
    }
    const getShippingSubdivision = async(country)=>{
        const {subdivisions} = await commerce.services.localeListSubdivisions(country);
        setsubdivisionList(Object.entries(subdivisions));
        setSubdivision(Object.keys(subdivisions))
        
    }

    const generateToken = async (cartId)=>{
        const token = await commerce.checkout.generateToken(cartId, { type: 'cart' });
        // console.log("Token", token)
        setToken()
        getShippingCountry(token.id);
    }
    const getShippingOptions = async(tokenID, c, s)=>{
         const response = await commerce.checkout.getShippingOptions(tokenID, {
            country: c,
            region: s,
          })
          setShipping(response[0].id);
          setShippingOptions(response);
    }
    useEffect(()=>{
        generateToken(cart?.id);
    },[cart])

    useEffect(()=>{
        if(country){getShippingSubdivision(country)}
    },[country])

    useEffect(()=>{
        if(subdivision){getShippingOptions(generatedToken, country, subdivision)}
    },[subdivision])

  return (
    <div className={Styles.Checkout_wrap}>
        <h2>Shipping Details</h2>
        <form>
            <div className={Styles.chakoutForm}>
                <div className={Styles.Checkout_column}>
                        <label>First Name*</label>
                        <input required name='Firstname'/>
                </div>
                <div className={Styles.Checkout_column}>
                        <label>Last Name*</label>
                        <input required name='Lastname'/>
                </div>
                <div className={Styles.Checkout_column}>
                        <label>Address*</label>
                        <input required name='Address'/>
                </div>
                <div className={Styles.Checkout_column}>
                        <label>Email*</label>
                        <input required name='Email'/>
                </div>
                <div className={Styles.Checkout_column}>
                        <label>City*</label>
                        <input required name='City'/>
                </div>
                <div className={Styles.Checkout_column}>
                        <label>PinCode*</label>
                        <input required name='PinCode'/>
                </div>
                <div className={Styles.Checkout_column}>
                        <label>Shipping Country*</label>
                        <select name='country' value={country} onChange={e=>setCountry(e.target.value)}>
                            {
                                countriesList?.map((country)=>{
                                    return <option value={country[0]}>{country[1]}</option>
                                })
                            }
                            
                        </select>
                </div>
                <div className={Styles.Checkout_column}>
                        <label>Shipping Subdivision*</label>
                        <select name='subdivision' value={subdivision} onChange={e=>setSubdivision(e.target.value)}>
                        {
                                subdivisionList?.map((subdivision)=>{
                                    return <option value={subdivision[0]}>{subdivision[1]}</option>
                                })
                            }
                        </select>
                </div>
                <div className={Styles.Checkout_column}>
                        <label>Shipping Option*</label>
                        <select name='option' value={shipping} onChange={e=>setShipping(e.target.value)}>
                        {
                                shippingOptions?.map((item)=>{
                                    return <option value={item.id}>{item.description} {item.price.formatted_with_symbol}</option>
                                })
                            }
                        </select>
                </div>
                <div className={Styles.Checkout_column}>
                        <label>&nbsp;</label>
                        <button>Pay Now</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Checkout