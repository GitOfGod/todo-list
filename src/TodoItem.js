export default class TodoItem {
    constructor(title, desc, dueDate, priority){
        this.title = title,
        this.desc = desc,
        this.dueDate = dueDate,
        this.priority = priority
    }

    getDetails() {
        return `${this.title} - ${this.desc}, Due: ${this.dueDate}, Priority: ${this.priority}`;
    }
}