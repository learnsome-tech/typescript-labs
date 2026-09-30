interface Identifiable<ID> {
  id: ID;
}
interface Repository<T extends Identifiable<ID>, ID> {
  save(entity: T): void;
  findById(id: ID): T | undefined;
}
class InMemoryRepo<T extends Identifiable<ID>, ID>
  implements Repository<T, ID> {
  private items = new Map<ID, T>();
  save(entity: T): void {
    this.items.set(entity.id, entity);
  }
  findById(id: ID): T | undefined {
    return this.items.get(id);
  }
}
interface Account { id: string; balance: number }
const repo = new InMemoryRepo<Account, string>();
repo.save({ id: "acc-1", balance: 500 });
console.log(`Found: ${repo.findById("acc-1")?.balance}`);
