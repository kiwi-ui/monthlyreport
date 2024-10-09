import React from 'react'
import { FaHandsHelping } from "react-icons/fa";
import { FaUsersViewfinder } from "react-icons/fa6";
import style from "./style.module.css"
const UndoneTicket = () => {
  return (
    <section className={`vh-100 py-5 text-center d-flex flex-column align-items-center justify-content-center ${style.bgPrimary}`}>
        <div className="container text-center">
            <div className="py-3 d-flex flex-row w-100 position-relative justify-content-center fw-semibold">
                <div>
                    <div className="bg-light px-5 py-3 rounded-circle"  style={{marginTop:'-6rem'}}>
                        {/* <p>Request</p>
                        <p>25</p> */}
                        <FaHandsHelping className={` ${style.textPrimary}`} style={{fontSize:'4rem'}} />
                        <p className="m-0" style={{fontSize:'0.8rem'}}>Request</p>
                        <p className='m-0'>25</p>
                    </div>
                </div>
                
                <div>
                    <div className="bg-info-subtle rounded-circle" style={{padding:'6rem'}}>
                        Tickets
                    </div>
                </div>

                <div className='d-flex  align-items-end'>
                    <div className="bg-light px-5 py-3 rounded-circle"  style={{marginBottom:'-6rem'}}>
                        {/* <p>Request</p>
                        <p>25</p> */}
                        <FaUsersViewfinder className={` ${style.textPrimary}`} style={{fontSize:'4rem'}} />
                        <p className="m-0" style={{fontSize:'0.8rem'}}>Request</p>
                        <p className='m-0'>25</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default UndoneTicket