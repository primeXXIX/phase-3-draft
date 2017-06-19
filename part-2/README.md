# part-2 specs

Build a small PostgreSQL database for a grocery store, then connect and write queries using Node.js. Same idea as in part 3, but focused on the database side.

Design a database to store **grocery items**, **shoppers**, and shoppers' **orders**. Let's call the database `grocery_store` (so clever, I know).

You'll need to design the schema and write some SQL statements to insert data. Look closely at the requirements to determine how to design your schema.

Use the provided [grocery item data][grocery-data] to seed your grocery items table, and write some custom insert statements to add 3-5 rows to the shoppers and orders tables and any join tables you may need to connect them all.

Then, use [pg-promise](https://www.npmjs.com/package/pg-promise) and [Mocha](https://mochajs.org/) + [Chai](http://chaijs.com/) to write and test database queries.

### Requirements

- [ ] __10:__ All files are stored under the `part-2/` folder
- [ ] __10:__ Database schema (all `CREATE TABLE` statements) is defined in a file `schema.sql`
- [ ] __10:__ SQL script to insert [grocery seed data][grocery-data] and load from CSV is created in a file `load-data.sql`
- [ ] __10:__ All database query functions are written in a file `database.js`, and tests for queries are written in a file `database_test.js`

Implement these functions in `database.js` using [pg-promise](https://www.npmjs.com/package/pg-promise) to make the following queries:

- [ ] __20:__ `allItems()` : Find the IDs, names, prices, and sections for all grocery **items**
- [ ] __20:__ `itemsInSection(<section>)` : Find the IDs and names of all grocery **items** in the given section
- [ ] __20:__ `cheapItems()` : Find the IDs and prices of all grocery **items** that cost less than $10.00, ordered from lowest to highest price
- [ ] __20:__ `countItemsInSection(<section>)` : Get the count of all grocery **items** in the given section
- [ ] __20:__ `mostRecentOrders()` : Find the IDs and order dates for the 10 most recent **orders**
- [ ] __20:__ `lastShopperName()` : Find the shopper's name who made the most recent **order**
- [ ] __20:__ `orderTotal(<ID>)` : Find the sum of all prices for items for a specific **order**

Write tests with [Mocha](https://mochajs.org/) + [Chai](http://chaijs.com/) in `database_test.js` that assert:

- [ ] __20:__ A call to `itemsInSection("bulk")` returns the items `"Flour"`, `"Pasta"`, and `"Rice"`
- [ ] __20:__ A call to `cheapItems()` returns the item `"Fish"` as the first item and `"Honey"` as the last item
- [ ] __20:__ A call to `countItemsInSection("packaged")` returns `5`
