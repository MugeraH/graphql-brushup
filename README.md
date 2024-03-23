# GRAPHQL REFRESHER

Sample grqphql node js server i created while relearning graphql, form this tutorial

[GraphQL Course](https://www.youtube.com/watch?v=5199E50O7SI)



##Setup

1. Clone project
2. Run npm install
3. Run npm run dev 


## QUERIES

### Get All Games

```
query GamesQuery{
  games{
    title
    platform
  }
}
```

### Get Game Details

```
query GameQuery($id:ID!) {
  game(id:$id){
    title
    platform
    id
    reviews {
      rating
      content
    author{
      name
    }
    }
  }
}
```

### Get Review Details

```
query ReviewQuery($id:ID!){
  review(id:$id){
    id
    rating
    game{
      id
      title
      reviews{
        rating
        id
        author {
          name
        }
      }
    }
    author{
      name
    }
  }
}
```

### Get Author Details

```
query AuthorQuery ($id:ID!){
author(id:$id){
  name
  verified
  reviews {
    rating
    content
    author {
      name
    }
  }
}
}
```

## MUTATIONS

### Delete Game

```
mutation DeleteMutation($id:ID!){
  deleteGame(id: $id) {
    id
    title
    platform
  }
}

```


### ADD Game

```
mutation AddGameMutation($game:AddGameInput! ){
addGame(game: $game) {
  title
  id
}
}
```

```
args
{"game":{
    "title":"Mortal Kombat",
"platform": [
  "XBOX"
],
}}
```


### UPDATE Game
```
mutation EditGameMutation($edits:EditGameInput!,$id:ID!){
updateGame(edits:$edits,id:$id){
  title
platform
}
}

```

```
args

{
  
"edits":{
    "title":"Halo","platform": [
          "Switch","XBOX"
        ]
} ,
"id":"1"
}
```
