## Part 1: Simple web app

Build a very basic web app to perform basic calculations on numbers supplied in the URL.

Use Express. You don't need to use an HTML templater like EJS or Pug, just respond with plain text.

The web server should provide the following routes:

```
/zero
/add
/subtract
/double/:number
```

All routes just respond with a plain text response. The `/add` and `/subtract` routes all take a query string with two numbers `a` and `b`.

Example requests and responses:

```
request: GET /zero
response: 0

request: GET /add?a=4&b=8
response: 12

request: GET /subtract?a=9&b=2
response: 7

request: GET /double/9
response: 18
```

### Requirements

- [ ] __10:__ All files are stored under the `part-1/` folder
- [ ] __10:__ All dependencies are specified in a `package.json` file
- [ ] __10:__ Web server can be started with `npm start` command
- [ ] __20:__ GET requests to the `/zero` route respond with plain text `0`
- [ ] __20:__ GET requests to the `/add` route add the two numbers provided in the query string variables `a` and `b` and respond with the result
- [ ] __20:__ GET requests to the `/subtract` route subtract the value of the query string variable `b` from the query string variable `a` and respond with the result
- [ ] __20:__ GET requests to the `/double/:number` route doubles the number provided in the URL (in place of `:number`) and responds with the result
