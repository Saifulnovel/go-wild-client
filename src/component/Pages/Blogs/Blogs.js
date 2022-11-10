import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Blogs = () => {
  useTitle('Blogs')
    return (
      <div className="mb-10 bg-cyan-400 container p-8 ">
        <h1 className="text-center text-5xl  font-bold ">
          Here is Some Question and Answer{" "}
            </h1>
            <small className='text-white'>Click on the ques to see the answer</small>
        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Question-1: What is the Difference between SQL and NoSQL?
          </div>
          <div className="collapse-content">
            <p>
              The Main Differences: Type – SQL databases are primarily called as
              Relational Databases (RDBMS); whereas NoSQL database are primarily
              called as non-relational or distributed database. Language – SQL
              databases defines and manipulates data based structured query
              language (SQL). Seeing from a side this language is extremely
              powerful. SQL is one of the most versatile and widely-used options
              available which makes it a safe choice especially for great
              complex queries. But from other side it can be restrictive. SQL
              requires you to use predefined schemas to determine the structure
              of your data before you work with it. Also all of your data must
              follow the same structure. This can require significant up-front
              preparation which means that a change in the structure would be
              both difficult and disruptive to your whole system. A NoSQL
              database has dynamic schema for unstructured data. Data is stored
              in many ways which means it can be document-oriented,
              column-oriented, graph-based or organized as a KeyValue store.
              This flexibility means that documents can be created without
              having defined structure first. Also each document can have its
              own unique structure. The syntax varies from database to database,
              and you can add fields as you go. Scalability – In almost all
              situations SQL databases are vertically scalable. This means that
              you can increase the load on a single server by increasing things
              like RAM, CPU or SSD. But on the other hand NoSQL databases are
              horizontally scalable. This means that you handle more traffic by
              sharding, or adding more servers in your NoSQL database. It is
              similar to adding more floors to the same building versus adding
              more buildings to the neighborhood. Thus NoSQL can ultimately
              become larger and more powerful, making these databases the
              preferred choice for large or ever-changing data sets. Structure –
              SQL databases are table-based on the other hand NoSQL databases
              are either key-value pairs, document-based, graph databases or
              wide-column stores. This makes relational SQL databases a better
              option for applications that require multi-row transactions such
              as an accounting system or for legacy systems that were built for
              a relational structure. Property followed – SQL databases follow
              ACID properties (Atomicity, Consistency, Isolation and Durability)
              whereas the NoSQL database follows the Brewers CAP theorem
              (Consistency, Availability and Partition tolerance). Support –
              Great support is available for all SQL database from their
              vendors. Also a lot of independent consultations are there who can
              help you with SQL database for a very large scale deployments but
              for some NoSQL database you still have to rely on community
              support and only limited outside experts are available for setting
              up and deploying your large scale NoSQL deployments.
            </p>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Question-2: What is JWT, and how does it work?
          </div>
          <div className="collapse-content">
            <p>
              JWT, or JSON Web Token, is an open standard used to share security
              information between two parties — a client and a server. Each JWT
              contains encoded JSON objects, including a set of claims. JWTs are
              signed using a cryptographic algorithm to ensure that the claims
              cannot be altered after the token is issued.
              <br />
              How JWT Works JWTs differ from other web tokens in that they
              contain a set of claims. Claims are used to transmit information
              between two parties. What these claims are depends on the use case
              at hand. For example, a claim may assert who issued the token, how
              long it is valid for, or what permissions the client has been
              granted. A JWT is a string made up of three parts, separated by
              dots (.), and serialized using base64. In the most common
              serialization format, compact serialization, the JWT looks
              something like this: xxxxx.yyyyy.zzzzz. Once decoded, you will get
              two JSON strings: The header and the payload. The signature. The
              JOSE (JSON Object Signing and Encryption) header contains the type
              of token — JWT in this case — and the signing algorithm. The
              payload contains the claims. This is displayed as a JSON string,
              usually containing no more than a dozen fields to keep the JWT
              compact. This information is typically used by the server to
              verify that the user has permission to perform the action they are
              requesting. There are no mandatory claims for a JWT, but
              overlaying standards may make claims mandatory. For example, when
              using JWT as bearer access token under OAuth2.0, iss, sub, aud,
              and exp must be present. some are more common than others. The
              signature ensures that the token hasn’t been altered. The party
              that creates the JWT signs the header and payload with a secret
              that is known to both the issuer and receiver, or with a private
              key known only to the sender. When the token is used, the
              receiving party verifies that the header and payload match the
              signature.
            </p>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Question-3: What is the difference between javascript and NodeJS?
          </div>
          <div className="collapse-content">
            <p>
              1. Javascript is a programming language that is used for writing
              scripts on the website. NodeJS is a Javascript runtime
              environment. <br />
              2. Javascript can only be run in the browsers. We can run
              Javascript outside the browser with the help of NodeJS. <br />
              3. It is basically used on the client-side. It is mostly used on
              the server-side. <br />
              4. Javascript is capable enough to add HTML and play with the DOM.
              Nodejs does not have capability to add HTML tags. <br />
              5. Javascript can run in any browser engine as like JS core in
              safari and Spidermonkey in Firefox. V8 is the Javascript engine
              inside of node.js that parses and runs Javascript. <br />
              6. Javascript is used in frontend development. Nodejs is used in
              server-side development.
              <br />
              7. Some of the javascript frameworks are RamdaJS, TypedJS, etc.
              Some of the Nodejs modules are Lodash, express etc. These modules
              are to be imported from npm. <br />
              8. It is the upgraded version of ECMA script that uses Chrome’s V8
              engine written in C++. Nodejs is written in C, C++ and Javascript.
            </p>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Question-4: How does NodeJS handle multiple requests at the same time?
          </div>
          <div className="collapse-content">
            <p>
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them. EventLoop is the
              listener for the EventQueue. If NodeJS can process the request
              without I/O blocking then the event loop would itself process the
              request and sends the response back to the client by itself. But,
              it is possible to process multiple requests parallelly using the
              NodeJS cluster module or worker_threads module.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Blogs;