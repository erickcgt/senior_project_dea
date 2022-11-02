import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function LearnPage() {

    const container = {
        display: "block",
        width: "70%", 
        marginLeft:"auto",
        marginRight:"auto",
        paddingTop: "50px"
              
    };

    const heading = {
        fontFamily:"Gluten",
        color:"#2613fe",
        fontSize:"40px",
        paddingBottom: "50px",
        textDecorationLine: "underline"
        
    };

    const tabs = {
        fontFamily:"Gluten",
        color:"#2613fe",     
               
    };

    const tab = {

        padding:"30px",       
        boxShadow:"0 3px 10px rgba(0,0,0,.3)",
        fontFamily:"Gluten",       
        
    };

    const list = {
        listStyleType:"circle",
        listStylePosition:"inside",
        display: "inline-block"
    };

   

  return (
    <div style={container}>
      <h4 style={heading}>Secure Code Concepts</h4>
      <Tabs fill justify defaultActiveKey="first" style={tabs} >
        <Tab eventKey="first" title="Cross-Site Scripting" style={tab} >
         Cross-site scripting (XSS) is when an attacker inserts malicious scripts, usually JavaScript, into a web application. When the browser sees the script, it executes the code. This type of attack is one of the most common vulnerabilities. But, most of the time the vulnerabilities are hidden like through a link, an e-mail, and so on. The three types of cross-site scripting are as follows:
         <div style={{paddingTop:"15px", width:"70%", alignItems: "center", marginLeft: "auto", marginRight: "auto"}}><ul style={list}>
            <li>Reflected: Malicious code that is embedded in the HTTP request is "reflected" back to the user. </li><div style={{paddingBottom:"10px"}}></div>
            <li>Stored: Web application stores the malicious code in a server or database and passes it on to other users.</li><div style={{paddingBottom:"10px"}}></div>
            <li>Document Object Model (DOM)-based: Triggered by JavaScript events and runs immediately. The attack is embedded into the existing webpage. </li><div style={{paddingBottom:"10px"}}></div>
            </ul> 
            </div> Sourced from CodePath, OWASP, and Veracode.
        </Tab>
        <Tab eventKey="second" title="SQL Injection" style={tab} >
          2nd tab content
        </Tab>
        <Tab eventKey="third" title="Malicious Input" style={tab} >
          3rd tab content
        </Tab>
        <Tab eventKey="fourth" title="User Authentication" style={tab} >
          4th tab content
        </Tab>
      </Tabs>
    </div>
  );
}

export default LearnPage;