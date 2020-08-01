import axios from 'axios';

const db = axios.create({
    baseURL: 'http://localhost:3333/',
});

export default {
    authenticate: async (login) => {
        try {
            const response = await db.post('authenticate', login);

            return response.data;
        } catch (err) {
            console.error(err);
        }

        return false;
    },

    user: async (token) => {
        try {
            const response = await db.get('user', {
                headers: {
                    Authorization: 'bearer ' + token
                }
            });

            return response.data;
        } catch (err) {
            console.error(err);
        }

        return false;
    },

    posts: async () => {
        try {
            const response = await db.get('blog');

            return response.data;
        } catch (err) {
            console.error(err);
        }

        return [];
    },

    publishPost: async (post, authToken) => {
        try {
            const response = await db.post('blog', post, {
                headers: {
                    Authorization: 'bearer ' + authToken
                }
            });

            return response.data;
        } catch (err) {
            console.error(err);
        }

        return false;
    },

    deletePost: async (id, authToken) => {
        try {
            await db.delete('blog/' + id, {
                headers: {
                    Authorization: 'bearer ' + authToken
                }
            });

            return true;
        } catch (err) {
            console.error(err);
        }

        return false;
    },

    post: async (id) => {
        try {
            const response = await db.get('blog/' + id);

            return response.data;
        } catch (err) {
            console.error(err);
        }

        return false;
    }
}