import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';





function LearnPage() {



  const container = {
    display: "block",
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "50px"

  };

  const heading = {
    fontFamily: "Gluten",
    color: "#2613fe",
    fontSize: "40px",
    paddingBottom: "50px",
    textDecorationLine: "underline"

  };

  const tabs = {
    fontFamily: "Gluten",
    color: "#2613fe"

  };

  const tab = {

    padding: "30px",
    boxShadow: "0 3px 10px rgba(0,0,0,.3)",
    fontFamily: "Gluten",
    marginBottom: "80px"

  };

  const list = {
    listStyleType: "circle",
    listStylePosition: "inside",
    display: "inline-block"
  };

  const spaceAfterQ = {
    paddingTop: "10px"
  }


  return (
    <div style={container}>
      <h4 style={heading}>Secure Code Concepts</h4>
      <Tabs fill justify defaultActiveKey="first" style={tabs}>
        <Tab eventKey="first" title="Cross-Site Scripting" style={tab}>
          Cross-site scripting (XSS) is when an attacker inserts malicious scripts, usually JavaScript, into a web application. When the browser sees the script, it executes the code. This type of attack is one of the most common vulnerabilities. But, most of the time the vulnerabilities are hidden like through a link or an e-mail. The three types of cross-site scripting are as follows:
          <div style={{ paddingTop: "15px", width: "70%", alignItems: "center", marginLeft: "auto", marginRight: "auto" }}><ul style={list}>
            <li>Reflected: Malicious code that is embedded in the HTTP request is "reflected" back to the user. </li><div style={{ paddingBottom: "10px" }}></div>
            <li>Stored: Web application stores the malicious code in a server or database and passes it on to other users.</li><div style={{ paddingBottom: "10px" }}></div>
            <li>Document Object Model (DOM)-based: Triggered by JavaScript events and runs immediately. The attack is embedded into the existing webpage. </li><div style={{ paddingBottom: "10px" }}></div>
          </ul>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
          </div> Q: The reflected type of XSS is stored within a database. True or False?<div style={spaceAfterQ}></div>
          <div>
            <Form>
              {['radio'].map((type) => (
                <div className="mb-4">
                  <Form.Group>
                    <Form.Check
                      inline
                      label="True"
                      name="answer1"
                      type={type}
                      value="true"

                    />
                    <Form.Check
                      inline
                      label="False"
                      name="answer1"
                      type={type}
                      value="false"

                    />
                  </Form.Group>
                </div>
              ))}
            </Form>
            <Button type="submit">Submit</Button>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
          </div>

          Sourced from CodePath, OWASP, and Veracode.
        </Tab>
        <Tab eventKey="second" title="SQL Injection" style={tab}>
          SQL injection happens when an attacker inputs a SQL statement into a user input, allowing the attacker to view data that they should not be able to access. This attack can allow modification of a database using Insert/Update/Delete or even gaining control to root user privileges.  <div style={spaceAfterQ}></div>
          The best way to prevent this attack is by sanitizing input, which means escaping certain SQL characters. Additionally, only giving the least amount of privilege necessary is also a great principle to follow.
          <div style={spaceAfterQ}></div>
          <div style={spaceAfterQ}></div>
          <div style={spaceAfterQ}></div>
          <div style={spaceAfterQ}></div>
          Q: Which of the following is a good technique to use to prevent SQL injections?<div style={spaceAfterQ}></div>
          <div>
            <Form>
              {['radio'].map((type) => (
                <div className="mb-4">
                  <Form.Group>
                    <Form.Check
                      inline
                      label="Least privilege principle"
                      name="answer2"
                      type={type}
                      value="Least privilege principle"

                    />
                    <Form.Check
                      inline
                      label="Most privilege principle"
                      name="answer2"
                      type={type}
                      value="Most privilege principle"

                    />
                    <Form.Check
                      inline
                      label="Cleaning"
                      name="answer2"
                      type={type}
                      value="Cleaning"

                    />
                    <Form.Check
                      inline
                      label="Sweeping"
                      name="answer2"
                      type={type}
                      value="Sweeping"

                    />
                  </Form.Group>
                </div>
              ))}
            </Form>
            <Button type="submit">Submit</Button>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
          </div>
          Sourced from PortSwigger, CodePath, OWASP, and W3Schools.
        </Tab>
        <Tab eventKey="third" title="Cryptography" style={tab}>
         Cryptography involves studying encryption techniques, or keeping information private through encoding. Typically, these techniques involve turning text into cipher text that only the receiver can encode and reveal.  
         <div style={{ paddingTop: "15px", width: "70%", alignItems: "center", marginLeft: "auto", marginRight: "auto" }}><ul style={list}>
            <li>Symmetric Key: Sender and receiver use one common key. </li><div style={{ paddingBottom: "10px" }}></div>
            <li>Hash Functions: No key. </li><div style={{ paddingBottom: "10px" }}></div>
            <li>Asymmetric Key: A pair of keys is used and includes a private and public one. Only the receiver knows the private key.  </li><div style={{ paddingBottom: "10px" }}></div>
          </ul>
          </div>
         
          <div style={spaceAfterQ}></div>
          <div style={spaceAfterQ}></div>
          Q: Which of the following types of cryptography do not use a key?<div style={spaceAfterQ}></div>
          <div>
            <Form>
              {['radio'].map((type) => (
                <div className="mb-4">
                  <Form.Group>
                    <Form.Check
                      inline
                      label="Symmetric key"
                      name="answer3"
                      type={type}
                      value="Symmetric key"

                    />
                    <Form.Check
                      inline
                      label="Asymmetric key"
                      name="answer3"
                      type={type}
                      value="Asymmetric key"

                    />
                    <Form.Check
                      inline
                      label="Hash functions"
                      name="answer3"
                      type={type}
                      value="Hash functions"

                    />
                    <Form.Check
                      inline
                      label="0-hash"
                      name="answer3"
                      type={type}
                      value="0-hash"

                    />
                  </Form.Group>
                </div>
              ))}
            </Form>
            <Button type="submit">Submit</Button>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
          </div>
          Sourced from CodePath and GeeksForGeeks.
        </Tab>
        <Tab eventKey="fourth" title="User Authentication" style={tab}>
          User authentication involves confirming the identity of the user that is attempting to access an application or network. In today's society, it is more and more common for additional authentication methods such as "two-factor" or "multi-factor" to be used to verify the identiy of the user. There are three different categories that explain the types of authentication methods.

          <div style={spaceAfterQ}></div>
          <div style={spaceAfterQ}></div>
          <div style={{ paddingTop: "15px", width: "70%", alignItems: "center", marginLeft: "auto", marginRight: "auto" }}><ul style={list}>
            <li>Knowledge: Includes passwords, PINs, and security questions. </li><div style={{ paddingBottom: "10px" }}></div>
            <li>Ownership/Possession: Includes credit card numbers and key fobs. </li><div style={{ paddingBottom: "10px" }}></div>
            <li>Inherence: Includes DNA, fingerprints, voice, retina.  </li><div style={{ paddingBottom: "10px" }}></div>
          </ul>
          </div>
          <div style={spaceAfterQ}></div>
          <div style={spaceAfterQ}></div>
          Q: Possession authentication methods include what the user "is". True or False?<div style={spaceAfterQ}></div>
          <div>
            <Form>
              {['radio'].map((type) => (
                <div className="mb-4">
                  <Form.Group>
                    <Form.Check
                      inline
                      label="True"
                      name="answer4"
                      type={type}
                      value="true"

                    />
                    <Form.Check
                      inline
                      label="False"
                      name="answer4"
                      type={type}
                      value="false"

                    />
                  </Form.Group>
                </div>
              ))}
            </Form>
            <Button type="submit">Submit</Button>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
          </div>
          Sourced from CodePath and TechTarget.
        </Tab>
      </Tabs>
    </div>
  );
}

export default LearnPage;