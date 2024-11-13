export default class Task {
    constructor(title, desc, dueDate, priority){
        this.id = generateID();
        this.title = title,
        this.desc = desc,
        this.dueDate = dueDate,
        this.priority = priority
    }

    getID() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }

    setTitle(value) {
        this.title = value;
    }

    getDesc() {
        return this.desc;
    }

    setDesc(value) {
        this.desc = value;
    }

    getDueDate() {
        return this.dueDate;
    }

    setDueDate(value) {
        this.dueDate = value;
    }

    getPriority() {
        return this.priority;
    }

    setPriority(value) {
        this.priority = value;
    }

    getDetails() {
        return `(${this.id}) ${this.title} - ${this.desc}, Due: ${this.dueDate}, Priority: ${this.priority}`;
    }

   

}

function generateID() {
    return Math.random().toString(36).substring(2,9);
}