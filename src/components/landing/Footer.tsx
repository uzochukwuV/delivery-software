

function Footer() {
  return (
    <div className=" max-w-[1400px] md:py-16 mx-auto sm:px-10 md:px-16">
      <div className=" h-[150px] px-6 md:px-0 border-b flex flex-col justify-center gap-4">
        <h2>Logo</h2>
       <div>
       <div className="text-[9px] font-semibold logo-bottom mb-2">
          ISO 9001: 2015, ISO 27001: 2013 Certified Company
        </div>
        <div className="text-[9px] font-semibold logo-bottom">
          CIN: L63090DL2011PLC221234
        </div>
       </div>

      </div>
      <div  className="copyright px-6 md:px-0 py-6 border-t"><div  className="text-black font-bold text-sm mb-1 leading-tight">
          Information Security Policy
        </div> 
        <div  className="text-sm leading-relaxed">
          Delhivery is committed to safeguarding the confidentiality,
          integrity and availability of all physical and electronic
          information assets of the organization.<br  />
          We ensure that the regulatory, operational and contractual
          requirements are fulfilled.
        </div> <div className="text-black font-bold text-sm mb-1 leading-tight mt-4">
          Disclaimer
        </div> <div className="text-sm leading-relaxed" >
          Operational metrics listed are as of August 04, 2023
        </div></div>
    </div>
  );
}

export default Footer;
