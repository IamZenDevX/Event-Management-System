# Event-Management-System
<h2 align="left">Introduction:</h2>

An event management system is a comprehensive tool meant to simplify preparation, implementation, and coordination of an event. It offers a whole approach for handling several facets of events, including participant registration, venue booking, activity planning, and participant feedback collection. Combining important models including users, events, registrations, reservations, and reviews assures participants as well as organizers a flawless experience. Reducing mistakes and increasing efficiency helps real-time updates and automation of administrative activities to help to coordinate events generally. From little meetings to large conferences, this system is perfect for organizing all kinds of events since it provides a user-friendly interface and tremendous potential to simplify process of event management.

<h2 align="left">Key Features:</h2>

1. **User Model**:
   
- serves many roles including merchants, visitors, and planners thereby ensuring role-specific access and utility.
2. **Event Model**:
- Event Model offers the basic framework of the system by compiling details about the event like date, time, place, and related activities.
3. **Booking Model**: 
- Designed to ensure flawless and open schedule, Booking Model allows users to reserve venues, locations, or resources.
4. **Registration Model**: 
- Managers participant registrations, tracks attendance records and confirmations, hence preserving Registration Model.
5. **Review Model**: 
- Depending on attendance experiences, Review Model let organisers apply input collection and analysis to help to improve forthcoming events.

<h2 align="left"> Tools Used:</h2>

![Zendevx Technology](https://github.com/user-attachments/assets/36c979fe-929e-44a4-8958-9c15dc466e35)

<h2 align="left"> Testing Tools Used:</h2>

![PostMan Github](https://github.com/user-attachments/assets/3381c639-715f-40b9-85d3-08384553ee12)

<h2 align="left">Library:</h2>

- bcryptjs
- connect-mongo
- body-parser
- cors
- dotenv
- express
- express-session
- express-validator
- jsonwebtoken
- mongoose
- nodemon
- validator
- morgan
- multer
- nodemailer

<h2 align="left">Database Structure</h2>

The platform will require a relational database to manage User,Event,Registration,Review and Booking . Below is a proposed database structure with the key tables.

### **Tables**:

---

### a) user

| **Field Name** | **Type** |
| --- | --- |
| name | String |
| email | String |
| photo | String |
| password | String |
| passwordConfirm | String |
| role | String |
| createdAt | Date |
| passwordChangedAt | Date |
| passwordResetToken | String |
| passwordResetExpires | Date |
| active | Boolean |

### b)  event

| **Field Name** | **Type** |
| --- | --- |
| title | String |
| description | String |
| startDate | Date |
| endDate | Date |
| duration | Number |
| location | enum: ["Point"] |
| coordinates | Number |
| formattedAddress | String |
| capacity | Number |
| organizers | Ref .Obj →User |
| registrations | Ref .Obj →Registration |
| createdAt | Date |
| category | String |
| price | Number |
| eventStatus | String |
| tags | String |
| imageUrl | String |
| images | String |
| agenda | String |
| speakers | String |
| sponsors | String |
| ratingsAverage | Number |
| ratingsQuantity | Number |
|  registrationDeadline | Date |

### c)  registration

| **Field Name** | **Type** |
| --- | --- |
| user | Ref. Object → User |
| event | Ref. Object → Event |
|  registrationStatus | String |
| registeredAt | Date |

### d)  review

| **Field Name** | **Type** |
| --- | --- |
| review | String |
| rating | Number |
| createdAt | Date |
| user | Ref. Object → User |
| event | Ref. Object → Event |

### e)  booking

| **Field Name** | **Type** |
| --- | --- |
| user | Ref. Object → User |
| event | Ref. Object → Event |
| price | Number |
| paymentStatus | String |
| createdAt |  Date |

<h2 align="left"> Use Cases:</h2>

- **Event Creation and Scheduling**
    - Event planners can create agendas, design events, and offer event details including time, venue, and date.
- **Venue and Resource Booking**
    - helps events to be hosted with perfect booking of venue, tools, and other resources required.
- **User Registration**
    - Online event registration helps attendees register, simply confirm attendance, and select ticket types.
- **Attendee Management**
    - tracks attendee registrations, generates participant lists, and monitors event attendance.
- **Feedback and Review Collection**
    - enables participants evaluate events, offer comments and ratings, so helping organizers to plan better next ones.
- **Reporting and Analytics**
    - Through extensive reports, **r**eporting and analytics provides information on user comments, attendance records, and event performance.
- **Multi-User Roles and Access Control**
    - Customized access rights for each allow Multi-User Roles and Access Control to accommodate numerous roles including event planners, attendees, and reviewers.
- **Event Marketing**
    - Combining email campaigns, social media sharing platforms, and promotional tools highlights events event marketing.
- **Review and Rating System**
    - helps attendees assess their event experience, therefore enabling the evaluation and improvement of the event quality.

<h2 align="left">Development with ZenDevx:</h2>

<a href="https://www.zendevx.com/" target="blank"><img align="center" src="https://github.com/user-attachments/assets/7dd7220f-e83c-4490-9ac2-beab3bcf8c35" alt="ZenDevX" height="auto" width="auto" /></a>

<h2 align="left">🐦 Connect With Me:</h2>
<a href="https://www.linkedin.com/company/zendevx/" target="blank"><img align="center" src="https://github.com/user-attachments/assets/9a6080ca-4265-43e5-8652-9454651970a9" alt="ZenDevX" height="50" width="50" /></a>
<a href="https://www.youtube.com/@zendevx" target="blank"><img align="center" src="https://github.com/user-attachments/assets/1beefdd6-fa17-49c9-bde7-e8f30f539b96" alt="ZenDevX" height="50" width="50" /></a>
<a href="https://x.com/IamZenDevX" target="blank"><img align="center" src="https://github.com/user-attachments/assets/f1eeb865-3d23-407a-9a2b-d76b4e85c6dd" alt="ZenDevX" height="50" width="50" /></a>


I hope you like the project. Thanks for reading :)
