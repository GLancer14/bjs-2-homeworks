class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
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
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
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
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (mark > 5 || mark < 2) {
      return;
    }

    if (!this.marks.hasOwnProperty(subject)) {
      this.marks[subject] = [];
    }

    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if (!this.marks.hasOwnProperty(subject)) {
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