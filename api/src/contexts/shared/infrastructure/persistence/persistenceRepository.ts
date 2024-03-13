export function PersistRepository<T> (): void {
  this.repository = async (): Promise<unknown> => this.entitySchema()

  this.persist = async function (aggregateRoot: T): Promise<any> {
    const Repository = await this.repository()
    const model = new Repository(aggregateRoot as any)
    await model.save()
  }
}