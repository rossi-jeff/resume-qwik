export class GraphQlClient {
    private baseUrl = "https://resume-gql.jeff-rossi.com/graphql"

    async query(options: { query: string, variables?: { [key: string]: any } }) {
        const { query, variables } = options;
        return fetch(this.baseUrl, {
            method: 'POST',
            body: JSON.stringify({ query, variables }),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
    }

    async mutate(options: { mutation: string, variables: { [key: string]: any } }) {
        const { mutation, variables } = options;
        return fetch(this.baseUrl, {
            method: 'POST',
            body: JSON.stringify({ query: mutation, variables }),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
    }
}