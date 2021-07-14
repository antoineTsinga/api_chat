export class Message {
    constructor(_id, body, users, chanel, date_et_heure, isRead ){
    this._id = _id;
    this.body = body;
    this.chanel= chanel;
    this.date_et_heure= date_et_heure;
    this.users = users;
    this.isRead = isRead;
    }
    
  }
  