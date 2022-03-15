Start Frontend

```
cd frontend
yarn start
```

Start Backend

```
dotnet run
```

## Example

1. Adding items to the list saves them in memory to the backend.
   ![basiclist](./docs/basiclist.png)

2. Pressing Edit button allows changing of item, on confirm saves to memory in the backend.
   ![basiclistediting](./docs/basiclistediting.png)

3. Delete button removes item from list and removes from memory on backend.
   ![basiclistdelete](./docs/basiclistdelete.png)

Data is fetched from the backend when page is reloaded.

Ideally would be saving to database, may implement at a later time.
