export interface IUser {
    name: string,
    isLoggedIn?: boolean,
    userName?: string,
    token?: string,
    contact?: {
        email?: string,
        phoneNo?: string,
        emergencyPhoneNo?: string
    },
    photoUrl?: string,
    address?: IUserAddress,
    servicesOffered?: [
        {
            serviceName?: string,
            minPrice?: 0,
            maxPrice?: 0,
            description?: string
        }
    ],
    navigation?: {
        dashboard: boolean,
        profile: boolean,
        services: boolean,
        signIn: boolean,
        subscription: boolean
    },
    subscription?: {
        name?: string | null,
        durationInDays?: number | null,
        maximumBooking?: number | null,
        price?: number | null,
        planSubscribed?: boolean
    }
}

export interface IUserAddress {
    street?: string,
    city?: string,
    state?: string,
    zip?: string
}