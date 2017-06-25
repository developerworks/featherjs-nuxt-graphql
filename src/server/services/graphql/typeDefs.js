const typeDefs = `

    type User {
        _id: String!
        name: String
        password: String
        email: String
    }

    type Tag {
        _id: String!
        name: String
        slug: String
    }

    type Comment {
        _id: String!
        post: Post
        content: String
        comments: [Comment]
    }

    type Post {
        _id: String!
        title: String
        slug: String
        tags: [Tag]
        intro: String
        content: String
        author: User
    }

    type Query {
        allUsers: [User]
        allPosts: [Post]
        allTags: [Tag]
        allComments: [Comment]

        tagByName(name: String) : Tag
    }

    type Mutation {
        addUser(
            name: String,
            email: String,
            password: String,
        ): User

        addTag(
            name: String,
        ) : Tag

        addPost(
            title: String!,
            intro: String,
            content: String,
        ) : Post

        addComment(
            content: String
        ) : Comment
    }
`;


export default typeDefs;