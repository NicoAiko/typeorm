export class FirebirdConnectionCredentialOptions {
    /**
     * Host for connection
     */
    host?: string;
    /**
     * Connection port
     */
    port?: number;

    /**
     * Database name
     */
    database?: string;

    /**
     * User for authentication
     */
    username?: string;

    /**
     * Password for authentication
     */
    password?: string;

    /**
     * Use lowercase keys
     */
    lowercase_keys?: boolean;

    /**
     * Database role
     */
    role?: string;

    /**
     * Page size
     */
    pageSize?: number;
}
