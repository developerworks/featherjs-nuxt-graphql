const resolvers = function() {
    
    const service = this.service('users');

    return {
        Query: {
            allUsers: async () => {
                
                const result = await service.find();
                return result.data;
                // return [{ id: 123, name: 'Ly Nam' }]
            }
        },
        Mutation: {
            addUser: async (_, params) => {
                // validate
                // ...
                // tim user
                const result = await service.find({ name: params.name });
                console.log(result);
                if (result.data.length > 0)
                    return result.data[0];
                return await service.create(params);
            }
        }
    }
}
export default resolvers;