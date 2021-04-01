
import React from 'react';


const Footer = (props) => {

  return (
    <div>
<footer style={{ marginTop: "20vh"}} className="bg-light text-center text-lg-start">

  <div class="text-center p-3" style={{ backgroundColor: "#459599" }}>
  <a class="btn btn-outline-light btn-floating m-1" href="https://twitter.com/CurtSpiegelhal1" target="_blank" role="button"
        ><i class="fab fa-twitter"></i
      ></a>

      <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/curt-spiegelhalter/" target="_blank" role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>

      <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/CSpiegelhalter" target="_blank" role="button"
        ><i class="fab fa-github"></i
      ></a>
  </div>

</footer>
    </div>
  );
}

export default Footer;