import * as dto from '../dto/userDto';

export default class usersController {
    public getCurrent = (): dto.userDto => {
        const userId = parseInt((Math.random() * 100).toFixed(0));
        return {
            userName: `testUser${userId}`,
            userId: userId,
            roles: ['admin']
        };
    };

    public createUser = (userName: string): dto.userDto => {
        const userId = parseInt((Math.random() * 100).toFixed(0));
        return {
            userName: `${userName}${userId}`,
            userId: userId,
            roles: ['admin']
        };
    };
}
