import React from 'react';

function Docs() {
    return (
        
        <div className="Docs">
        <div className="Anchors">
            <ul>
                <li className="marker_title">Tutorials</li>
                <li className="markers">-<a href="#requirements" className="marker_text">password requirements</a></li>
                <li className="markers">-<a href="#change" className="marker_text">change user(s) password</a></li>
                <li className="markers">-<a href="#givesudoer" className="marker_text">give sudoer privilege</a></li>
                <li className="markers">-<a href="#removesudoer" className="marker_text">remove sudoer privilege</a></li>
                <li className="markers">-<a href="#IPtables" className="marker_text">IPTables rule implementations</a></li>
            </ul>
        </div>
        <div className="Documentation">
        <div className="Documentation" id='overview'>
            <h1>Documentation</h1>
            <p>
                This is your starting point on how to use the application.
                Here we will implement step by step tutorials to guide you through the application and all of its wonderful features.
                Along side of these tutorials will be pictures, or gifs, in order to help increase your knowledge of your SafeSpace.
            </p>
        </div>
        
        <div className="section" id='logs'>
            <h1>Logs</h1>
            <p>
                Here the application will provide a backlog of changes made by our application and it documents the changes made by the users.
            </p>
        </div>
        <div className="section" id='requirements'>
            <h1>Password Requirements</h1>
            <p>
                This feature sets password requirements for all users on the current system.
            </p>
        </div>
        <div className="section" id='requirepasswordchange'>
            <h1>Require Password Change</h1>
            <p>
            Requires password change on login for specific users or sets a time interval of how 
            often users are required to change their password. If a time interval is set, there 
            should be a recurring notification leading up to the event to warn the user.
            </p>
        </div>
        <div className="section" id='change'>
            <h1>Change User Password</h1>
            <p>
                Manually change a specific user's password or set a default password.
            </p>
        </div>
        <div className="section" id='givesudoer'>
            <h1>Give Sudoer Privileges</h1>
            <p>
                gives sudo permissions for the user/users
            </p>
        </div>
        <div className="section" id='removesudoer'>
            <h1>Remove Sudoer Privileges</h1>
            <p>
                removes sudo permissions for the user/users
            </p>
        </div>
        <div className="section" id='disableuser'>
            <h1>Disable User List</h1>
            <p>
                This feature disables the list of users on login. It 
                also requires the username of the machine to be typed in at login.
            </p>
        </div>
        <div className="section" id='lock'>
            <h1>Lock Screen</h1>
            <p>
                Locks the user's screen after a set time of inactivity.
            </p>
        </div>
        <div className="section" id='SSH'>
            <h1>Configuring the SSH</h1>
            <p>
                This will install SSH if not already installed. Returns 
                SSH status and options to start/stop a SSH session. Other 
                functionalities may be added later.
            </p>
        </div>
        <div className="section" id='IPtables'>
            <h1>Configuring the IPTables</h1>
            <p>
                Change Chain Policy - Set Input, Output and Forward policies to accept or drop. <br/>
	            Add Rule - Set Chain Type, Network Type, Port/IP, and Actions. <br/>
	            Remove Rule - removes by line number
            </p>
        </div>
        <div className="section" id='disableservices'>
            <h1>Disable Services</h1>
            <p>
                Returns a list of services on the system and allows the user to move services 
                between whitelist or blacklist to enable/disable them.
            </p>
        </div>
        <div className="section"></div>
        </div>
        </div>
    )
}

export default Docs;