class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = state;
    this.type = type;
  }

  fix() {
    this.state *= 1.5;
  }

  get state() {
    return this._state;
  }

  set state(value) {
    if (value < 0) {
      return this._state = 0;
    } else if (value > 100) {
      return this._state = 100;
    } else {
      return this._state = value;
    }
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state) {
    super(name, releaseDate, pagesCount, state);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(name, releaseDate, pagesCount, state);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = "detective";
  }
}

class Library {
  constructor(name, books = []) {
    this.name = name;
    this.books = books;
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    return this.books.find(item => item[type] === value) || null;
  }

  giveBookByName(bookName) {
    const bookIndex = this.books.findIndex(item => item.name === bookName);
    return (bookIndex === -1) ? null : this.books.splice(bookIndex, 1)[0];
  }
}

class Student {
  constructor(name, marks = {}) {
    this.name = name;
    this.marks = marks;
  }

  addMark(mark, subject) {
    if (mark > 5 || mark < 2) {
      return;
    }

    if (!this.marks[subject]) {
      this.marks[subject] = [];
    }

    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if (!this.marks[subject]) {
      return 0;
    }

    return this.marks[subject].reduce((acc, item, index, arr) => (index !== arr.length - 1) ? (item + acc) : ((item + acc) / arr.length));
  }

  getAverage() {
    const subjectsNames = Object.keys(this.marks);
    if (subjectsNames.length === 0) {
      return 0;
    }

    return subjectsNames.reduce((acc, item) => acc + this.getAverageBySubject(item), 0) / subjectsNames.length;
  }
}