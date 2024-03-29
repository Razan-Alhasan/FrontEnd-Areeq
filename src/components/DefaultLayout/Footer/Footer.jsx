import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaGithub, FaLinkedin, FaHome } from 'react-icons/fa';
import { AiOutlineMail } from "react-icons/ai";
import { HiPhone } from "react-icons/hi";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import './Footer.css'

function Footer() {
  return (
    <MDBFooter className='text-center text-lg-start text-muted footer' id='width' bgColor='light' style={{ width: '100%' }}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <FaFacebookF style={{ color: 'var(--main-color)' }} />
          </a>
          <a href='' className='me-4 text-reset'>
            <FaTwitter style={{ color: 'var(--main-color)' }} />
          </a>
          <a href='' className='me-4 text-reset'>
            <FaGoogle style={{ color: 'var(--main-color)' }} />
          </a>
          <a href='' className='me-4 text-reset'>
            <FaInstagram style={{ color: 'var(--main-color)' }} />
          </a>
          <a href='' className='me-4 text-reset'>
            <FaLinkedin style={{ color: 'var(--main-color)' }} />
          </a>
          <a href='' className='me-4 text-reset'>
            <FaGithub style={{ color: 'var(--main-color)' }} />
          </a>
        </div>
      </section>

      <section >
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h2 className=' fw-bold mb-4 '>
                <MDBIcon icon="gem" className="me-3" />
                Areeq
              </h2>
              <p>
                Here you can keep up to date with all Palestinian handicrafts and products at any time and place
              </p>
            </MDBCol>



            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h5 className=' fw-bold mb-4 '>Useful links</h5>
              <div className='padding'>
                <p>
                  <a href='' className='text-reset'>
                    Home
                  </a>
                </p>
                <p>
                  <a href='' className='text-reset'>
                    Settings
                  </a>
                </p>
                <p>
                  <a href='' className='text-reset'>
                    Search
                  </a>
                </p>
                <p>
                  <a href='' className='text-reset'>
                    Help
                  </a>
                </p></div>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h5 className=' fw-bold mb-4'>Contact</h5>
              <p>
                <FaHome className="me-3" />
                Palestine,Tulkarm
              </p>
              <p>
                <AiOutlineMail className="me-3" />
                areeq2023@gmail.com
              </p>
              <p>
                <HiPhone className="me-2" /> + 01 234 567 88
              </p>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.06)', color: 'var(--main-color)', fontSize: '20px' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://Areeq.com/'>
          Areeq.com
        </a>
      </div>
    </MDBFooter>
  );
}
export default Footer;
