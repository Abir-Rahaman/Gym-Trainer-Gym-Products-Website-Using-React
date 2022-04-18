import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container mt-5 mb-5'>
            <h1>Question1:Difference between authorization and authentication </h1>
              <h5>Authentication and authorization may sound identical, but in the realm of identity and access management, they are two separate security processes. Authentication is the method of confirming a person's identity, considering that, authorization is the procedure of Confirming a user's access to specific apps, files, and data. Authentication is done via passwords, one-time pins, biometric information, and other information provided or entered by the user. However, the authorization process is controlled by the organization's settings, which it implements and maintains. The first step in a successful identity and access management strategy is authentication, on the other hand, authentication is always followed by authorization. The user has no visibility into or control over authorization, whereas, the user can view and alter several aspects of authentication. In a nutshell, we can fairly say that, these are the major differences between authentication and authorization.  </h5>
              <br />  
            

       <h1> Question2: Why are you using firebase? What other options do you have to implement authentication?</h1>
       <h5>Firebase is a great way to host and manage apps on the cloud. Connecting and using built-in third-party authentication providers, such as Google, Facebook, and Twitter is a breeze with Firebase. We also have the option of using a pre-built authentication UI. As Firebase is serverless, it eliminates the need to bother about cloud server configuration details. It also allows us to access other Google services and tools, such as Google Drive and Sheets, as a Google Cloud service. Pricing for Firebase is also very reasonable. To quickly amplify a working product to the cloud, Firebase is a viable option. All the mentioned pros are the actual reason for using Firebase. <br />
    Other options for implementing authentication: <br />
    <br />
	 * Parse <br/>
	 * Back4App<br/>
	 * AWS Amplify<br/>
	 * Kuzzle<br/>
     * Couchbase<br/>
	 * NativeScript<br/>
	 * RxDB<br/>
	 * Flutter<br/>
	 * LoopBack<br/>
	 * SashiDo</h5>
     <br />


<h1>Question3:What other services does firebase provide other than authentication?</h1>
<h5>Not only does Firebase provide authentication, but it also offers a variety of other useful services. Clients for Firebase include Web, iOS, Android, and OS X. It's essentially a whole package. Hosting, Cloud Functions, Cloud Firestore, Cloud Storage, Dynamic Links, Google Analytics, Remote Config, Cloud Messaging, and other services are available. Predictions about the product decisions in firebase. The majority of the services are provided for free.</h5>

        </div>
    );
};

export default Blogs;