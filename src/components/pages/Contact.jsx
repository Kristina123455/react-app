import React, { Component } from 'react';
//import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';

class Contact extends Component{

    
    render(){
        function sendEmail(e) {
            e.preventDefault();
            emailjs.sendForm('service_z6qe5l1', 'template_2vfcbq4', e.target, '-1eq-OnVn0iswyUDn')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset();
        }
        return(
            <section className="my-5 py-5">
                <div className="container">
                    <div className="well well-sm">
                        <h3><strong>Naša lokacija</strong></h3>
                    </div>
                
                <div className="row">
                    
                    <div className="col-md-5">
                        <h4><strong>Kontaktirajte nas</strong></h4>
                        <form onSubmit={sendEmail}>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Ime i prezime" name="name"/>
                            </div><br></br>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email" name="email"/>
                            </div><br></br>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Tema" name="subject"/>
                            </div><br></br>
                            <textarea className="form-control" cols="30" rows="3" placeholder="Kako Vam možemo pomoći?" name="message"/>
                            <br></br>
                            <input type="submit" className="btn btn-outline-primary text-uppercase" value="Pošaljite">
                               
                            </input>
                        </form>
                    </div>
                    <div className="col-md-7">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d183658.19146240762!2d19.463357455436878!3d44.007769769219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4759b14fc337247b%3A0x5d8bd0d280f7eaba!2sMunicipality%20of%20Bajina%20Basta!5e0!3m2!1sen!2srs!4v1663749376071!5m2!1sen!2srs"   style={{
                        border: '0',
                        width: '100%',
                        height: '350px',
                        frameborder: '0'
                    }} allowFullScreen 
                    />
                    </div>
                    </div>
                </div>
            </section>
            
        );

        
        }

        
}



export default Contact;