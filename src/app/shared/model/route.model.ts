import { User } from './user.model';
export class Route {
    public id: string;
    public title: string;
    city: string;
    price: string;
    public description: string;
    phone: string;
    password?: string;
    startPoint: Array<Number>;
    endPoint: Array<Number>;
    img: string;
    owner: User;
    duration: string;
    transport: string;
}
