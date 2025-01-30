import React from 'react'
import "./Aboutus.css"
import { Container } from 'react-bootstrap'
import Dasbord from "../../components/Dasbord/Dasbord";
import Form from "../../components/Form/Form"
import Testimonials from "../../components/Testimonials/testimonials";
import AdvantagesSection from "../AdvantagesSection/AdvantagesSection";


function Aboutus() {
    return (
        <div className='Aboutus1' >
            <div className='bggg'>

                {/* <h1 className='Aboutus1text text-white'>Abou Us</h1> */}

            </div>
            <div >

                <h1 className='Aboutus1text'>Abou Us</h1>
            </div>

            <div>
                <Dasbord />
                <AdvantagesSection />
                <Form />
                <Testimonials />


            </div>










        </div>
    )
}

export default Aboutus