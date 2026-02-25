export interface PingRepository {
    ping(): Promise<string>;
}
