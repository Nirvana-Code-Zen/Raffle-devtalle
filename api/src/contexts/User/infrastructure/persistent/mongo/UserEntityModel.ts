import { ClientFactory } from "~context/shared/infrastructure/persistence/Mongo/ClientFactory";

export async function UserEntityModel () {
    const client = ClientFactory.createClient()
    console.log(client)
}
