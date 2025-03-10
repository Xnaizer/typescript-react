
// Basic Generic Interface

interface Box<T> {
    value: T;
}

let stringBox: Box<string> = { value: "Hello" };
let numberBox: Box<number> = { value: 100 };


// Multiple Generic Types

interface Pair<K, V> {
    key: K;
    value: V;
  }
  
  let user: Pair<number, string> = { key: 1, value: "Alice" };
  let product: Pair<string, number> = { key: "Laptop", value: 1500 };
  
  console.log(user); // Output: { key: 1, value: "Alice" }
  console.log(product); // Output: { key: 'Laptop', value: 1500 }
  


//   Nested Generic Interface

interface ResponseData<T> {
    status: number;
    data: T;
}

interface User {
    id: number;
    name: string;
}

let userResponse: ResponseData<User> = {
    status: 200,
    data: { id: 1, name: "Alice" },
};

console.log(userResponse); // Output: { status: 200, data: { id: 1, name: 'Alice' } }


// Batasan (Constraints) dalam Generic Interface

interface Identifiable {
    id: number;
  }
  
  interface Repository<T extends Identifiable> {
    findById(id: number): T | undefined;
    add(item: T): void;
  }
  
  class UserRepo implements Repository<{ id: number; name: string }> {
    private users: { id: number; name: string }[] = [];
  
    add(user: { id: number; name: string }) {
      this.users.push(user);
    }
  
    findById(id: number) {
      return this.users.find(user => user.id === id);
    }
  }
  
  const repo = new UserRepo();
  repo.add({ id: 1, name: "Alice" });
  repo.add({ id: 2, name: "Bob" });
  
  console.log(repo.findById(1)); // Output: { id: 1, name: "Alice" }
  console.log(repo.findById(3)); // Output: undefined
  


// Generic Interface dalam function

interface Repository<T> {
  add(item: T): void;
  remove(item: T): void;
  getAll(): T[];
}

class DataRepository<T> implements Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  remove(item: T): void {
    this.items = this.items.filter(i => i !== item);
  }

  getAll(): T[] {
    return [...this.items];
  }
}

const userRepo = new DataRepository<string>();
userRepo.add("Alice");
userRepo.add("Bob");
userRepo.remove("Alice");
console.log(userRepo.getAll()); // Output: ['Bob']

const numberRepo = new DataRepository<number>();
numberRepo.add(10);
numberRepo.add(20);
console.log(numberRepo.getAll()); // Output: [10, 20]
