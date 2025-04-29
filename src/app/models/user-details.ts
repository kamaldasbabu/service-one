export interface IUser {
    name: string,
    token?: string,
    contact?: {
        email?: string,
        phoneNo?: string,
        emergencyPhoneNo?: string
    },
    photoUrl?: string,
    address?: {
        street?: string,
        city?: string,
        state?: string,
        zip?: string
    },
    servicesOffered?: [
        {
            serviceName?: string,
            minPrice?: 0,
            maxPrice?: 0,
            description?: string
        }
    ]
}