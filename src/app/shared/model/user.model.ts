export class User {
    id: string;
    email: string;
    nick: string;
    about: string;
    phone: string;
    password?: string;
    birthdate: Date;
    img: string;

    static fromJson(user: User): User {
        return Object.assign(new User(), user);
    }
}

