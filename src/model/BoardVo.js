import moment from 'moment'

export default class BoardVo {

  idx;
  title;
  description;
  author;
  cnt;
  regdate;

  #data;

  //  data: param Object
  constructor(data) {
    Object.keys(data).forEach(key => {
      if (this.hasOwnProperty(key)) {
        this[key] = data[key]
      }
    })
    this.#data = data;
  }

  get relativeRegdate(){
    return moment(this.regdate).fromNow()
  }

}