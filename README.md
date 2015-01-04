Ecommerce-Application
=====================
eBay is an application that provides consumer-to-consumer& business-to-consumer sales services via Internet. The System developed manages online auction and shopping website in which people and businesses buy and sell a broad variety of goods and services worldwide. It is not a free website, but charges users an invoice seller fee on the basis of if they have sold or listed any items .Any website works fine when deployed, but a real good website will survive if it manages the increase in data and traffic, when it's scalable. The database is capable of dealing with huge data. That's when the real performance of a system is tested. We have tried our best to make the project scalable, efficient and reliable.
a) Caching techniques used in the application and also show how the invalid objects are handled during implementation.
Caching is a technique to increase the speed of data lookup by directly from the source which could be form the database or server. A cache is a storage area where it is typically stored on memory or disk. A memory cache is normally faster to read from the disk cache, but the data doesn't exist in memory cache once the system is rebooted. Caching takes place on at least three locations i.e. browser, web server and database.
Few caching techniques used are:
•	Database caching: A Web application will cache the data read from the database, so that every time the system does not access the database using network. Web browsers have local storage, an application cache and SQL cache where the data can be stored.
•	Browser Caching i.e. Lazy Evaluation:
This proves to be very useful approach since it reduces the dependency of the client on the server.  Lazy evaluation means we need populate the cache the first time when a certain piece of data needed. First it checks whether the data exists, if not then it inserts into cache using cookies.
The data can be stored on the client side once fetched from the server. Hence the client won’t need to access server repeatedly for the same data. It can access its own cache object like cookies or sessions. Example: Client server scripting which removes the invalid objects by removing invalid date and Embedding password validation
The files like CSS, JavaScript or images can be cached on the client side so that a user who visits the website at a later time can retrieve the files from its cache instead from the server. Example: Using exceptional handling, it takes care of all the incorrect data.
•	Choosing Web Application Architecture: 
1.	Architecture decides the structure of the web application and the data flow between client, server and database. 
2.	The data can be parsed in the form of JSON, XML or any other format. JSON is lightweight as compared to XML. That is why the web services behave slowly than node.js technology since web service transfer data in the form of XML.
b) How to handle Heavy weight resources for a web application using NodeJS.
Node JS uses non blocking, even driven I/O to remain weight light is very efficient for the data intensive real time applications like eBay that runs parallel on distributed systems. When NodeJS is compared to traditional web serving techniques where each connection requests for a new thread and consumes RAM capacity and eventually increases the utilization of the RAM, whereas NodeJS uses single thread with non blocking I/O calls  to support lakhs of concurrent connections. Below diagrams show how the heavy weight resources are handled.
c) Techniques to improve the performance in scalable ways.
Please find below some of the techniques that prove to be useful to improve the performance of web applications
•	Browser Caching: This proves to be very useful approach since it reduces the dependency of the client on the server. 
1.	The data can be stored on the client side once fetched from the server. Hence the client won’t need to access server repeatedly for the same data. It can access its own cache object like cookies or sessions.
2.	The files like CSS, JavaScript or images can be cached on the client side so that a user who visits the website at a later time can retrieve the files from its cache instead from the server.

•	Measuring Database Performance: Database is one of the important aspects of any web application. Since most of the web applications are dynamic, retrieving data from a database or updating the database is the most common activity.
The databases can be optimized by refreshing the indexes after regular intervals. The amount of data inserted grows day by day and it needs to be rearranged so that it can be retrieved faster.
1.	The connections to the database should be managed. This can be done by pooling some connection objects in advance so that they can be used in case a user wants to perform any database operations. This reduces the time needed to create a database connection object repeatedly.
2.	The user can write an optimized query to fetch the results from database. An optimized query can greatly reduce number of rows that can be fetched from the database resulting in faster data access from the server to client.

•	Front-end performance: Rendering any web page is time consumption process. It can be reduced by partial rendering of the page. Technologies like AJAX can be used to achieve the performance.

•	Choosing Web Application Architecture:
1.	Architecture decides the structure of the web application and the data flow between client, server and database.
2.	The data can be parsed in the form of JSON, XML or any other format. JSON is lightweight as compared to XML. That is why the web services behave slowly than node.js technology since web service transfer data in the form of XML.
We can compare the performance of an application using the below graphs with the following scalibity ways.
Below is the combined graph comprising of 3 things:

	Without Connection Pooling
	With Connection Pooling
	With Connection Pooling, Caching and Database vertical partition

Ass we can see, the graph of third part has less steep slope as compared to second part, similarly for the second and first part.
