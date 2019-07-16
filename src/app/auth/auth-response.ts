export interface AuthResponse {
    user: {
        id: number,
        email: string,
        access_token: string,
        expires_in: number
    }
}