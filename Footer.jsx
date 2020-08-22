import React from 'react';

function Footer () {

    const currentYear = new Date().getFullYear()

    return <div>
<footer>
    <p> Copyright © {currentYear} @Zaid </p>
</footer>

    </div>

}
export default Footer;