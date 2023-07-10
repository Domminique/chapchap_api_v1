# CHAPCHAP E-Logistics : From Soil to Market: Unleashing the Potential of African Agriculture

chap-chap-eovej


your application for the Google for Startups Cloud Program
username --> Public Key = bvkeelgv

password  -> Private Key= 1a81dfe4-225b-4b5c-bc5f-f43a534eb2a6


IP Access List -> 41.90.68.238

--------------------------
Programmatic Access to a Project 

Testing Project API Key

Public Key = wvetwkdx
Private Key= a2db7fd2-33e6-4d2e-ae8c-73021c96fb30

IP Access List 41.90.68.238
-----------------------
Part Two - projectv level API

Public Key = hbraaiak

Private Key = c4b0605c-4325-4dc7-92b3-0c22a7fa9cd1

IP = 41.90.68.238

https://cloud.mongodb.com/api/atlas/<version>

------------------------
DB Admin

The following sample GET request 
returns all projects
 in your organization:
curl --user "{PUBLIC-KEY}:{PRIVATE-KEY}" --digest \
      --header "Content-Type: application/json" \
      --include \
      --request GET "https://cloud.mongodb.com/api/atlas/v1.0/groups"

 The following sample POST request takes a request body and creates a project named MyProject in your organization:     


curl --user "{PUBLIC-KEY}:{PRIVATE-KEY}" --digest \
      --header "Content-Type: application/json" \
      --include \
      --request POST "https://cloud.mongodb.com/api/atlas/v1.0/groups" \
      --data '
         {
            "name": "MyProject",
            "orgId": "5a0a1e7e0f2912c554080adc"
         }'
### See the app in action here -> [https://play.google.com/store/apps/details?id=com.imbuga.chapchap] 


week 1
- Ideation - to come up with a Project idea
  personas
- Breakdown your project into tasks
- Report the total number of tasks for the project
- Assign tasks to all te team members
- Plan and scedule stand ups within your team
- Plan a weekly Demo schedule with your Supervisor
- Set up your Github repo for te project

Other weeks

- Sprint planning
- Coding
- Code Review
- Deployment
- Sprint Review

  # Configure GCP

curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install git
sudo npm install pm2 -g

