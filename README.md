### Installing

Installing NPM modules on both client and server folders

Execute these commands from the project directory

```
cd client && npm install
```

```
cd server && npm install
```

### Running the app

Open a terminal on server directory

```
npm run start:dev
```

and open another terminal on client directory

```
npm run start
```

Access the web app at http://localhost:3000/

### MongoDB
You have to change your database to local to mongodb atlas. Because in this deployment we are not creating db server. So we will be using mongo atlas url. So find your mongodb cloud url with database which will look like this: `mongodb+srv://myusername:myclusterpassword@mycluster.mongodb.net/ecommerce?retryWrites=true&w=majority`
   and
   and goto `.env` file and replace the first variable to your latest mongodb cloud url like this:
   `DATABASE=mongodb+srv://myusername:myclusterpassword@mycluster.mongodb.net/ecommerce?retryWrites=true&w=majority`
   Don't just put this url. Your url will be different. You will find it in your mongo cluster setting.
   The old variable will be like this: `DATABASE=mongodb://127.0.0.1:27017/ecommerce
` and your new one should look like this:
   `DATABASE=mongodb+srv://myusername:myclusterpassword@mycluster.mongodb.net/ecommerce?retryWrites=true&w=majority`