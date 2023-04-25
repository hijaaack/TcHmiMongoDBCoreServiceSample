## Disclaimer
This is a personal guide not a peer reviewed journal or a sponsored publication. We make
no representations as to accuracy, completeness, correctness, suitability, or validity of any
information and will not be liable for any errors, omissions, or delays in this information or any
losses injuries, or damages arising from its display or use. All information is provided on an as
is basis. It is the reader’s responsibility to verify their own facts.

The views and opinions expressed in this guide are those of the authors and do not
necessarily reflect the official policy or position of any other agency, organization, employer or
company. Assumptions made in the analysis are not reflective of the position of any entity
other than the author(s) and, since we are critically thinking human beings, these views are
always subject to change, revision, and rethinking at any time. Please do not hold us to them
in perpetuity.

## TcHmiMongoDBCoreServiceSample
This is a sample TwinCAT HMI project that uses the MongoDBCoreService extension.
The sample shows how to use the extension in different ways. 

For the source code for MongoDBCoreService check this [repo](https://github.com/hijaaack/MongoDBCoreService)

## Prerequisites
MongoDB Server (sample tested with Community Server v6.0.5)

License: [TF2200](https://www.beckhoff.com/sv-se/products/automation/twincat/tfxxxx-twincat-3-functions/tf2xxx-tc3-hmi/tf2200.html) is needed in the HMI-Server to be able to use this C# Server Extension.

(No license is needed when testing this in the LiveView)

## Get Started
This sample is used with the MongoDB Community Server (tested with v6.0.5)
Download: https://www.mongodb.com/try/download/community

To mimic the sample, open MongoDB Compass and connect to your MongoDB. Once connected create a new database with the name "**test**" and then add a new collection named "**carData**". 
![enter image description here](https://user-images.githubusercontent.com/75740551/234288697-71653c09-dc29-434c-ad35-d48ecaa1ad3b.png)

Once the "**carData**" is created select it and import JSON file and add the dummy data that is included in the project "**carDataOutput.json**"

![enter image description here](https://user-images.githubusercontent.com/75740551/234289384-17a3f386-ef92-4c2d-9683-6cadaf6978f8.png)

When you open the sample project make sure the MongoDBCoreService has the correct configuration. 
![enter image description here](https://user-images.githubusercontent.com/75740551/234289075-7b52f98d-f4b3-47f9-8a5c-c4fd5a094ab3.png)

## Screenshots
The MongoDBCoreService extension has some symbols and methods built in that this sample project uses. 

![enter image description here](https://user-images.githubusercontent.com/75740551/234289938-75ca4b50-12b9-4e88-bc6a-0abe8c3901b0.png)

![enter image description here](https://user-images.githubusercontent.com/75740551/234288657-d8faeb3c-ab7e-4a43-99c4-68128fa41614.png)

![enter image description here](https://user-images.githubusercontent.com/75740551/234288644-6304f8c4-cefe-4a9a-bf75-26504dedefd4.png)