Project in Action - [Jobify](https://www.jobify.live/)

Find the App Useful? [You can always buy me a coffee](paypal:imbugad@gmail.com)

#### Run The App Locally

```sh
npm run install-dependencies
```

- rename .env.temp to .env
- setup values for - MONGO_URL, JWT_SECRET, JWT_LIFETIME

```sh
npm start
```

- visit url http://localhost:3000/



  onPress={async () => await AsyncStorage.removeItem("@user")}



  ------------------------------------

  Back-end and GCP setup (Node.Js )

  1. Create VM , 
  2. Configure API's runtime environment
      - Node - Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.Node.js binary distributions are available from NodeSource.https://github.com/nodesource/distributions

     package-manager#debian-and-ubuntu-based-linux-distributions
      - PM2 - ADVANCED, PRODUCTION PROCESS MANAGER FOR NODE.JS
PM2 is a daemon process manager that will help you manage and keep your application online 24/7 https://pm2.keymetrics.io/
  3. Git clone repo
  4. In the project directory, 
       - Setup .env file ==> touch .env && nano .env -> copy paste secrets & save
       - Run npm install  ---> npm i
       - Run pm2   ------- sudo pm2 start server.js && sudo pm2 monit
       - server > Server is listening on port 80...   

  5. Configure load balancing for the API with your domain name

  Mobile Setup (React Native)

  - Use EAS to deploy to play store

## 1. Public URL and Access to Code Repository:

  -url--> https://github.com/Domminique/chapchap_api_v1
   - We will host the project on a public code repository platform like GitHub, ensuring visibility for the judges to review the code.
   - The code repository will contain the entire project, including frontend code, backend configurations, and any additional scripts or resources.



# Configure GCP

curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install git
sudo npm install pm2 -g

Project in Action - [Jobify](https://www.jobify.live/)

Find the App Useful? [You can always buy me a coffee](paypal:imbugad@gmail.com)

#### Run The App Locally

```sh
npm run install-dependencies
```

- rename .env.temp to .env
- setup values for - MONGO_URL, JWT_SECRET, JWT_LIFETIME

```sh
npm start

```

- visit url http://localhost:3000/


## 2. Architecture Diagram:
   - We will create a high-level architecture diagram illustrating the components and their interactions within the app.
   - The diagram will showcase the integration of MongoDB Atlas, Google Cloud products, and other relevant services or APIs used in the app.



   

## 3. Text Description:
   - The text description will provide a detailed explanation of how we integrated the tools used in the app, including MongoDB Atlas, Google Cloud products, and other services.
   - We will highlight the key features, functionalities, and technologies employed, emphasizing how they address the challenge requirements and SDG 9.


   The app is designed to provide an easy-to-use and intuitive experience for users in the African market. Here's how it works:

User Registration and Authentication:

Users can register and create an account using their email address, phone number, or social media accounts.

The app integrates Firebase Authentication, ensuring secure and reliable user authentication.
User Interface and Navigation:

The mobile app offers a user-friendly interface with intuitive navigation, making it easy for users to access various features.

The app's layout and design are optimized for mobile devices, ensuring a seamless experience.

Generative AI Application:

The app incorporates generative AI capabilities, which can offer personalized recommendations, generate content (text or images), or provide language translation services.

Users can interact with the generative AI feature to receive tailored suggestions, creative outputs, or translation assistance.


Search and Discovery:

MongoDB Atlas Search is integrated into the app to provide fast and accurate search results.
Users can search for specific data or information within the app, such as products, articles, services, or user-generated content.

Google Cloud's Natural Language Processing (NLP) capabilities analyze the data to provide contextual search results, enhancing the search experience.

Payments:

The app facilitates secure and seamless payment transactions for various purposes, such as purchasing products or services.

It integrates a payment gateway that supports African payment methods, such as mobile money, local bank transfers, or digital wallets.

Users can make payments within the app, ensuring a convenient and trusted payment process.

Offline Functionality:

The app includes offline functionality to address the limited internet connectivity in some African regions.

Users can access certain features and data offline, such as viewing previously accessed information, composing messages, or drafting content.

When internet connectivity is restored, the app synchronizes the offline data with the backend, ensuring data consistency.

Overall, the app leverages a combination of MongoDB Atlas, Google Cloud products, and other relevant technologies to deliver a seamless user experience. It incorporates authentication for security, generative AI for personalized recommendations, MongoDB Atlas Search and Google Cloud NLP for efficient search, a reliable payment gateway for seamless transactions, and offline functionality to overcome connectivity challenges.

## 4. Demo Video:
   - We will create a three-minute demo video showcasing the app in action, highlighting its features and how it addresses the challenge requirements.
   - The video will demonstrate the app's user interface, authentication process, generative AI capabilities, search functionality, payment processing, and offline functionality.





## Design & Process #ff7519

### Brief description: chapchap e-logistics - (**chapchap** is swahili word from a fast)

An e-commerce platform that enables African farmers, artisans and creators to sell products online. 

### List a few main features:

- Buyers can search for and match farmers based on location langauge, skills, goals, and country
- Pricing will be individualised based on organizations preference and demand , it will be free for not-for-profit and charity orgarnisations
- Strong social media interration with reviews, posts and analytics
- Managers can upload farmer and buyers in pdf, json or excell data formats

### List roles of typical users:

a. Farm Manager
b. farmer
c. Mentee

## 2a. Writing user personas

Ibrahim is a busy working project Manager who wants to access chapchap logistics and make sure that he can see all e-logistics activities of his Program. He also uses chapchap logistics to see engagement reports, detailed meeting lists, graphics, custom reports. He also uses the mobile app to automate meeting and calls with farmers and buyers. Ibrahim wants to save time and money, and he wants a farmers Management platform that gives his time back.

Dominic is a farmer and a busy start-up founder who wants to send direct messages or join video calls his buyers and to explore tools that will save him time and learn in the process . Dominic likes to perform all operations on her phone.

## 2b. Writing user stories

Search for for farmers and buyers

As a Farm Manager , I want to search for farmers and buyers of my e-logistics program , see engagement reports, detailed meeting lists, graphics, custom reports of all e-logistics activities.

Check useful graphics
As a farmer, I want to Check useful graphics to measure my e-logistics program.

## 3. Defining SLIs and SLOs

#### userstory SLI

Check useful graphics

#### SLO

1. available 99.95%
2. 5% of requests complete in under 300 ms

#### SLI

1. Fraction of 200 vs 500 HTTP responses from
   API endpoint measured per day
2. Time to last byte GET requests measured
   every 10 seconds aggregated per minute

## 4. Design microservices for your application

A diagram showing your application's microservices and their connections.

# diagram here

## . Designing REST APIs

services and their resources and operations .

### Service name

Account Service

### Collections

transaction

### Methods

list
deposit
withdraw
transfer

## 6. Defining storage characteristics

### required storage features

#### Service

#### Structured or Unstructured

#### SQL or NoSQL

NoSQL

#### Strong or Eventual Consistency

Strong M

#### Amount of Data (MB, GB, TB, PB, ExB)

20GB

#### Read only or Read/Write

## 7. Choosing Google Cloud Storage and Data Services

#### Google Cloud storage products for each service

MongoDB Atlas

## 8a. Defining network characteristics for your services

### Service

Account

### Internet facing or Internal only

### HTTP

### TCP

Yes

### UDP

### Multiregional?

No

## 8b. Select the load balancers for your services

Google Cloud load balancer product(s) for each service.

### Service , http, TCP(yes), UDP

## 9. Diagramming your network

### diagram that depicts how your services will communicate over the network. Include regions, zones, load balancers, CDN, and DNS if applicable

# Newtwork Diagram here

## 10. Designing reliable, scalable applications

### Even if some service is down, we want the web frontend of our application to be available nearly all the time. We also want the website to be fast with very low latency to users all over the world. On the next slide, draw a diagram that depicts how we can achieve this using Google Cloud services.

## # Reliable, scalable Diagram here

## 11a. Disaster recovery scenario

### We've deployed for high availability by replicating resources in multiple zones. However, to meet regulatory requirements, We need a plan to recover from a disaster that brings down the entire region. The current architecture is depicted below.So we create a plan to bring up your application in another region if our main region is down.

# Disaster recovery scenario diagram

## 11b. Service disaster recovery scenarios

### Write a high-level list of possible scenarios on the next slide.

### Scenarion one

#### Service

Ratings Service

#### Scenario

Programmer deleted all ratings accidentally

#### Recovery Point Objective

24 hours

#### Recovery Time Objective

1 hour

#### Priority

Med

### Scenario two

#### Service

farmers Service

#### Scenario

farmers database crashes

#### Recovery Point Objective

0 (can’t lose any data)

#### Recovery Time Objective

2 minutes

#### Priority

High

## 11c. Resource disaster recovery plans

### For Scenarion one

### Resource

Ratings Database

### Backup Strategy

Daily automated backups

### Backup Location

Multi-Regional Cloud Storage Bucket

### Recovery Procedure

Run Restore Script

### For Scenarion two

### Resource

Orders Database

### Backup Strategy

Failover replica plus daily backups

### Backup Location

Multi-zone deployment

### Recovery Procedure

Automated

## 12. Modeling secure Google Cloud services

### A diagram that depicts how we will secure your services. Include firewalls, IAM roles, service accounts and network resources as appropriate.

# A diagram that depicts how you will secure your services

## 13. Cost estimating and planning

### We Use the pricing calculator to determine and record on the next slide the cost of your microservices.

### Service name

Accounts

### Google Cloud Resource

MongoDB Atlas + 2 VMs + Load balancer

### Cost

$574.71/month



If I were a farmer in Kakamega County, I would grow the following crops to improve food security and make it a sustainable business that uses technology as an enabler while producing natural healthy food:

Sweet potatoes: Sweet potatoes are a drought-resistant crop that can be grown in a variety of soil types. They are also a good source of vitamins and minerals, making them a healthy food choice. Sweet potatoes can be grown using drip irrigation, which can help to conserve water.
Sweet potatoes cropOpens in a new window
growfully.com
Sweet potatoes crop
Cassava: Cassava is another drought-resistant crop that can be grown in poor soil. It is also a good source of carbohydrates, making it a staple food for many people in Kenya. Cassava can be grown using intercropping, which is a method of planting different crops together. This can help to improve soil fertility and reduce the risk of pests and diseases.
Cassava cropOpens in a new window
croplife.org
Cassava crop
Avocados: Avocados are a high-value crop that can be grown in Kakamega County. They are also a good source of healthy fats and vitamins. Avocados can be grown using drip irrigation and fertigation, which is a method of applying nutrients to the soil through the irrigation system. This can help to improve the quality and yield of avocados.
Avocados cropOpens in a new window
www.greenlife.co.ke
Avocados crop
Sunflowers: Sunflowers are a relatively new crop in Kenya, but they have the potential to be a valuable cash crop. They are a good source of oil, which can be used for cooking or for making biodiesel. Sunflowers can be grown using drip irrigation and intercropping.
Sunflowers cropOpens in a new window
ucanr.edu
Sunflowers crop
I would use technology to help me to manage my farm more efficiently and sustainably. I would use a weather forecasting app to help me to plan my planting and harvesting schedules. I would also use a soil testing kit to help me to determine the nutrient levels in my soil. This information would help me to choose the right crops to grow and to apply the right amount of fertilizer.

I would also use technology to market my products. I would create a website and social media accounts to promote my farm and my products. I would also use online platforms to connect with buyers.

By growing sustainable crops and using technology to manage my farm, I would be able to improve food security in Kakamega County while also creating a profitable business. I would also be able to produce natural healthy food that is good for my customers and for the environment.
