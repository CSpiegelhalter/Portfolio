
import React from 'react';


const Footer = (props) => {

  return (
    <div>
<footer style={{ marginTop: "20vh"}} className="bg-light text-center text-lg-start">

  <div class="text-center p-3" style={{ backgroundColor: "#393a3f" }}>
  <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-twitter"></i
      ></a>

      <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/curt-spiegelhalter/" role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>

      <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/CSpiegelhalter" role="button"
        ><i class="fab fa-github"></i
      ></a>
  </div>

</footer>
    </div>
  );
}

export default Footer;