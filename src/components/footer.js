import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../routes';
import 'antd/dist/antd.css';
import StickyFooter from 'react-sticky-footer';
import '../css/footer.css';


const Footer = () => (
    <div className={"foot center"}>
        <StickyFooter>
            <Link className="links" to={ROUTES.CONTACT}>Contact us.</Link>
            <Link className="links" to={ROUTES.ABOUT}>About</Link>
            <p className={"copy"}>Copyright MHS Software Division</p>
        </StickyFooter>
    </div>
);
export default Footer;
