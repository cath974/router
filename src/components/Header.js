import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => (
 
     <ul>
       <li><Link to = "/">Home</Link></li>
       <li><Link to = "/componentdidmount">ComponentDidMount example</Link></li>
       <li><Link to = "/componentdidupdate">ComponentDidUpdate example</Link></li>
       <li><Link to = "/componentwillunmount">ComponentWillUnmount example</Link></li>
       <li><Link to = "/shouldcomponentupdate">ShouldComponentUpdate example</Link></li>
       <li><Link to = "/getderivedstatefromprops">GetDerivedStateFromProps example</Link></li>
     </ul>

  
  );


export default Header;
