import { slug } from '../../../helpers';

const resolvers = function() {
    
    const userService = this.service('users');
    const tagService = this.service('tag');

    return {
        Query: {
            allUsers: async () => {
                
                const result = await userService.find();
                return result.data;
                // return [{ id: 123, name: 'Ly Nam' }]
            },

            allTags: async () => {
                return await tagService.find();
            }
        },
        Mutation: {
            addUser: async (_, params) => {
                // validate
                // ...
                // tim user
                const result = await userService.find({ name: params.name });
                
                if (result.data.length > 0)
                    return result.data[0];
                return await userService.create(params);
            },

            addTag: async (_, { name }) => {
                
                const result = await tagService.find({ 
                    query: { name }
                });
                
                if (result.length > 0)
                    return result[0];
                
                return await tagService.create({ name, slug: slug(name) });
            }
        }
    }
}
export default resolvers;