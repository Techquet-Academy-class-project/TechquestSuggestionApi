# Experience Web API

### description of what you are expected to build.

The goal of this project is to build a web API people (Techquest students) can go and share their unfiltered heartfelt experience and suggestions for the program, without having to log in and being recognized
## Routes

Your API should have these endpoints.

#### No Auth Routes

* `POST /experience`  => add a new experience/suggestion; you should be expecting {text : String} from the client
* `GET /experience` => return all sharedExperience with property show = true
* `POST /login` {username, password}
* `POST /register` what you should be expecting from the client{username, password, name}
#### Auth Route

the reason for sign up and auth route is to have a moderator

* `PUT /experience/:id` update an experience/suggestion show property to true of false

### Your Schema should look something like this

```
   experienceschema {
    text :
    show : Bolean [default should be true]
}

moderatorSchema {
    name : [required],
    email : [required, unique],
    password : required
}

```

## Contributing

Note: Only users added as contributors to this project are allowed!

Each contributors should have two branches, one for creating the app using a json database and another using mongodb
To contribute :

1. Clone this repo.
   ``` $ git clone https://github.com/Techquet-Academy-class-project/receipeApi.git  ```
3. From the master branch, create your own branch, your branch format should be `Yourname/mongodb ` or `Yourname/jsondb`
   
   ```$ git checkout master ```
   
   ``` $ git checkout -b yourname/jsondb```
   
5. write your codes, commit each feature you implement and push to your own branch

   ``` $ git push origin yourname/jsondb```
