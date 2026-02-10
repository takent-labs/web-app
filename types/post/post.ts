export interface Post {
    id: string;
    userId: string;
    content: string;
    imageUrl?: string;
    hashtags?: string[];
    createdAt: string;
    updatedAt?: string;
    user: {
        username: string;
        imageUrl?: string;
    };
}