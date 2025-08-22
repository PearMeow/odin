// storages/usersStorage.js
// This class lets us simulate interacting with a database.
class UsersStorage {
    constructor() {
        this.storage = {};
        this.id = 0;
    }

    addUser({ firstName, lastName, email, age = "", bio = "" }) {
        const id = this.id;
        this.storage[id] = { id, firstName, lastName, email, age, bio };
        this.id++;
    }

    getUsers() {
        return Object.values(this.storage);
    }

    getUser(id) {
        return this.storage[id];
    }

    updateUser(id, { firstName, lastName, email, age = "", bio = "" }) {
        this.storage[id] = { id, firstName, lastName, email, age, bio };
    }

    searchUser(name, email) {
        for (let id in this.storage) {
            if (
                this.storage[id].firstName + " " + this.storage[id].lastName ===
                    name ||
                this.storage[id].email === email
            ) {
                return this.getUser(id);
            }
        }
        return null;
    }

    deleteUser(id) {
        delete this.storage[id];
    }
}
// Rather than exporting the class, we can export an instance of the class by instantiating it.
// This ensures only one instance of this class can exist, also known as the "singleton" pattern.
module.exports = new UsersStorage();
