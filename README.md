# stitch
For this submission I have targeted a React/Typescript/GraphQL client solution that simply makes your most popular query

```
query ListBanks {
        banks {
            country
            name
    	}
    }
```

I have re-used a training app from https://github.com/apollographql-education/odyssey-client-side-graphql.git

The only files of interest are:
```
./codegen.tsx
./src/index.tsx
./src/properties.tsx
./generated/*
./src/pages/index.tsx
./src/pages/tracks.tsx
./src/utils/apollo-clients.tsx
```

The app WILL NOT retrieve anything in its current state because the server side isn't CORS enabled and it isn't configured correctly.  With more time I could get around this by standing up a local backend, enabling CORS and configuring it correctly.  I don't have that time.
The client call error message is "[Network error]: ServerParseError: Unexpected end of JSON input" because of the aforementioned configuration resulting in the server side returning an empty response.
        
        
       
