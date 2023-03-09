## Initialization Project

```js
npm init
npm i express@4
```

## Setup basics

```js
const express = require('express');

//Get an instance (object) of the server
const app = express();

app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'Hello from the server side!', app: 'itsyuimoriiTours' });
});

//Start the server
const port = 3000;
app.listen(port, (error) => {
  if (!error)
    console.log(
      `Server is Successfully Running, and App is listening on port ${port}...`
    );
  else console.log("Error occurred, server can't start", error);
});


```

## 💛APIS and Restful API design

**Application Programming Interface**: a piece of software that can be used by another piece of software, in order to allow applications to talk to each other.

**Get vs post** 

![](https://res.cloudinary.com/dxmfrq4tk/image/upload/v1678301639/Screen_Shot_2023-02-21_at_9.31.31_PM_brp11u.png)

### The REST Architecture

1. Separate API into logical **resources**
2. Expose structured, **resource-based URLs**
3. **Use HTTP methods(verbs)**
4. Send data as **JSON** (usually)
5. Be **stateless**
> **Resource**: Object or representation of something, whichhas data associated to it. Any information that can benamed can be a resource.

- URL: `https://www.itsyuimoriiTours.com/addNewTour`

  *Endpoints should containonly resources (nouns),and use HTTP methods for actions!* 

![img](https://res.cloudinary.com/dxmfrq4tk/image/upload/v1678300655/Screen_Shot_2023-03-08_at_12.36.58_PM_czrzp0.png)

The ability to **update resources**. And for that,either a `PUT` or a `PATCH `request should be made to the *endpoint*. The difference between them is that with 

- **PUT**, the client is supposed to send the entire updated object

- **PATCH**,it is supposed to send only the part of the objectthat has been changed.

- But both of them have the ability to **send data to the server.**A bit like POST, actually, but with a different intent. 

- **POST is to create a new resource,** while PUT or PATCH are used to **update an existing resource** and so it then makes all the difference.

- **DELETE** HTTP method.Again, the I.D. or some other unique identifier of the resource to be deleted should be part of the URL.

- If the /tours endpoint is accessed with **GET,** we send data to the client.

  But if the same endpoint is accessed with **POST,** we expect data to come in with a request.

So these are the five `HTTP methods` that we can and should respond to when building our RESTful APIs. so that the client can perform the four basic CRUD operations.So **CRUD stands for Create, Read, Update and Delete.**And you will see this term all the time related to APIs and database stuff.And you see that these HTTP methods map quite nicely to the basic CRUD operations.Now, there might be actions that are not CRUD,and in that case,we just need to get creative with our inputs.

For example,a log in or a search operation,these are not really related to a particular resourceand they're not CRUD operations either,but we still can create endpoints for them.For example, like /login or /search.But we'll talk more about these cases later in practice.

And just to finish this part now,remember that we had two other crazy endpoint namesin the last slide which kind of involvedtwo resources at the same time, right?And that's also no problem at all with REST.

So,` /getToursByUser` can simply be translated to`/users/tours`,in this case, user number three.So this particular endpoint herecould send data about all the toursthat user number three has booked.Makes sense? Or in the case of deleting,there could be a delete request to the sameor a very similar endpoint,requesting tour number nine to be deletedfrom user number three, okay?So there really are a tons of possibilitiesof combining resources like this.But of course, we don't have to implementall these combinations in our API.We only implement what makes sensein the case of our applicationand the client that wants to consume our API.So, this is how we make use of HTTP methodsto build user-friendly and nicely structured URLsthat are easy and logical to consume for the client.

![JSON](https://res.cloudinary.com/dxmfrq4tk/image/upload/v1678302067/Screen_Shot_2023-03-08_at_1.01.00_PM_xrqfi2.png)

Now, about the data that the client actually receives,or that the server receives from the client,usually, we use the JSON Data Format.And so let's briefly learn what JSON actually isand how to format our API responses.

JSON is a very lightweight data interchange formatwhich is heavily used by web APIscoded in any programming language.So it's just not related to a JavaScript.

And it's so widely used todaybecause it's really easy for both humans and computersto understand and write JSON.

So you're probably already noticing that JSON looks a bit like a regular JavaScript object, right? With all these key-value pairs.There are, however, some differences,and the most important one is that all the keyshave to be strings.It's also very typical for the valuesto be strings as well but they can be other thingslike numbers, true or false values, other object,or even arrays of other values.It's quite straighforward, actually.And from this example,you can kind of see how some typical JSON might look like.Let's say that this is a data that we have in our databasefor a GET request to this URLso the tour with I.D. of five.Now, we could send it back like this to the client,but we usually do some simple response formattingbefore sending.There are a couple of standards for thisand we're gonna use a very simple one called Jsend.We simply create a new object,then add a status message to itin order to inform the client whether the requestwas a success, fail or error,and then we put our original datainto a new object called Data, okay?And we can develop this even a bit furtherbut this is really the simplest wayof formatting with Jsend.And just, by the way,wrapping the data into an additional objectlike we did here is called Enveloping,and it's a common practiceto mitigate some security issues and other problems.Also, there are other standardsfor response-formatting that you can look into,like Jsend:API or the Odata JSON Protocol.Alright, 

![stateless](https://res.cloudinary.com/dxmfrq4tk/image/upload/v1678302421/Screen_Shot_2023-03-08_at_1.06.56_PM_tdoz3h.png)

and finally,a RESTful API should always be stateless.So, what does stateless actually mean?Well, in a stateless RESTful API,all state is handled on the clientand not on the server.And state simply refers to a piece of datain the application that might change over time.For example,whether a certain user is logged inor on a page with a list with several pages,what the current page is.Now the fact that the state should be handledon the client means that each request must containall the information that is necessary to processa certain request on the server, alright?Does that make sense? So, the server should never ever have to remember the previous request in order to processthe current request.Let's take the list with several pages as an example.And let's say that recurrently on page fiveand want to move forward to page six.So we could have a simple endpoint called /tours/nextPageand submit a request to it, right?But the server would then have to figure outwhat the current page is and based on thatsend the next page to the client.In other words,the server would have to remember the previous request.It would have to handle the state server sideand that is exactly what we want to avoid in RESTful APIs, okay?Instead, in this case,we should create a /tours/page endpointand paste the number six to itin order to request page number six.This way, we would then state on the clientbecause on a client,we would already know that we're on page fiveand so all we had to do is to just add oneand then request page number six.So the server doesn't haveto remember anything in this case.All it has to do is to send back datafor page number six as we requested.And by the way, statelessness and statefulness,which is the opposite,are very important concepts in computer scienceand application design in general.So, it's a good idea to actually have some understandingwhat a stateless API is and how it works.Anyway, this was a huge lecture,but also one of the most important ones.I cannot stress that enough and I actually thinkthat you can see that, right?Anyway, let's now finally get back to our code.

## 💛Starting design Restful API 

### handling GET request

```js
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    //JSend data formations
    status: 'success',
    data: {
      //   tours: tours,
      tours,
    },
  });
});
```

> https://127.0.0.1:3000/api/v1/tours

![](https://res.cloudinary.com/dxmfrq4tk/image/upload/v1678334669/Screen_Shot_2023-03-08_at_10.03.30_PM_wzxz93.png) 

###  handling POST request

> remember that with a post request, we can **send data from the client to the server**, This data is then ideally available on the request. The request object again is what holds all the data, all the information, about the request that was done.

> **Middleware**: It's called middleware because it stands between,so in the middle of the request and the response. And the step the requests go through, in this example is simply that the data from the body is added to it.So it's added to the request object by using this middleware.

```js
app.post('/api/v1/tours', (req, res) => {
  //the data from the body in the console, just to verify that it actually works, so req.body.
  //get data from the body in the console
  console.log(req.body);
  res.send('Done');
});
```

![](https://res.cloudinary.com/dxmfrq4tk/image/upload/v1678335558/Screen_Shot_2023-03-08_at_10.17.54_PM_ohsgwf.png)

### Persist the data into JSON file(fictional database)

>when we create a new object, we never specify the id of the object. The database usually takes care of that.

```js
app.post('/api/v1/tours', (req, res) => {
  //the data from the body in the console, just to verify that it actually works, so req.body.
  //get data from the body in the console
  console.log(req.body);
  const newId = tours[tours.length - 1].id + 1;
  //create a new object by merging two existing objects
  const newTour = Object.assign({ id: newId }, req.body);
  res.push(newTour);
  res.send('Done');
});
```

> why use fs.writefile instead of fs.writefileSync ?
>
> We are inside of a call-back function, that is gonna run in the event loop.  We can never, ever block the event loop.What we're gonna do is to use writeFile and not to Sync in this one. We want to pass in a call-back function that is gonna be processed in the background and as soon as it's ready, t's gonna put its event in one of the event loop queue, which is then gonna be handled as soon as the event loop passes that phase. Anyway, let's get the file name from up here, because we will really override this file o that when we restart this server, it's then gonna be there 

```js
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);


app.post('/api/v1/tours', (req, res) => {
  //the data from the body in the console, just to verify that it actually works, so req.body.
  //get data from the body in the console
  //console.log(req.body);
  const newId = tours[tours.length - 1].id + 1;
  //create a new object by merging two existing objects
  const newTour = Object.assign({ id: newId }, req.body);
  //push this tour into the tour array
  tours.push(newTour);
  //persist that into file,using fs.writeFileSync
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
  // res.send('Done');
  //Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
});
```

![Screen Shot 2023-03-08 at 10.42.12 PM](https://res.cloudinary.com/dxmfrq4tk/image/upload/v1678337054/Screen_Shot_2023-03-08_at_10.42.12_PM_ncb1sn.png)

> Convert javascript object into JSON, using `JSON.stringigy`

###  Responding to URL Parameters 

```js
app.get('/api/v1/tours/:id', (req, res) => {
  // where all the parameters of all the variables that we define here are stored
  console.log(req.params);
```

> postman `127.0.0.1:3000/api/v1/tours/5`
> console.log  `{id : "5"}`

```js
const id = req.params.id * 1;
```

> when we multiply a string that looks like a number,when we multiply that with another number,it will then automatically convert that string to a number.

- loop through the array,and in each of the iterations,we will have access to the current element,and we will return either true or false in each of the iterations

```js
  const tour = tours.find((el) => el.id === id);
```

> Now what the find method will then dois that basically, it will create an arraywhich only contains the elementwhere this comparison here turns out to be true, all right?And in this situation, we want to find the elementwhere the ID is equal to the onethat we get from the parameters.And so by specifying this callback function herewith this comparison, we will ensurethat only the element where the ID is actually equalto the specified ID in the parameterswill get returned from the find methodand stored into tour, all right?
>
> ![Screen Shot 2023-03-08 at 11.39.27 PM](https://res.cloudinary.com/dxmfrq4tk/image/upload/v1678340395/Screen_Shot_2023-03-08_at_11.39.27_PM_sokdhl.png)

```js
app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    //JSend data formations
    status: 'success',
    results: tours.length,
    data: {
      //   tours: tours,
      tours: tours,
    },
  });
});

app.get('/api/v1/tours/:id', (req, res) => {
  // where all the parameters of all the variables that we define here are stored
  console.log(req.params);
  //when we multiply a string that looks like a number,when we multiply that with another number,it will then automatically convert that string to a number.
  const id = req.params.id * 1;

  //loop through the array,and in each of the iterations,we will have access to the current element,and we will return either true or false in each of the iterations
  const tour = tours.find((el) => el.id === id);

  //check if the id is not existing
  if (!tour){
    return res.status(404).json({
      status: 'Not Found',
      message: 'Invalid ID',
    });
  }
  
/* if 127.0.0.1:3000/api/v1/tours/23, console.log
{
    "status": "Not Found",
    "message": "Invalid ID"
}
*/
  

  res.status(200).json({
    //JSend data formations
    status: 'success',
    data: {
      //   tours: tours,
      tour: tour,
    },
  });
});

```

### handling PATCH request

```js
app.patch('/api/v1/tours/:id', (req, res) => {
  //check if the id is not existing
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'failed',
      message: 'Invalid ID',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>',
    },
  });
});
```

### handling DELETE request

```js
app.delete('/api/v1/tours/:id', (req, res) => {
  //check if the id is not existing
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'failed',
      message: 'Invalid ID',
    });
  }
  res.status(204).json({
    status: 'success',
    data: null,
  });
});
```

### ✨Stage 1: all code

```js
const express = require('express');
const fs = require('fs');

//Get an instance (object) of the server
const app = express();

app.use(express.json());

// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .json({ message: 'Hello from the server side!', app: 'itsyuimoriiTours' });
// });
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    //JSend data formations
    status: 'success',
    results: tours.length,
    data: {
      //   tours: tours,
      tours: tours,
    },
  });
});

app.get('/api/v1/tours/:id', (req, res) => {
  // where all the parameters of all the variables that we define here are stored
  console.log(req.params);
  //when we multiply a string that looks like a number,when we multiply that with another number,it will then automatically convert that string to a number.
  const id = req.params.id * 1;

  //loop through the array,and in each of the iterations,we will have access to the current element,and we will return either true or false in each of the iterations
  const tour = tours.find((el) => el.id === id);

  //check if the id is not existing
  if (!tour) {
    return res.status(404).json({
      status: 'Not Found',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    //JSend data formations
    status: 'success',

    data: {
      //   tours: tours,
      tour: tour,
    },
  });
});

app.post('/api/v1/tours', (req, res) => {
  //the data from the body in the console, just to verify that it actually works, so req.body.
  //get data from the body in the console
  //console.log(req.body);
  const newId = tours[tours.length - 1].id + 1;
  //create a new object by merging two existing objects
  const newTour = Object.assign({ id: newId }, req.body);
  //push this tour into the tour array
  tours.push(newTour);
  //persist that into file,using fs.writeFileSync
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
  //res.send('Done');
});

app.patch('/api/v1/tours/:id', (req, res) => {
  //check if the id is not existing
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'failed',
      message: 'Invalid ID',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>',
    },
  });
});

app.delete('/api/v1/tours/:id', (req, res) => {
  //check if the id is not existing
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'failed',
      message: 'Invalid ID',
    });
  }
  res.status(204).json({
    status: 'success',
    data: null,
  });
});

//Start the server
const port = 3000;
app.listen(port, (error) => {
  if (!error)
    console.log(
      `Server is Successfully Running, and App is listening on port ${port}...`
    );
  else console.log("Error occurred, server can't start", error);
});

```

## Refactoring ROUTES

```js
const getAllTours = (req, res) => {
  res.status(200).json({
    //JSend data formations
    status: 'success',
    results: tours.length,
    data: {
      //   tours: tours,
      tours: tours,
    },
  });
};

app.get('/api/v1/tours', getAllTours);
```

```js
app.get('/api/v1/tours', getAllTours);
app.post('/api/v1/tours', createTour);
app.get('/api/v1/tours/:id', getTour);
app.patch('/api/v1/tours/:id', updateTour);
app.delete('/api/v1/tours/:id', deleteTour);

//optimize code
app
  .route('/api/v1/tours')
  .get(getAllTours)
  .post(createTour);

app
  .route('/api/v1/tours/:id')
  .get(getTour)
  .patch(createTour)
  .delete(deleteTour);
```

## Middleware and the Request-Response circle

> In fact, we have used middleware before. We use Express to point JSON to access the request body on the request object (body.parser). In fact, we can say that in Express, everything is middleware.**The initial request and response object progressively traverses each middleware.**

![Screen Shot 2023-03-09 at 10.54.59 AM](/Users/yuimorii/Desktop/Screen Shot 2023-03-09 at 10.54.59 AM.png)

### Create Middleware function

```js 
//create own middleware
app.use((req, res, next) => {
  console.log('Hello from the middleware 👋 ');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toDateString();
  next();
});
const getAllTours = (req, res) => {
  res.status(200).json({
    //JSend data formations
    status: 'success',
    requestedAt: req.requestTime,
    results: tours.length,
    data: {
      //   tours: tours,
      tours: tours,
    },
  });
};
```

> Output: `"requestedAt": "Thu Mar 09 2023",`

### Using 3rd-Party Middleware

[morgan github 🐈‍⬛](https://github.com/expressjs/morgan/blob/master/index.js)

```js
const morgan = require('morgan');
app.use(morgan('dev'));
```

> GET /api/v1/tours 200 4.770 ms - 8885

## Implementing the USER Routes

```js
const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not yet defined!',
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not yet defined!',
  });
};

const getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not yet defined!',
  });
};

const updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not yet defined!',
  });
};
const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not yet defined!',
  });
};

//UserRoutes
app.route('/api/v1/users').get(getAllUsers).post(createUser);

app
  .route('/api/v1/users/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

```

## Creating and Mounting Multiple Routers

```js
 
//Mounting Routes
const tourRouter = express.Router();
const userRouter = express.Router();

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

tourRouter.route('/').get(getAllTours).post(createTour);
tourRouter.route('/:id').get(getTour).patch(createTour).delete(deleteTour);

userRouter.route('/').get(getAllUsers).post(createUser);
userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);
```

## Better File structure

> app.js
>
> ```js
> const express = require('express');
> const morgan = require('morgan');
> 
> const tourRouter = require('./Routes/tourRoutes');
> const userRouter = require('./Routes/userRoutes');
> 
> //Get an instance (object) of the server
> const app = express();
> 
> // 1) MIDDLEWARE
> 
> app.use(morgan('dev'));
> app.use(express.json());
> app.use((req, res, next) => {
>   console.log('Hello from the middleware 👋 ');
>   next();
> });
> app.use((req, res, next) => {
>   req.requestTime = new Date().toDateString();
>   next();
> });
> 
> // 3) ROUTES
> app.use('/api/v1/users', userRouter);
> app.use('/api/v1/tours', tourRouter);
> 
> //app.get('/api/v1/tours', getAllTours);
> //app.post('/api/v1/tours', createTour);
> // app.get('/api/v1/tours/:id', getTour);
> // app.patch('/api/v1/tours/:id', updateTour);
> // app.delete('/api/v1/tours/:id', deleteTour);
> 
> module.exports = app;
> 
> ```

>Routes/tourRoutes.js
>
>```js
>const express = require('express');
>
>const tourController = require('./../controllers/tourController');
>
>const router = express.Router();
>
>router
>  .route('/')
>  .get(tourController.getAllTours)
>  .post(tourController.createTour);
>router
>  .route('/:id')
>  .get(tourController.getTour)
>  .patch(tourController.createTour)
>  .delete(tourController.deleteTour);
>
>module.exports = router;
>
>```

> Routes/userRoutes.js
>
> ```js
> const express = require('express');
> const userController = require('./../controllers/userController');
> const router = express.Router();
> 
> router
>   .route('/')
>   .get(userController.getAllUsers)
>   .post(userController.createUser);
> router
>   .route('/:id')
>   .get(userController.getUser)
>   .patch(userController.updateUser)
>   .delete(userController.deleteUser);
> 
> module.exports = router;
> 
> ```

> controllers/tourController.js
>
> ```js
> const fs = require('fs');
> 
> const tours = JSON.parse(
>   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
> );
> 
> // 2) ROUTE HANDLER
> exports.getAllTours = (req, res) => {
>   res.status(200).json({
>     //JSend data formations
>     status: 'success',
>     requestedAt: req.requestTime,
>     results: tours.length,
>     data: {
>       //   tours: tours,
>       tours: tours,
>     },
>   });
> };
> 
> exports.getTour = (req, res) => {
>   // where all the parameters of all the variables that we define here are stored
>   console.log(req.params);
>   //when we multiply a string that looks like a number,when we multiply that with another number,it will then automatically convert that string to a number.
>   const id = req.params.id * 1;
> 
>   //loop through the array,and in each of the iterations,we will have access to the current element,and we will return either true or false in each of the iterations
>   const tour = tours.find((el) => el.id === id);
> 
>   //check if the id is not existing
>   if (!tour) {
>     return res.status(404).json({
>       status: 'Not Found',
>       message: 'Invalid ID',
>     });
>   }
> 
>   res.status(200).json({
>     //JSend data formations
>     status: 'success',
> 
>     data: {
>       //   tours: tours,
>       tour: tour,
>     },
>   });
> };
> 
> exports.createTour = (req, res) => {
>   //the data from the body in the console, just to verify that it actually works, so req.body.
>   //get data from the body in the console
>   //console.log(req.body);
>   const newId = tours[tours.length - 1].id + 1;
>   //create a new object by merging two existing objects
>   const newTour = Object.assign({ id: newId }, req.body);
>   //push this tour into the tour array
>   tours.push(newTour);
>   //persist that into file,using fs.writeFileSync
>   fs.writeFile(
>     `${__dirname}/../dev-data/data/tours-simple.json`,
>     JSON.stringify(tours),
>     (err) => {
>       res.status(201).json({
>         status: 'success',
>         data: {
>           tour: newTour,
>         },
>       });
>     }
>   );
>   //res.send('Done');
> };
> 
> exports.updateTour = (req, res) => {
>   //check if the id is not existing
>   if (req.params.id * 1 > tours.length) {
>     return res.status(404).json({
>       status: 'failed',
>       message: 'Invalid ID',
>     });
>   }
>   res.status(200).json({
>     status: 'success',
>     data: {
>       tour: '<Updated tour here...>',
>     },
>   });
> };
> 
> exports.deleteTour = (req, res) => {
>   //check if the id is not existing
>   if (req.params.id * 1 > tours.length) {
>     return res.status(404).json({
>       status: 'failed',
>       message: 'Invalid ID',
>     });
>   }
>   res.status(204).json({
>     status: 'success',
>     data: null,
>   });
> };
> ```

> controllers/userController.js
>
> ```js
> // 2) ROUTE HANDLER
> exports.getAllUsers = (req, res) => {
>   res.status(500).json({
>     status: 'error',
>     message: 'this route is not yet defined!',
>   });
> };
> 
> exports.createUser = (req, res) => {
>   res.status(500).json({
>     status: 'error',
>     message: 'this route is not yet defined!',
>   });
> };
> 
> exports.getUser = (req, res) => {
>   res.status(500).json({
>     status: 'error',
>     message: 'this route is not yet defined!',
>   });
> };
> 
> exports.updateUser = (req, res) => {
>   res.status(500).json({
>     status: 'error',
>     message: 'this route is not yet defined!',
>   });
> };
> exports.deleteUser = (req, res) => {
>   res.status(500).json({
>     status: 'error',
>     message: 'this route is not yet defined!',
>   });
> };
> ```

> server.js
>
> ```js
> const app = require('./app');
> 
> // 4) START SERVER
> const port = 3000;
> app.listen(port, (error) => {
>   if (!error)
>     console.log(
>       `Server is Successfully Running, and App is listening on port ${port}...`
>     );
>   else console.log("Error occurred, server can't start", error);
> });
> ```

### Setup server.js

```bash
    "start": "nodemon server.js"
    
    npm start
```





