const typeDefs = `

    type User {
        _id: String!
        name: String
        password: String
        email: String
    }

    type Query {
        allUsers: [User]
    }

    type Mutation {
        addUser(
            name: String,
            email: String,
            password: String,
        ): User
    }
`;


export default typeDefs;