import React from 'react';
import styled from 'styled-components';

function Footer(){
    return (
      


        <FooterContainter className="main-footer ">
            
        <div className="footer-middle bg-primary text-black bg-light">
            <div className="container">
                <div className="row">
                    <div className="w-50 mx-auto">
                    <h4>Halloween organizacija</h4>
                    <p className="mx-auto">
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam quasi quam a voluptatibus corrupti voluptatem rem iusto illum dignissimos veritatis, impedit sed alias aspernatur numquam, quos deleniti. Iste, eligendi qui?
                 </p>
                    <ul className="list-unstyled"> 
                         <li><b>Kontaktirajte nas:</b></li>    
                         <li><b>Kontakt telefon: 063*******</b></li>  
                        <li> <b>Bajina Basta bb, 31250 Srbija</b></li> 
                         </ul>  
                    </div>    
                </div>
                <div className="footer-bottom bg-primary text-black bg-light">
                 <p className="w-50 mx-auto">
                 &copy;{new Date().getFullYear()} Halloween
                 </p>
                </div>
            </div>
         </div>
        </FooterContainter>
        
    );
}

export default Footer;


const FooterContainter = styled.footer`
    .footer-middle {
        
        padding-top: 2rem;
        
    }
    .footer-bottom {
        padding-top: 2rem;
        padding-bottom: 1rem;
    }
`;