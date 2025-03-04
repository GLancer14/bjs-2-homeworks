describe('Домашнее задание к лекции 5 «Классы»: тесты для библиотеки', () => {
  describe('Задача №2', () => {
    let library, printItems;
  
    beforeEach(function(){
      library = new Library('Центральная библиотека');
      printItems = [
        new PrintEditionItem('Типовой школьный журнал', 2019, 102),
        new Magazine('TopGear', 2022, 67),
        new NovelBook('S.Johnson', 'Summer days', 1919, 253),
        new FantasticBook('F.Peters', 'Space encounter', 1968, 311),
        new DetectiveBook('F.Stone', 'Cold wind', 2010, 220),
      ];
      printItems.forEach(item => library.addBook(item));
    });

    it('создание библиотеки', () => {
      expect(library).toBeDefined();
      expect(library.name).toEqual('Центральная библиотека');
      expect(library.books).toEqual(jasmine.any(Array));
    });
    
    it('добавление книги', () => {
      expect(library.books[0].name).toEqual('Типовой школьный журнал');
      expect(library.books[4].name).toEqual('Cold wind');
      expect(library.books.length).toEqual(5);
    });
    
    it('поиск книги', () => {
      const firstBook = library.findBookBy("releaseDate", 1919);
      expect(firstBook.name).toEqual('Summer days');
      const secondBook = library.findBookBy("releaseDate", 2154);
      expect(secondBook).toEqual(null);
    });
    
    it('выдача книги', () => {
      const firstBook = library.giveBookByName('Space encounter');
      expect(firstBook.name).toEqual('Space encounter');
      expect(library.books.length).toEqual(4);
      const secondBook = library.giveBookByName('Судовой журнал');
      expect(secondBook).toEqual(null);
    });

    it('повреждение, восстановление и возврат выданной книги', () => {
      const firstBook = library.giveBookByName('Space encounter');
      expect(firstBook.name).toEqual('Space encounter');
      expect(library.books.length).toEqual(4);
      firstBook.state = 30;
      firstBook.fix();
      expect(firstBook.state).toEqual(45);
      library.addBook(firstBook);
      expect(library.books[library.books.length - 1].name).toEqual('Space encounter');
      expect(library.books.length).toEqual(5);
      const secondBook = library.giveBookByName('Судовой журнал');
      expect(secondBook).toEqual(null);
    });
  })
});