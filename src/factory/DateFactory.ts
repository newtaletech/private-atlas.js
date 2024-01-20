export default class DateFactory{
     static padTo2Digits(num: number){
        return num.toString().padStart(2, '0');
      }
      
      static formatDate(date: Date) {
        return (
          [
            DateFactory.padTo2Digits(date.getDate()),
            DateFactory.padTo2Digits(date.getMonth() + 1),
            date.getFullYear(),
          ].join('-') +
          ' ' +
          [
            DateFactory.padTo2Digits(date.getHours()),
            DateFactory.padTo2Digits(date.getMinutes()),
            DateFactory.padTo2Digits(date.getSeconds()),
          ].join(':')
        );
      }
}