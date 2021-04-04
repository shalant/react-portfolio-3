import React from "react";
import resume from "../assets/images/DouglasRosenbergResume1.pdf";
import './components.css';

let URL='https://docs.google.com/document/d/1G1z3cVN6IjHW4M2zVytsoE6g_-fWETb0qTSSZqI05Tk/edit?usp=sharing';

class Resume extends React.Component {
  render() {
   return (
     <>
    <a className='resume' href={URL}>Click Here for Google Docs</a>
    {/* <object data={resume} type="application/pdf" width="100%" height="800px"> 
        <p>It appears you don't have a PDF plugin for this browser.
        No biggie... you can <a href={resume}>click here to
          download the PDF file.</a></p>  
    </object> */}
    </>
   );
  };
 }

 export default Resume;